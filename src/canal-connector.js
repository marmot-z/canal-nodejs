class CanalConnector {
    connect() {
        throw new Error('Unsupported operation.');
    }

    disconnect() {
        throw new Error('Unsupported operation.');
    }

    subscribe(filter) {
        throw new Error('Unsupported operation.');
    }

    unsubscribe() {
        throw new Error('Unsupported operation.');
    }

    get(batchSize, timeout, timeunit) {
        throw new Error('Unsupported operation.');
    }

    getWithoutAck(batchSize, timeout, timeunit) {
        throw new Error('Unsupported operation.');
    }

    ack(batchId) {
        throw new Error('Unsupported operation.');
    }

    rollback(batchId) {
        throw new Error('Unsupported operation.');
    }

    isConnect() {
        return false;
    }
}

module.exports = CanalConnector;