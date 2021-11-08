class CanalConnectors {

    /**
     * 创建Canal Connector
     * 
     * 当address为数组时，当其中一个Canal服务节点宕机，可以支持failover到其他正常Canal服务节点上
     * 
     * @param {Array|String} address Canal服务地址或列表
     * @param {String} destination Canal destination
     * @param {String} username 用户名
     * @param {String} password 密码
     * @returns 
     */
    newConnector(address, destination, username, password) {
        return null;
    }

    newClusterConnector(zkServers, destination, username, password) {
        return null;
    }
}