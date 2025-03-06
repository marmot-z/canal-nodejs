const net = require('net');
const async = require('async');
const ProtoUtil = require('./proto-util');
const PSocket = require('./psocket');
const CanalMessageDeserializer = require('./canal-message-deserializer');
const SimpleNodeAccessStrategy = require('./simple-node-access-strategy');

class SimpleCanalConnector {
    constructor(address, username, password, destination, idleTimeout = 60 * 60 * 1000) {
        if (address instanceof SimpleNodeAccessStrategy) {
            this.canalNodeAccessStrategy = address;
        } else {
            this.canalNodeAccessStrategy = new SimpleNodeAccessStrategy([address]);
        }
        
        this.username = username;
        this.password = password;
        this.clientIdentity = {destination, id: 10001, filter: null};
        this.connected = false;
        this.idleTimeout = idleTimeout;
    }

    connect() {
        if (this.connected) return Promise.resolve();

        return this._connect()
            .then(() => {
                if (this.clientIdentity.filter) {
                    this.subscribe(this.clientIdentity.filter);
                }
            });
    }

    _connect() {
        this.address = this.canalNodeAccessStrategy.nextNode();
        this.psocket = new PSocket(net.createConnection({
            host: this.address.host,
            port: this.address.port,
            writable: true,
            readable: true,
            // 以大端的方式读取
            readIntBE: true,
            timeout: this.idleTimeout
        }));

        return new Promise((resolve, reject) => {
            async.waterfall([
                (callback) => {
                    this.psocket.on('connect', callback);
                    this.psocket.on('error', callback);
                    this.psocket.on('timeout', callback);
                }, 
                (callback) => {
                    this.psocket.read()
                        .then(data => handshake.bind(this)(data, callback))
                        .catch(callback)
                },
                (seed, callback) => login.bind(this)(this.username, this.password, callback),
                (callback) => {
                    this.psocket.read()
                        .then(data => veriifyLoginSuccessful(data, callback))
                }
            ], (err) => {
                if (err) return reject(err);

                this.connected = true;

                resolve();
            });
        });        
    }

    subscribe(filter) {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let requestPacket = ProtoUtil.encode(ProtoUtil.enums.Packet, {
            type: ProtoUtil.PacketType.values.SUBSCRIPTION,
            body: ProtoUtil.encode(ProtoUtil.enums.Sub, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id + '',
                filter: filter || ''
            })
        });

