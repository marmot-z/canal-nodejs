class SimpleNodeAccessStrategy {
    constructor(nodes) {
        if (!nodes || nodes.length < 1) {
            throw new Error('at least 1 node required.');
        }
        
        this.nodes = [...nodes];
        this.index = 0;
    }

    nextNode() {
        try {
            return this.nodes[this.index];
        } finally {
            this.index = (this.index + 1) % this.nodes.length;
        }
    }

    currentNode() {
        return this.nodes[this.index];
    }
}

module.exports = SimpleNodeAccessStrategy;