const net = require('net');
const async = require('async');
const CanalConnector = require('./canal-connector');
const ProtoUtil = require('./proto-util');
const CanalMessageDeserializer = require('./canal-message-deserializer');

class SimpleCanalConnector extends CanalConnector {
    // 是否连接
    connected = false;
    // 是否运行
    running = false;
    // 与 canal server 的连接
    socket;

    // 超时时间
    idleTimeout = 60 * 60 * 1000;
    // 数据块缓存区
    chunks;

    // 数据读写时的header
    readHeader = Buffer.alloc(4);
    writeHeader = Buffer.alloc(4);

    constructor(host, port, destination, username, password) {
        super();

        this.host = host;
        this.port = port;
        this.username = username;
        this.password = password;
        this.clientIdentity = {destination, id: 10001, filter: null};
        this.running = true;
    }

    connect(callback) {
        if (this.connected) return;

        this.doConnect((err) => {
            if (err && isFunction(callback)) callback(err);

            if (this.clientIdentity.filter) {
                this.subscribe(this.clientIdentity.filter, callback);
            } else if (isFunction(callback)) {
                callback();
            }
        });
    }

    doConnect(cb) {
        this.socket = net.createConnection({
            host: this.host,
            port: this.port,
            writable: true,
            readable: true,
            // 以大端的方式读取
            readIntBE: true,
            timeout: this.idleTimeout
        });

        this.socket.on('error', this.handleConnectError.bind(this));
        this.socket.on('data', this.collectData.bind(this));

        async.waterfall([
            // 连接就绪
            (callback) => {
                this.socket.on('connect', (err) => callback(err));
            },
            // handshake
            (callback) => {
                this.readNextPacket()
                    .then(data => {
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
                    });
            },
            // 登录
            (seed, callback) => {
                // TODO 使用 com.alibaba.otter.canal.protocol.SecurityUtil#byte2HexStr 生成密码
                let newPasswd = this.password ? this.password : this.password;
                
                let clientAuth = ProtoUtil.encode(ProtoUtil.enums.ClientAuth, {
                    username: this.username ? this.username : '',
                    password: Buffer.from(newPasswd ? newPasswd : '', 'utf-8'),
                    netReadTimeout: this.idleTimeout,
                    netReadTimeout: this.idleTimeout
                });
                let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
                    type: ProtoUtil.PacketType.values.CLIENTAUTHENTICATION,
                    body: clientAuth
                });

                this.write(packet);

                callback();
            },
            // 登录是否成功
            (callback) => {
                this.readNextPacket()
                    .then(data => {
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
                    })
            }
        ], (err) => {
            if (err) return cb(err);
            
            this.connected = true;

            cb();
        });
    }

    subscribe(filter, callback) {
        if (!this.running) return;

        waitFor(() => this.connected, () => {
            let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
                type: ProtoUtil.PacketType.values.SUBSCRIPTION,
                body: ProtoUtil.encode(ProtoUtil.enums.Sub, {
                    destination: this.clientIdentity.destination,
                    clientId: this.clientIdentity.id + '',
                    filter: filter || ''
                })
            });
    
            this.write(packet);
    
            return this.readNextPacket()
                .then(data => {
                    let packet = ProtoUtil.decode(ProtoUtil.enums.Packet, data);
                    let ack = ProtoUtil.decode(ProtoUtil.enums.Ack, packet.body);
                    let err;
    
                    if (ack.errorCode > 0) {
                        err = new Error(`Failed to subscribe with reason : ${ack.errorMessage}.`);
                    }
    
                    if (!err) this.clientIdentity.filter = filter;

                    isFunction(callback) && callback(err);
                });
        });
    }

    unsubscribe(callback) {
        if (!this.running) return;

        waitFor(() => this.connected, () => {
            let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
                type: ProtoUtil.PacketType.values.UNSUBSCRIPTION,
                body: ProtoUtil.encode(ProtoUtil.enums.Unsub, {
                    destination: this.clientIdentity.destination,
                    clientId: this.clientIdentity.id + ''
                })
            });
    
            this.write(packet);
    
            return this.readNextPacket()
                .then(data => {
                    let packet = ProtoUtil.decode(ProtoUtil.enums.Packet, data);
                    let ack = ProtoUtil.decode(ProtoUtil.enums.Ack, packet.body);
                    let err;
    
                    if (ack.errorCode > 0) {
                        err = new Error(`Failed to unsubscribe with reason : ${ack.errorMessage}.`);
                    }
    
                    isFunction(callback) && callback(err);
                });
        });
    }

    get(batchSize, timeout, callback) {
        this.getWithoutAck(batchSize, timeout, (err, message) => {
            if (err & isFunction(callback)) return callback(err);

            this.ack(message.id);

            callback(message);
        });
    }

    getWithoutAck(batchSize, timeout, callback) {
        if (!this.running) return callback(null);

        waitFor(() => this.connected, () => {
            let size = !batchSize || batchSize <= 0 ? 1000 : batchSize;
            timeout = !timeout || timeout < 0 ? -1 : timeout;

            let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
                type: ProtoUtil.PacketType.values.GET,
                body: ProtoUtil.encode(ProtoUtil.enums.Get, {
                    autoAck: false,
                    destination: this.clientIdentity.destination,
                    clientId: this.clientIdentity.id + '',
                    fetchSize: size,
                    timeout: timeout,
                    // milliseconds
                    unit: 2
                })
            });
            
            this.write(packet);

            this.readNextPacket()
                .then(data => {
                    let result = CanalMessageDeserializer.deserializer(data);
                    isFunction(callback) && callback(null, result);
                });
        });
    }

    ack(batchId) {
        if (!this.running) return;

        waitFor(() => this.connected, () => {
            let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
                type: ProtoUtil.PacketType.values.CLIENTACK,
                body: ProtoUtil.encode(ProtoUtil.enums.ClientAck, {
                    destination: this.clientIdentity.destination,
                    clientId: this.clientIdentity.id + '',
                    batchId: batchId
                })
            });
            
            this.write(packet); 
        })
    }

    rollback(batchId) {
        if (!this.running) return;
        
        waitFor(() => this.connected, () => {
            let packet = ProtoUtil.encode(ProtoUtil.enums.Packet, {
                type: ProtoUtil.PacketType.values.CLIENTROLLBACK,
                body: ProtoUtil.encode(ProtoUtil.enums.ClientAck, {
                    destination: this.clientIdentity.destination,
                    clientId: this.clientIdentity.id + '',
                    batchId: batchId || 0
                })
            });
            
            this.write(packet); 
        });
    }

    disconnect() {
        if (this.running && this.connected) {
            this.socket.destroy();
            this.socket = null;
            this.connected = false;
            this.running = false;
        }
    }

    collectData(chunk) {
        if (!this.chunks) {
            this.chunks = Buffer.from(chunk);
            return;
        }

        let newChunks = Buffer.alloc(this.chunks.length + chunk.length);
        this.chunks.copy(newChunks, 0);
        chunk.copy(newChunks, this.chunks.length);

        this.chunks = newChunks;
    }

    readNextPacket() {
        return new Promise(resolve => {
            this.read(this.readHeader, () => {
                let bodySize = this.readHeader.readInt32BE(0);
                let body = Buffer.alloc(bodySize);
    
                this.read(body, resolve);
            });
        });
    }

    read(buf, callback) {
        waitFor(() => {
            let chunksLength = this.chunks ? this.chunks.length : 0;
            return buf.length <= chunksLength;
        }, () => {
            this.chunks.copy(buf, 0);
            let reminders = this.chunks.length - buf.length;

            // 保留未读取的数据
            // 全部读取完毕，则直接清空chunks
            if (!reminders) {
                this.chunks = null;
            } else {
                let newChunks = Buffer.alloc(reminders);
                this.chunks.copy(newChunks, 0, buf.length, this.chunks.length);

                this.chunks = newChunks;
            }

            callback(buf);
        });
    }

    write(buf) {
        this.writeHeader.writeInt32BE(buf.length);
        this.socket.write(this.writeHeader);
        this.socket.write(buf);
    }

    handleConnectError(err) {
        this.emit('error', err);
    }

    isRunning() {
        return this.running;
    }
}

function waitFor(condition, callback) {
    if (isFunction(condition) && condition()) {
        isFunction(callback) && callback();
    } else {
        setTimeout(waitFor.bind(null, condition, callback), 10);
    }
}

function isFunction(fn) {
    return fn && typeof fn === 'function';
}

module.exports = SimpleCanalConnector;