let SimpleCanalConnector = require('./simple-canal-connector');
let ProtoUtil = require('./proto-util');

class CanalConnectors {

    /**
     * 创建Canal Connector
     * 
     * 当address为数组时，当其中一个Canal服务节点宕机，可以支持failover到其他正常Canal服务节点上
     * 
     * @param {String} host Canal服务ip
     * @param {Number} port Canal服务端口
     * @param {String} destination Canal destination
     * @param {String} username 用户名
     * @param {String} password 密码
     * @returns 
     */
    static newConnector(host, port, destination, username, password) {
        return new SimpleCanalConnector(host, port, destination, username, password);
    }

    static newClusterConnector(zkServers, destination, username, password) {
        return null;
    }
}

ProtoUtil.load();

module.exports = CanalConnectors;