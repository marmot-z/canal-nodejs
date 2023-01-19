import { Socket } from "node:net";

class Handler {
    resolve: (item: Buffer) => void
    reject: (err: Error) => void

    constructor(args: {resolve: (item: Buffer) => void; reject: (err: Error) => void;}) {
        this.resolve = args.resolve;
        this.reject = args.reject;
    }
}

type SocketEventType = 'timeout' | 'connect' | 'error';

// see also: https://github.com/GoogleChrome/chrome-extensions-samples/blob/main/apps/samples/websocket-server/http.js
class PSocket {
    private socket: Socket;
    // 数据缓存队列
    private readQueue: Array<Buffer | Error> = [];
    // 用于输出报文长度
    private writeHeader: Buffer = Buffer.alloc(4);
    // 用于读取报文长度
    private readHeader: Buffer = Buffer.alloc(4);
    private handlers: Handler | null = null; 

    constructor(socket: Socket) {
        if (!socket) {
            throw new Error('Socket must not null');
        }

        this.socket = socket;

        // 监听 data、error 事件，用于接收数据和错误
        this.socket.on('data', this._onReceiveData.bind(this));
        this.socket.on('error', this._onReceiveError.bind(this));
    }

    /**
     * 读取数据
     * 
     * @returns 
     */
    read(): Promise<Buffer> {
        // 当前数据队列是否有数据，有则返回
        if (this.readQueue.length) {
            let item: Buffer | Error | undefined = this.readQueue.shift();

            if (typeof item === 'undefined') {
                return Promise.reject(new Error('No data received')); 
            }

            // 监听到错误，则返回错误
            if (item instanceof Error) {
                return Promise.reject(item);
            } 
            // 返回报文内容
            else {
                return Promise.resolve(this._extractData(item));
            }
        } 
        // 当前没有数据，则注册 promise 用于接收后续到来的数据/错误
        else {
            return new Promise((_resolve, _reject) => 
                this.handlers = new Handler({
                    resolve: (item: Buffer) => _resolve(this._extractData(item)),
                    reject: _reject
                })
            )
        }
    }

    /**
     * 发送数据
     * 
     * @param data 待写入的字节数据
     * @returns
     */
    write(data: Buffer): Promise<void> {
        return new Promise((resolve, reject) => {
            this.writeHeader.writeInt32BE(data.length);

            // 先发送报文长度
            this.socket.write(this.writeHeader, (err) => {
                if (err) return reject(err);

                // 再发送实际数据
                this.socket.write(data, (e) => {
                    if (e) return reject(e);

                    resolve();
                });
            });
        });
    }

    on(event: SocketEventType, callback: () => void): void {
        this.socket.on(event, callback);
    }

    close() {
        this.socket.destroy();
    }

    /**
     * 数据接收监听函数
     * @param chunk 字节数据
     */
    private _onReceiveData(chunk: Buffer): void {
        // 如果有调用方正在等待数据，则直接返回数据给调用方
        if (this.handlers) {
            this.handlers.resolve(chunk);
        }
        // 如果没有调用方获取数据，则将数据放入队列
        else {
            this.readQueue.push(chunk);
        }
    }

    /**
     * 错误监听函数
     * @param err 错误
     */
     private _onReceiveError(err: Error): void {
        if (this.handlers) {
            this.handlers.reject(err);
        } else {
            this.readQueue.push(err);
        }
    }

    /**
     * 提取报文数据
     * 
     * @param chunk 服务端返回的字节数据
     * @returns 报文数据
     */
     private _extractData(chunk: Buffer): Buffer {
        // 读取数据包大小到 readHeader
        chunk.copy(this.readHeader, 0, 0, chunk.length);
    
        // 数据包大小
        let bodySize: number = this.readHeader.readInt32BE(0);
        let body: Buffer = Buffer.alloc(bodySize);
    
        // 拷贝真正数据
        chunk.copy(body, 0, this.readHeader.length, chunk.length);
    
        return body;
    }
}

export default PSocket;