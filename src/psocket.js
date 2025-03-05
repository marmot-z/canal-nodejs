// see also: https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/apps/samples/websocket-server/http.js

class PSocket {
    constructor(socket) {
        if (!socket) {
            throw new Error('Socket must not null');
        }

        this.socket = socket;
        this.readQueue = [];
        this.writeHeader = Buffer.alloc(4);
        this.readHeader = Buffer.alloc(4);

        this.socket.on('data', onReceiveData.bind(this));
        this.socket.on('error', onReceiveError.bind(this));
    }    

    read() {
        if (this.readQueue.length) {
            let item = this.readQueue.shift();

            if (item instanceof Error) 
                return Promise.reject(item);
            else 
                return Promise.resolve(extractData.bind(this)(item));
        } else {
            return new Promise((_resolve, _reject) => 
                this.handlers = {resolve: (item) => {
                    _resolve(extractData.bind(this)(item))
                }, reject: _reject});
        }
    }

    write(data) {
        return new Promise((resolve, reject) => {
            this.writeHeader.writeInt32BE(data.length);

            this.socket.write(this.writeHeader, (err) => {
                if (err) return reject(err);

                this.socket.write(data, (e) => {
                    if (e) return reject(e);

                    resolve();
                });
            });
        });
    }

    close() {
        this.socket.destroy();
    }

    on(event, fn) {
        this.socket.on(event, fn);
    }
}

function onReceiveData(chunk) {
    if (this.handlers)
        this.handlers.resolve(chunk);
    else
        this.readQueue.push(chunk);
}

function onReceiveError(err) {
    if (this.handlers) 
        this.handlers.reject(err);
    else
        this.readQueue.push(err);
}

function extractData(chunk) {
    // copy body size to readHeader
    chunk.copy(this.readHeader, 0, 0, chunk.length);

    let bodySize = this.readHeader.readInt32BE(0);
    let body = Buffer.alloc(bodySize);

    // copy total data
    chunk.copy(body, 0, this.readHeader.length, chunk.length);

    return body;
}

module.exports = PSocket;