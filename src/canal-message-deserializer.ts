import Message from "./Message";
import { com } from './gen/canal-proto';
import protocol = com.alibaba.otter.canal.protocol;

export default class CanalMessageDeserializer {
    public static deserializer(data: Buffer, lazyParseEntry: boolean = false): Message {        
        let packet: protocol.Packet = protocol.Packet.decode(data);
        
        switch (packet.type) {
            case protocol.PacketType.MESSAGES:
                // if (packet.compression != protocol.Compression.NONE &&
                //         packet.compression != protocol.Compression.COMPRESSIONCOMPATIBLEPROTO2) {
                //     throw new Error('Compression is not supported in this connector');
                // }

                let messages: protocol.Messages = protocol.Messages.decode(packet.body);
                let result: Message = new Message(messages.batchId as number);

                if (lazyParseEntry) {
                    result.rawEntries = messages.messages;
                    result.raw = true;
                } else {
                    for (let message of messages.messages) {
                        result.entries.push(protocol.Entry.decode(message));
                    }
                    result.raw = false;
                }

                return result;

            case protocol.PacketType.ACK:
                let ack: protocol.Ack = protocol.Ack.decode(packet.body);
                throw new Error(`Something goes wrong with reason: ${ack.errorMessage}.`);

            default:
                throw new Error(`Unexpected packet type: ${packet.type}.`);
        }
    }
}