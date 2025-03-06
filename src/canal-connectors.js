let SimpleCanalConnector = require('./simple-canal-connector');
let ClusterCanalConnector = require('./cluster-canal-connector');
let ProtoUtil = require('./proto-util');

ProtoUtil.load();

class CanalConnectors {

    /**
     * 创建Canal Connector
     * 
     * 当address为数组时，当其中一个Canal服务节点宕机，可以支持failover到其他正常Canal服务节点上
     *
     * @param {String} destination Canal destination
     * @param {String} username 用户名
     * @param {String} password 密码
     * @returns 
     */
    static newConnector(address, username, password, destination, idleTimeout) {
        return new SimpleCanalConnector(address, username, password, destination, idleTimeout);
    }

    static newClusterConnector(accessStrategy, username, password, destination, idleTimeout) {
        return new ClusterCanalConnector(accessStrategy, username, password, destination, idleTimeout);
    }
}

module.exports = CanalConnectors;