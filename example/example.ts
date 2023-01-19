import CanalConnector from "../src/canal-connector";
import CanalConnectors from "../src/canal-connectors";
import Message from "../src/Message";
import { com } from '../src/gen/canal-proto'
import protocol = com.alibaba.otter.canal.protocol;

(async function () {
    const host: string = '127.0.0.1';
    const port: number = 11111;
    const destination: string = 'example';
    const username: string = '';
    const password: string = '';

    let connector: CanalConnector = CanalConnectors.newSingleConnector({
        host,
        port,
        destination,
        username,
        password,
        filter: '.*\..*'
    });

    try {
        await connector.connect();

        while (true) {
            let message: Message = await connector.getWithoutAck(1);
            let batchId: number = message.id;

            if (batchId != -1 && message.entries?.length) {
                try {
                    printEntry(message.entries);
                } finally {
                    await connector.ack(batchId);
                }
            }

            await sleep(3_000);
        }
    } catch(e: any) {
        console.error('Occur error', e as Error);
    } finally {
        connector.isConnect() && connector.disconnect();
    }
})();

function sleep(millis: number): Promise<void> {
    return new Promise((resolve, _) => setTimeout(resolve, millis));
}

function printEntry(entries: protocol.Entry[]): void {
    for (let entry of entries) {
        if (entry.entryType === protocol.EntryType.TRANSACTIONBEGIN || 
                entry.entryType === protocol.EntryType.TRANSACTIONEND)  {
            console.log('Transaction entry, continue.');
            continue;
        }
        
        let rowChage = protocol.RowChange.decode(entry.storeValue);

        if (rowChage.isDdl) {
            console.log('Ddl entry, sql:', rowChage.sql);
        }

        for (let rowData of rowChage.rowDatas) {
            switch (rowChage.eventType) {
                case protocol.EventType.DELETE:
                    printColumns(rowChage.eventType, rowData.beforeColumns);
                    break;
                case protocol.EventType.INSERT:
                    printColumns(rowChage.eventType, rowData.afterColumns);
                    break;
                default:
                    printColumns(rowChage.eventType, rowData.beforeColumns);
                    printColumns(rowChage.eventType, rowData.afterColumns);
                    break;
            }
        }
    }
}

function printColumns(eventType: protocol.EventType | null | undefined, 
                    columns: protocol.IColumn[] | null | undefined): void {
    if (columns) {
        for (const column of columns) {
            console.log(`[${eventType}] ${column.name} : ${column.value} <${column.updated ? 'updated' : ''}>`)
        }
    }
}