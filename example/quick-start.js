const CanalConnectors = require('../canal-connectors');
const ProtoUtil = require('../proto-util');

;(async function() {
    await ProtoUtil.load();

    let connector = CanalConnectors.newConnector(process.env.host, process.env.port, 
            process.env.destination, process.env.username, process.env.password);

    connector.on('error', console.error);

    connector.connect((err) => {
        if (err) throw err;

        let callback = (err, message) => {
            if (err) throw err;

            let batchId = parseInt(message.id);
            let size = message.entries.length;

            if (batchId !== -1 && size) {
                printEntry(message.entries);
            }

            connector.ack(batchId);
            setTimeout(connector.getWithoutAck.bind(connector, 10, -1, callback), 3_000);
        };

        connector.subscribe('.*\..*', (err) => {
            if (err) throw err;

            connector.getWithoutAck(10, -1, callback);
        });
        // connector.unsubscribe();
        // connector.rollback();
    });
}) ();

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