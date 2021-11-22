const CanalConnectors = require('../canal-connectors');
const ProtoUtil = require('../proto-util');

const host = '127.0.0.1';
const port = 11111;
const destination = 'example';
const username = '';
const password = '';

;(async function() {
    await ProtoUtil.load();

    let connector = CanalConnectors.newConnector(host, port, destination, username, password);
    let shutdown = (err) => {
        if(err) console.error(err);

        if (connector.isRunning()) connector.disconnect();
    };
    // // 监听错误事件
    // connector.on('error', shutdown);

    // 连接 & 订阅
    await connector.connect();
    await connector.subscribe('.*\..*');
    await connector.unsubscribe();

    // 获取
    connector.getWithoutAck((err, message) => {
        if (err) {
            console.error('Get message occor a error:', err);
            connector.disconnect();
        }

        let batchId = message.getId();
        let size = message.entries.size;

        // 无数据休眠
        if (batchId == -1 || !size) {
            await sleep(3_000);
        } 
        // 打印数据
        else {
            printEntry(message.entries);
        }

        // 发送回执
        connector.ack(batchId, (err) => {
            if (err) {
                console.error('Send ack occor a error:', err);
                connector.disconnect();
            }
        });
    });

    process.on('exit', shutdown);
}) ();

async function printEntry(entries) {
    for (let entry of entries) {
        if (entry.entryType === ProtoUtil.EntryType.values.TRANSACTIONBEGIN || 
                entry.entryType === ProtoUtil.EntryType.values.TRANSACTIONEND)  {
            continue;
        }
        
        let rowChage = await ProtoUtil.decode(ProtoUtil.enums.RowChange, entry.storeValue);

        if (rowChage.isDdl) {
            console.log('IsDdl: true, sql:', rowChage.sql);
        }

        for (let rowData of rowChage.rowDatasList) {
            if (rowChage.eventType == ProtoUtil.EventType.values.DELETE) {
                printColumns(rowData.beforeColumnsList);
            } else if (rowChage.eventType == ProtoUtil.EventType.values.INSERT) {
                printColumns(rowData.afterColumnsList);
            } else {
                printColumns(rowData.beforeColumnsList);
                printColumns(rowData.afterColumnsList);
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