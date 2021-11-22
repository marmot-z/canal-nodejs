const ProtoUtil = require('./proto-util');

class CanalMessageDeserializer {
    static deserializer(buf, lazyParseEntry) {
        if (!data) return null;

        let packet = ProtoUtil.decode(ProtoUtil.enums.Packet, data);
        switch (packet.type) {
            case ProtoUtil.enums.MESSAGES:
                if (packet.compression != ProtoUtil.Compression.values.NONE &&
                        packet.compression != ProtoUtil.Compression.values.COMPRESSIONCOMPATIBLEPROTO2) {
                    throw new Error('Compression is not supported in this connector');
                }

                let messages = ProtoUtil.decode(ProtoUtil.enums.Messages, p.body);
                let result = {
                    id: messages.batchId,
                    entries: [],
                    rawEntries: [],
                    raw: false
                };

                if (lazyParseEntry && typeof lazyParseEntry === 'boolean') {
                    result.rawEntries = messages.messagesList;
                    result.setRaw = true;
                } else {
                    for (let message of messages.messagesList) {
                        result.entries.push(ProtoUtil.decode(ProtoUtil.enums.Entry, message));
                    }
                    result.setRaw = false;
                }

                return result;

            case ProtoUtil.enums.ACK:
                let ack = ProtoUtil.decode(ProtoUtil.enums.Ack, p.body);
                throw new Error(`Something goes wrong with reason: ${ack.errorMessage}.`);

            default:
                throw new Error(`Unexpected packet type: ${p.type}.`);
        }
    }
}

module.exports = CanalMessageDeserializer;