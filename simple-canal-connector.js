const CanalConnector = require('./canal-connector');
const net = require('net');
const { resolve } = require('path');
const { rejects } = require('assert');
const { Socket } = require('dgram');

class SimpleCanalConnector extends CanalConnector {
    address;
    destination;
    username;
    password;
    connected = false;
    filter;

    constructor(host, port, destination, username, password) {
        this.host = host;
        this.port = port;
        this.destination = destination;
        this.username = username;
        this.password = password;
    }

    connect() {
        if (this.connected) {
            return;
        }

        this.doConnect();

        if (this.filter) {
            this.subscribe(this.filter);
        }

        this.connected = true;
    }

    async doConnect() {
        let socket = await this.socketConnect();
        readNextPacket();
    }

    socketConnect() {
        this.socket = new net.Socket({
            readable: true,
            writable: true
        });

        this.socket.connect({
            host: this.host,
            port: this.port
        });

        socket.on('data', (buf) => {

        });

         new Promise((resolve, reject) => {
            socket.on('error', (e) => reject(e));
            socket.on('connect', () => resolve(socket));
        });
    }

    readNextPacket() {
        let header = Buffer.alloc(4);

        return new Promise((resolve, reject) => {
            this.socket.on('data', (buf) => {
                buf.copy(header, 0, 0, 4);
                let bodySize = header.readIntBE();
    
                let body = Buffer.alloc(bodySize);
                buf.copy(body, 0, 4, buf.length);

                resolve(body);
            });
        });
    }
}