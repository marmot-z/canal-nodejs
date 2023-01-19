import CanalConnector from './canal-connector';
import PSocket from './psocket';
import net from 'net';
import async from 'async';
import * as $protobuf from "protobufjs";
import { com } from './gen/canal-proto'
import protocol = com.alibaba.otter.canal.protocol;
import Message from './Message';
import CanalMessageDeserializer from './canal-message-deserializer';

class ClientIdentity {
    destination: string;
    id: number;
    filter: string | null;

    constructor(arg: {
        destination: string;
        id?: number; 
        filter?: string
    }) {
        this.destination = arg.destination;
        this.id = arg.id || 10001;
        this.filter = arg.filter || null;
    }
}

class SimpleCanalConnector implements CanalConnector {
    private host: string;
    private port: number;
    private username: string;
    private password: string;
    private clientIdentity: ClientIdentity;
    private connected: boolean;
    private psocket: PSocket | null;
    private supportedCompressions: protocol.Compression | null = null;

    constructor(arg: {
        host: string;
        port: number;
        destination: string;
        username: string;
        password: string,
        filter?: string
    }) {
        this.host = arg.host;
        this.port = arg.port;
        this.username = arg.username;
        this.password = arg.password;
        this.clientIdentity = new ClientIdentity({
            destination: arg.destination,
            filter: arg.filter
        });
        this.connected = false;
        this.psocket = null;
    }

    public connect(): Promise<void> {
        if (this.connected) return Promise.resolve();

        return this._connect()
            .then(() => {
                return new Promise((resolve, reject) => {                
                    return this.clientIdentity.filter ?
                        this.subscribe(this.clientIdentity.filter)
                            .then(resolve)
                            .catch(reject) :
                        resolve()
                })                
            });
    }

    private _connect(): Promise<void> {
        this.psocket = new PSocket(net.createConnection({
            port: this.port,
            host: this.host,
            writable: true,
            readable: true,
            timeout: 60 * 60 * 1000
        }));

        return new Promise((resolve, reject) => {
            async.waterfall([
                (callback: (err?: Error | null) => void) => {
                    this.psocket?.on('connect', callback);
                    this.psocket?.on('error', callback);
                    this.psocket?.on('timeout', callback);
                },
                // 握手
                (callback: (err: Error | null, seed?: Uint8Array) => void) => this._handshake(callback),
                // 登录
                (seed: Uint8Array, callback: (err: Error | null) => void) => this._login(callback),
                // 验证是否登录成功
                (callback: () => void) => this._verifyLoginSuccessful(callback)
            ], (err?: Error | null) => {
                if (err) {
                    reject(err);
                    return;
                }

                this.connected = true;

                resolve();
            })
        });       
    }

    private _handshake(callback: (err: Error | null, seed?: Uint8Array) => void): void {
        let _parse = (data: Buffer) => {
            let packet: protocol.Packet = protocol.Packet.decode(data);
            let err: Error | null = null;
        
            if (packet.version != 1) {
                err = new Error('Unsupported version at this client.');
            }
        
            if (packet.type != protocol.PacketType.HANDSHAKE) {
                err = new Error('Expect handshake but found other type.');
            }
        
            if (err) {
                callback(err);
                return;
            }
        
            let handshake: protocol.Handshake = protocol.Handshake.decode(packet.body);
            this.supportedCompressions = handshake.supportedCompressions;
            
            callback(null, handshake.seeds);
        }

        this.psocket?.read()
            .then(_parse)
            .catch(callback);
    }

    private _login(callback: (err: Error | null) => void): void {
        let packet: Uint8Array = encodeProtocol(protocol.Packet, {
            type: protocol.PacketType.CLIENTAUTHENTICATION,
            body: encodeProtocol(protocol.ClientAuth, {
                username: this.username || '',
                password: Buffer.from(this.password || '', 'utf-8')
            })            
        });

        this.psocket?.write(packet as Buffer)
            .then(() => callback(null))
            .catch(callback);
    }

    private _verifyLoginSuccessful(callback: (err: Error | null) => void): void {
        let _parse = (data: Buffer) => {
            let ack: protocol.Packet = protocol.Packet.decode(data);
            let err: Error | null = null;
            
            if (ack.type != protocol.PacketType.ACK) {
                err = new Error('Unexpected packet type when ack is expected.');
            }
            
            let ackBody: protocol.Ack = protocol.Ack.decode(ack.body);
        
            if (ackBody.errorCode && ackBody.errorCode > 0) {
                err = new Error(`Something goes wrong when doing authentication: ${ackBody.errorMessage}`);
            }

            callback(err);
        };

        this.psocket?.read()
                .then(_parse)
                .catch(callback);
    }

