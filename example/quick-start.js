const CanalConnectors = require('../canal-connectors');
const ProtoUtil = require('../proto-util');

;(async function() {
    await ProtoUtil.load();

    let connector = CanalConnectors.newConnector(process.env.host, process.env.port, 
            process.env.destination, process.env.username, process.env.password);

    // 连接 & 订阅
    await connector.connect();
    await connector.subscribe('.*\..*');
    // await connector.unsubscribe();
    // connector.rollback();
    connector.on('error', console.error);

    // 获取
    try{
        while (true) {
            let message = await connector.getWithoutAck();
            let batchId = parseInt(message.id);
            let size = message.entries.length;

            // 无数据
            if (batchId === -1 || !size) {
                console.log('Empty message.');
                await sleep(3_000);
            } 
            // 打印数据
            else {
                printEntry(message.entries);
            }

            // 发送回执
            connector.ack(batchId);
        }
    } catch(err) {
        console.error('Get message occor a error:', err);
    } finally {
        if (connector.isRunning()) connector.disconnect();
    }
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
                printColumns(rowData.beforeColumns);
            } else if (rowChage.eventType == ProtoUtil.EventType.values.INSERT) {
                printColumns(rowData.afterColumns);
            } else {
                printColumns(rowData.beforeColumns);
                printColumns(rowData.afterColumns);
            }
        }
    }
}

function printColumns(columns) {
    for (let column of columns) {
        console.log(`${column.name} : ${column.value}   update = ${column.updated}`);
    }
}

function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}