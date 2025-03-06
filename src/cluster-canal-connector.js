const SimpleCanalConnector = require('./simple-canal-connector');

class ClusterCanalConnector {
    retryTimes = 3;
    retryInterval = 5000;    

    /**
     * 创建集群模式的 Canal 连接器
     * 
     * @param {String} username 用户名
     * @param {String} password 密码
     * @param {String} destination Canal destination
     * @param {Object} accessStrategy 访问策略配置
     */
    constructor(accessStrategy, username, password, destination, idleTimeout = 60 * 60 * 1000) {
        this.accessStrategy = accessStrategy;
        this.username = username;
        this.password = password;
        this.destination = destination;
        this.idleTimeout = idleTimeout;    
        this.currentConnector = null;
    }

    async connect() {
        while (this.currentConnector === null) {
            let times = 0;
            while (true) {
                try {
                    this.currentConnector = new SimpleCanalConnector(
                        this.accessStrategy,                        
                        this.username,
                        this.password,
                        this.destination,
                        this.idleTimeout
                    );                

                    await this.currentConnector.connect();
                    break;
                } catch (e) {
                    console.warn(`failed to connect to: ${this.accessStrategy.currentAddress()} after retry ${times} times`);
                    
                    if (this.currentConnector) {
                        this.currentConnector.disconnect();
                        this.currentConnector = null;
                    }

                    times++;

                    if (times >= this.retryTimes) {
                        throw new Error(`Failed to connect after ${this.retryTimes} retries: ${e.message}`);
                    }

                    await sleep(this.retryInterval);
                }
            }
        }
    } 

    async subscribe(filter) {
        await this._retryOperation(
            async () => await this.currentConnector.subscribe(filter),
            'failed to subscribe'
        );
    }

    /**
     * 通用的重试执行函数
     * @param {Function} operation 需要重试的操作函数
     * @param {string} errorMessage 重试失败时的错误信息
     * @returns {Promise<any>} 操作结果
     */
    async _retryOperation(operation, errorMessage) {
        let times = 0;
        while (times < this.retryTimes) {
            try {
                return await operation();
            } catch (error) {
                console.warn(
                    `something goes wrong when executing operation: ${
                        this.currentConnector ? this.currentConnector.getAddress() : 'null'
                    }`,
                    error
                );
                
                times++;
                await this.restart();
                console.info('restart the connector for next round retry.');
            }
        }
        throw new Error(`${errorMessage} after ${times} times retry.`);
    }

    async unsubscribe() {
        await this._retryOperation(
            async () => await this.currentConnector.unsubscribe(),
            'failed to unsubscribe'
        );
    }

    async get(batchSize, timeout) {
        return await this._retryOperation(
            async () => await this.currentConnector.get(batchSize, timeout),
            'failed to fetch the data'
        );
    }

    async getWithoutAck(batchSize, timeout) {
        return await this._retryOperation(
            async () => await this.currentConnector.getWithoutAck(batchSize, timeout),
            'failed to fetch the data'
        );
    }

    async rollback(batchId) {
        await this._retryOperation(
            async () => await this.currentConnector.rollback(batchId),
            'failed to rollback'
        );
    }

    async ack(batchId) {
        await this._retryOperation(
            async () => await this.currentConnector.ack(batchId),
            'failed to ack'
        );
    }

    async restart() {
        if (this.currentConnector) {
            this.currentConnector.disconnect();
            this.currentConnector = null;
        }

        await sleep(this.retryInterval);
        await this.connect();
    }
    
    isConnect() {
        return this.currentConnector !== null && this.currentConnector.isConnect();
    }
}

/**
 * 休眠指定的毫秒数
 * @param {number} ms 休眠时间（毫秒）
 * @returns {Promise} 返回一个 Promise，在指定时间后 resolve
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = ClusterCanalConnector;