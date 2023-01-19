import CanalConnector from "./canal-connector";
import SimpleCanalConnector from "./simple-canal-connector";

export default class CanalConnectors {

    /**
     * 创建简单连接
     * @param args 
     * @returns 
     */
    static newSingleConnector(args: {
        host: string,
        port: number, 
        destination: string,
        username: string, 
        password: string,
        filter?: string
    }): CanalConnector {
        return new SimpleCanalConnector(args);
    }

    /**
     * 创建集群连接
     * @param args 
     */
    static newSimpleClusterConnector(args: {
        addresses: Array<string>,
        destination: string,
        username: string, 
        password: string
    }): CanalConnector {
        throw new Error('Unsupport method');
    }

    /**
     * 创建基于 zookeeper 的集群连接
     * @param args 
     */
    static newZkClusterConnector(args: {
        zkServers: Array<string>,
        destination: string,
        username: string, 
        password: string
    }): CanalConnector {
        throw new Error('Unsupport method');
    }
}