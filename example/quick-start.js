const CanalConnectors = require('../src/canal-connectors');
const ProtoUtil = require('../src/proto-util');

(async function() {
    await ProtoUtil.load();

    let connector = CanalConnectors.newConnector('127.0.0.1', 11111, 'example', '', '');

    try {
        await connector.connect();
        await connector.subscribe('.*\..*');

        for (let i = 0; i < 1000; i++) {
            let message = await connector.getWithoutAck(5 * 1024, -1);
            let batchId = parseInt(message.id);

            if (batchId !== -1 && message.entries.length) {
                try {
                    printEntry(message.entries);
                } finally {
                    await connector.ack(batchId);
                }
            }

            await sleep(3000);
        }
    } catch(e) {
        console.error('Connect cancal server occur error', e);
    } finally {
        if (connector.isConnect()) connector.disconnect();
    }
}) ();

function sleep(millis) {
    return new Promise((resolve, reject) => setTimeout(resolve, millis));
}

function printEntry(entries) {
    for (let entry of entries) {
        if (entry.entryType === ProtoUtil.EntryType.values.TRANSACTIONBEGIN || 
                entry.entryType === ProtoUtil.EntryType.values.TRANSACTIONEND)  {
            continue;
        }
        
        let rowChage = ProtoUtil.decode(ProtoUtil.enums.RowChange, entry.storeValue);

        if (rowChage.isDdl) {
            console.log('IsDdl: true, sql:', rowChage.sql);
        }

        for (let rowData of rowChage.rowDatas) {
            if (rowChage.eventType == ProtoUtil.EventType.values.DELETE) {
                console.log('Delete: ');
                printColumns(rowData.beforeColumns);
                console.log('----------------------');
            } else if (rowChage.eventType == ProtoUtil.EventType.values.INSERT) {
                console.log('Insert: ');
                printColumns(rowData.afterColumns);
                console.log('----------------------');
            } else {
                console.log('Update: ');
                printColumns(rowData.beforeColumns);
                printColumns(rowData.afterColumns);
                console.log('----------------------');
            }
        }
    }
}

function printColumns(columns) {
    for (let column of columns) {
        console.log(`${column.name} : ${column.value}   update = ${column.updated}`);
    }
}