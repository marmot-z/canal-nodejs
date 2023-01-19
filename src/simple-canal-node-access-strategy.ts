import CanalNodeAccessStrategy from "./canal-node-access-strategy";

export default class SimpleCanalNodeAccessStrategy implements CanalNodeAccessStrategy {
    private nodes: Array<string> = [];
    private index: number = 0;

    public constructor(nodes: Array<string>) {
        if (!nodes || !nodes.length) {
            throw new Error('At least 1 node required.');
        }

        this.nodes.push(...nodes);
    }

    cuurentNode(): string {
        return this.nodes[this.index];
    }

    nextNode(): string {
        return this.nodes[++this.index % this.nodes.length];
    }
}