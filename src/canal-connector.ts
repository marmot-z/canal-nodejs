import { com } from './gen/canal-proto'
import Message from './Message';
import protocol = com.alibaba.otter.canal.protocol;

export default interface CanalConnector {
    /**
     * 连接 canal 服务器
     */
    connect(): Promise<void>

    /**
     * 与 canal 服务器断开连接
     */
    disconnect(): void

    /**
     * 订阅主体
     * @param filter 主题名称
     */
    subscribe(filter: string): Promise<void>

    /**
     * 取消订阅
     */
    unsubscribe(): Promise<void>

    /**
     * 获取数据并返回 ack
     * 
     * @param batchSize 一次获取多少数据
     * @param timeout 超时时间（ms）
     */
    get(batchSize: number, timeout?: number): Promise<Message>

    /**
     * 获取数据不返回 ack
     * 
     * @param batchSize 一次获取多少数据
     * @param timeout 超时时间（ms），不填则为 -1（无超时）
     */
    getWithoutAck(batchSize: number, timeout?: number): Promise<Message>

    /**
     * 返回 ack
     * 
     * @param batchId 批次 id
     */
    ack(batchId: number): Promise<void>

    /**
     * 回滚到未进行 ack 的地方
     * 如果 batchId 不为 null 则回滚到指定的 batchId
     * 
     * @param batchId 批次 id
     */
    rollback(batchId?: number): Promise<void>

    /**
     * 判断当前是否正在连接
     */
    isConnect(): boolean
}