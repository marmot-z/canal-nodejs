const protobuf = require("protobufjs");

class ProtoUtil {
    static protos = {};

    static async load() {
        return Promise.all(
            new Promise((resolve, reject) => protobuf.load('./proto/canal-protocol.proto', (e, root) => e ? reject(e) : resolve(initCanalProtobuf(root))),
            new Promise((resolve, reject) => protobuf.load('./proto/entry-protocol.proto', (e, root) => e ? reject(e) : resolve(initEntryProtobuf(root)))
        )));
    }

    static initCanalProtobuf(root) {
        root.lookup('Packet')
    }

    static initEntryProtobuf(root) {

    }
}