        return new Promise(async (resolve, reject) => {
            try {
                await this.psocket.write(requestPacket);
                const data = await this.psocket.read();
                
                let responsePacket, ack;
                try {
                    responsePacket = ProtoUtil.decode(ProtoUtil.enums.Packet, data);
                    ack = ProtoUtil.decode(ProtoUtil.enums.Ack, responsePacket.body);
                } catch (e) {
                    throw new Error(`Failed to decode response: ${e.message}`);
                }
        
                if (ack.errorCode > 0) {
                    throw new Error(`Failed to subscribe with reason: ${ack.errorMessage}`);
                }

                this.clientIdentity.filter = filter;
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }

    unsubscribe() {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let requestPacket = ProtoUtil.encode(ProtoUtil.enums.Packet, {
            type: ProtoUtil.PacketType.values.UNSUBSCRIPTION,
            body: ProtoUtil.encode(ProtoUtil.enums.Unsub, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id + ''
            })
        });

        return new Promise(async (resolve, reject) => {
            try {
                await this.psocket.write(requestPacket);
                const data = await this.psocket.read();
                
                let responsePacket, ack;
                try {
                    responsePacket = ProtoUtil.decode(ProtoUtil.enums.Packet, data);
                    ack = ProtoUtil.decode(ProtoUtil.enums.Ack, packet.body);
                } catch (e) {
                    throw new Error(`Failed to decode unsubscribe response: ${e.message}`);
                }
        
                if (ack.errorCode > 0) {
                    throw new Error(`Failed to unsubscribe with reason: ${ack.errorMessage}`);
                }

                this.clientIdentity.filter = null;
                resolve();
            } catch (err) {
                reject(err);
            }
        });
    }

    get(batchSize, timeout) {
        return new Promise(async (resolve, reject) => {
            try {
                const data = await this.getWithoutAck(batchSize, timeout);
                await this.ack(data.id);
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }

    getWithoutAck(batchSize, timeout) {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
            type: ProtoUtil.PacketType.values.GET,
            body: ProtoUtil.encode(ProtoUtil.enums.Get, {
                autoAck: false,
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id + '',
                fetchSize: !batchSize || batchSize < 0 ? 1000 : batchSize,
                timeout: !timeout || timeout < 0 ? -1 : timeout,
                // milliseconds
                unit: 2
            })
        });

        return new Promise(async (resolve, reject) => {
            try {
                await this.psocket.write(packet);
                const data = await this.psocket.read();
                
                try {
                    const message = CanalMessageDeserializer.deserializer(data);
                    resolve(message);
                } catch (e) {
                    throw new Error(`Failed to deserialize message: ${e.message}`);
                }
            } catch (err) {
                reject(err);
            }
        });
    }

    ack(batchId) {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
            type: ProtoUtil.PacketType.values.CLIENTACK,
            body: ProtoUtil.encode(ProtoUtil.enums.ClientAck, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id + '',
                batchId: batchId
            })
        });
        
        return this.psocket.write(packet); 
    }

    rollback(batchId) {
        if (!this.connected) {
            throw new Error('Connection not yet established');
        }

        let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
            type: ProtoUtil.PacketType.values.CLIENTROLLBACK,
            body: ProtoUtil.encode(ProtoUtil.enums.ClientAck, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id + '',
                batchId: batchId || 0
            })
        });

        return this.psocket.write(packet); 
    }

    disconnect() {
        if (!this.connected) {
            return;
        }

        this.psocket.close();
        this.psocket = null;
        this.connected = false;
    }

    isConnect() {
        return this.connected;
    }

    getAddress() {
        return this.address;
    }
}

function handshake(data, callback) {
    let packet = ProtoUtil.decode(ProtoUtil.enums.Packet, data);
    let err;

    if (packet.version != 1) {
        err = new Error('Unsupported version at this client.');
    }

    if (packet.type != ProtoUtil.PacketType.values.HANDSHAKE) {
        err = new Error('Expect handshake but found other type.');
    }

    if (err) {
        callback(err);
    }

    let handshake = ProtoUtil.decode(ProtoUtil.enums.Handshake, packet.body);
    this.supportedCompressions = handshake.supportedCompressions;
    
    callback(null, handshake.seeds);
}

function login(username, password, callback) {
    let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
        type: ProtoUtil.PacketType.values.CLIENTAUTHENTICATION,
        body: ProtoUtil.encode(ProtoUtil.enums.ClientAuth, {
            username: username ? username : '',
            password: Buffer.from(password ? password : '', 'utf-8'),
            netReadTimeout: 60 * 60 * 1000,
            netReadTimeout: 60 * 60 * 1000
        })
    });

    this.psocket.write(packet)
        .then(callback)
        .catch(callback);
}

function veriifyLoginSuccessful(data, callback) {
    let ack = ProtoUtil.decode(ProtoUtil.enums.Packet, data);
    let err;

    if (ack.type != ProtoUtil.PacketType.values.ACK) {
        err = new Error('Unexpected packet type when ack is expected.');
    }
    
    let ackBody = ProtoUtil.decode(ProtoUtil.enums.Ack, ack.body);

    if (ackBody.errorCode > 0) {
        err = new Error('Something goes wrong when doing authentication:', ackBody.errorMessage);
    }
    
    callback(err);
}

module.exports = SimpleCanalConnector;