    public subscribe(filter: string): Promise<void> {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let packet: Uint8Array = encodeProtocol(protocol.Packet, {
            type: protocol.PacketType.SUBSCRIPTION,
            body: encodeProtocol(protocol.Sub, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id.toString(),
                filter: filter
            })
        });
        let _parse = (data: Buffer): void => {
            let ack: protocol.Ack = protocol.Ack.decode(
                protocol.Packet.decode(data).body
            );

            if (ack.errorCode && ack.errorCode > 0) {
                throw new Error(`Failed to subscribe with reason : ${ack.errorMessage}.`);
            }

            this.clientIdentity.filter = filter;
        };

        return new Promise((resolve, reject) => {
            // 发送订阅报文
            this.psocket?.write(packet as Buffer)
                .then(() =>
                    // 解析返回报文判断是否订阅成功 
                    this.psocket?.read()
                        .then((data: Buffer) => {
                            _parse(data); 
                            resolve()
                        })
                        .catch(reject)
                )
                .catch(reject)
        });
    }

    public unsubscribe(): Promise<void> {
        if (!this.connected) throw new Error('Connection not yet established');

        let packet: Uint8Array = encodeProtocol(protocol.Packet, {
            type: protocol.PacketType.UNSUBSCRIPTION,
            body: encodeProtocol(protocol.Unsub, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id.toString()
            })
        });
        let _parse = (data: Buffer): void => {
            let ack: protocol.Ack = protocol.Ack.decode(
                protocol.Packet.decode(data).body
            );

            if (ack.errorCode && ack.errorCode > 0) {
                new Error(`Failed to unsubscribe with reason : ${ack.errorMessage}.`)
            }

            this.clientIdentity.filter = null;
        };

        return new Promise((resolve, reject) => {
            this.psocket?.write(packet as Buffer)
                .then(() => 
                    this.psocket?.read()
                        .then(_parse)
                        .catch(reject)
                )
                .catch(reject)
        });
    }

    public get(batchSize: number, timeout?: number): Promise<Message> {
        return new Promise((resolve, reject) => {
            this.getWithoutAck(batchSize, timeout)
                .then((data: Message) => 
                    // 自动发送 ack
                    this.ack(data.id)
                        .then(() => resolve(data))
                        .catch(reject)
                )
                .catch(reject);
        })
    }

    public getWithoutAck(batchSize: number, timeout: number = -1): Promise<Message> {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let packet: Uint8Array = encodeProtocol(protocol.Packet, {
            type: protocol.PacketType.GET,
            body: encodeProtocol(protocol.Get, {
                autoAck: false,
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id.toString(),
                fetchSize: batchSize < 0 ? 1000 : batchSize,
                timeout,
                // milliseconds
                unit: 2
            })
        });

        return new Promise((resolve, reject) => {
            this.psocket?.write(packet as Buffer)
                .then(() => {
                    this.psocket?.read()
                        .then((data: Buffer) => resolve(CanalMessageDeserializer.deserializer(data)))
                        .catch(reject);
                })
                .catch(reject);
        });
    }

    public ack(batchId: number): Promise<void> {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let packet: Uint8Array = encodeProtocol(protocol.Packet, {
            type: protocol.PacketType.CLIENTACK,
            body: encodeProtocol(protocol.ClientAck, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id.toString(),
                batchId
            })
        });
        
        return new Promise((resolve, reject) => {
            this.psocket?.write(packet as Buffer)
                .then(resolve)
                .catch(reject)
        });
    }

    public rollback(batchId: number): Promise<void> {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let packet: Uint8Array = encodeProtocol(protocol.Packet, {
            type: protocol.PacketType.CLIENTROLLBACK,
            body: encodeProtocol(protocol.ClientAck, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id.toString(),
                batchId
            })
        });

        return new Promise((resolve, reject) => {
            this.psocket?.write(packet as Buffer)
                .then(resolve)
                .catch(reject)
        });
    }

    public disconnect(): void {
        if (!this.connected) {
            return;
        }

        this.psocket?.close();
        this.psocket = null;
        this.connected = false;
    }

    public isConnect(): boolean {
        return this.connected;
    }
}

interface ProtocolType<T> {
    encode: (message: T, writer?: $protobuf.Writer) => $protobuf.Writer
}

function encodeProtocol<T>(type: ProtocolType<T>, args: T): Uint8Array {
    return type.encode(args).finish();
}

export default SimpleCanalConnector;