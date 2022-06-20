const net = require('net');
const async = require('async');
const CanalConnector = require('./canal-connector');
const ProtoUtil = require('./proto-util');
const PSocket = require('./psocket');
const CanalMessageDeserializer = require('./canal-message-deserializer');

class SimpleCanalConnector extends CanalConnector {
    connected = false;
    psocket;

    constructor(host, port, destination, username, password) {
        super();

        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.clientIdentity = {destination, id: 10001, filter: null};
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
        this.psocket = new PSocket(net.createConnection({
            host: this.host,
            port: this.port,
            writable: true,
            readable: true,
            // 以大端的方式读取
            readIntBE: true,
            timeout: 60 * 60 * 1000
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
        if (!this.connected) throw new Error('Connection not yet established');

        let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
            type: ProtoUtil.PacketType.values.SUBSCRIPTION,
            body: ProtoUtil.encode(ProtoUtil.enums.Sub, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id + '',
                filter: filter || ''
            })
        });

        return new Promise((resolve, reject) => {
            this.psocket.write(packet)
                .then(() => {
                    this.psocket.read()
                        .then(data => {
                            let ack = ProtoUtil.decode(ProtoUtil.enums.Ack, 
                                ProtoUtil.decode(ProtoUtil.enums.Packet, data).body);
            
                            if (ack.errorCode > 0) {
                                reject(new Error(`Failed to subscribe with reason : ${ack.errorMessage}.`));
                            }

                            this.clientIdentity.filter = filter;

                            resolve();
                        })
                        .catch(reject);
                })
                .catch(reject);
        });
    }

    unsubscribe() {
        if (!this.connected) throw new Error('Connection not yet established');

        let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
            type: ProtoUtil.PacketType.values.UNSUBSCRIPTION,
            body: ProtoUtil.encode(ProtoUtil.enums.Unsub, {
                destination: this.clientIdentity.destination,
                clientId: this.clientIdentity.id + ''
            })
        });

        return new Promise((resolve, reject) => {
            this.psocket.write(packet)
                .then(() => {
                    this.psocket.read()
                        .then(data => {
                            let ack = ProtoUtil.decode(ProtoUtil.enums.Ack, 
                                ProtoUtil.decode(ProtoUtil.enums.Packet, data).body);
            
                            if (ack.errorCode > 0) {
                                reject(new Error(`Failed to unsubscribe with reason : ${ack.errorMessage}.`));
                            }

                            this.clientIdentity.filter = null;

                            resolve();
                        })
                        .catch(reject);
                })
                .catch(reject);
        });
    }

    get(batchSize, timeout) {
        return new Promise((resolve, reject) => {
            this.getWithoutAck(batchSize, timeout)
                .then(data => 
                    this.ack(data.id)
                        .then(() => resolve(data))
                        .catch(reject)
                )
                .catch(reject);
        })
    }

    getWithoutAck(batchSize, timeout) {
        if (!this.connected) throw new Error('Connection not yet established');

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

        return new Promise((resolve, reject) => {
            this.psocket.write(packet)
                .then(() => {
                    this.psocket.read()
                        .then(data => {
                            try {
                                resolve(CanalMessageDeserializer.deserializer(data));
                            } catch(e) {
                                reject(e);
                            }
                        })
                        .catch(reject)
                })
                .catch(reject);
        });
    }

    ack(batchId) {
        if (!this.connected) throw new Error('Connection not yet established');

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
        if (!this.connected) throw new Error('Connection not yet established');

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
        if (!this.connected) throw new Error('Connection not yet established');

        this.psocket.close();
        this.psocket = null;
        this.connected = false;
    }

    isConnect() {
        return this.connected;
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

    if (err) callback(err);

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