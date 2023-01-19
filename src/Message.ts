import { com } from './gen/canal-proto';
import protocol = com.alibaba.otter.canal.protocol;

export default class Message {
    id: number;
    entries: protocol.Entry[] = [];
    raw: boolean = false;
    rawEntries: Uint8Array[] = [];

    constructor(id: number, raw: boolean = false, entries?: protocol.Entry[] | Uint8Array[]) {
        this.id = id;
        this.raw = raw;

        if (entries) {
            if (!raw) {
                this.entries = entries as protocol.Entry[];
            } else {
                this.rawEntries = entries as Uint8Array[];
            }
        }
    }
}