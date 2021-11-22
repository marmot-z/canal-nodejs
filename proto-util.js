const protobuf = require("protobufjs");

class ProtoUtil {
    static enums = {};
    static loaded = false;

    static async load() {
        if (ProtoUtil.loaded) return;

        ProtoUtil.loaded = true;

        return Promise.all([
            new Promise((resolve, reject) => 
                protobuf.load('./proto/canal-protocol.proto', (e, root) => e ? reject(e) : resolve(ProtoUtil.initCanalProtobuf(root)))),
            new Promise((resolve, reject) => 
                protobuf.load('./proto/entry-protocol.proto', (e, root) => e ? reject(e) : resolve(ProtoUtil.initEntryProtobuf(root))))
        ]);
    }

    static initCanalProtobuf(root) {
        ProtoUtil.enums.Packet = root.lookupType('Packet');
        ProtoUtil.enums.Handshake = root.lookupType('Handshake');
        ProtoUtil.enums.ClientAuth = root.lookupType('ClientAuth'); 
        ProtoUtil.enums.Ack = root.lookupType('Ack'); 
        ProtoUtil.enums.Sub = root.lookupType('Sub'); 
        ProtoUtil.enums.Unsub = root.lookupType('Unsub'); 
        ProtoUtil.enums.Get = root.lookupType('Get'); 
        ProtoUtil.enums.Messages = root.lookupType('Messages'); 
        ProtoUtil.enums.ClientAck = root.lookupType('ClientAck'); 
        ProtoUtil.PacketType = root.lookupEnum('PacketType');
        ProtoUtil.Compression = root.lookupEnum('Compression');
    }

    static initEntryProtobuf(root) {
        ProtoUtil.enums.Entry = root.lookupType('Entry');
        ProtoUtil.enums.RowChange = root.lookupType('RowChange');
        ProtoUtil.EventType = root.lookupEnum('EventType');
        ProtoUtil.EntryType = root.lookupEnum('EntryType');
    }

    /**
     * protobuf字节数据转换成对象
     * 
     * @param {Object} messageType protobuf中定义的消息对象
     * @param {Buffer} data 字节对象
     * @returns 
     */
    static decode(messageType, data) {
        if (!messageType) {
            throw new Error('Unknown messageType:', messageType);
        }

        return messageType.decode(data);
    }

    /**
     * 对象转码成protobuf字节数据
     * 
     * @param {Object} messageType protobuf中定义的消息对象
     * @param {Object} data 对象
     * @returns 
     */
    static encode(messageType, data) {
        if (!messageType) {
            throw new Error('Unknown messageType:', messageType);
        }

        return messageType.encode(data).finish();
    }
}

module.exports = ProtoUtil;