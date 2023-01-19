export default interface CanalNodeAccessStrategy {
    /**
     * 当前 canal client 节点
     */
    cuurentNode(): string

    /**
     * 下一个 canal client 节点
     */
    nextNode(): string
}