## Canal Nodejs

> 此应用是 node js 版本的 [Canal](https://github.com/alibaba/canal) 客户端。
> 
> 它可以让你在 node js 环境中对 MySQL 数据库中的数据进行增量订阅 & 消费。更多信息请看 [Canal wiki]( https://github.com/alibaba/canal/wiki)

### Usage
```js
// 创建 simple canal connector 对象
let connector: CanalConnector = CanalConnectors.newSingleConnector({
   host: '127.0.0.1',
   port: 11111,
   destination: 'example',
   username: '',
   password: '',
   filter: '.*\..*'
});

try {
   // 等待建立连接
   await connector.connect();

   while (true) {
      // 拉取增量消息
      let message: Message = await connector.getWithoutAck(1);
      let batchId: number = message.id;

      // 如果 batchId 或者变更条目为空，则代表未新增消息
      if (batchId != -1 && message.entries?.length) {
            try {
               // 打印变更消息或做其他业务操作
               printEntry(message.entries);
            } finally {
               // 当消费完毕，发送确认 ack
               await connector.ack(batchId);
            }
      }

      await sleep(3_000);
   }
} catch(e: any) {
   // 捕获出现的异常：
   // 1，连接建立时的异常
   // 2，拉取消息时的异常
   // 3，其他 socket 操作异常
   console.error('Occur error', e as Error);
} finally {
   // 关闭连接
   connector.isConnect() && connector.disconnect();
}
```
更多请参考 [exmpale.ts](./example/example.ts) 文件


### Quick Start
1. 启动 *canal-server*
   ```shell
   # 创建 docker 网络
   docker network create canalsharp
   # 启动 docker 容器
   cd ./docker
   docker-compose up
   ```
2. 启动 example 文件
   ```shell
   # 下载项目依赖
   npm install
   # 启动 example 文件
   npm run example
   ```
3. 新增 mysql DML
   ```shell
   # 查看 docker 容器
   docker ps
   # CONTAINER ID   IMAGE                       COMMAND                  CREATED        STATUS        PORTS                                                      NAMES
   # c52d627d987a   canal/canal-server:v1.1.5   "/alidata/bin/main.s…"   12 hours ago   Up 12 hours   9100/tcp, 11110/tcp, 11112/tcp, 0.0.0.0:11111->11111/tcp   canal-server
   # c9261bcf2fc7   mysql:8.0-oracle            "docker-entrypoint.s…"   12 hours ago   Up 12 hours   0.0.0.0:3306->3306/tcp, 33060/tcp                          mysql-8.0

   # 进入 mysql 容器
   docker exec -it c9261bcf2fc7 bash
   # 登录 mysql
   mysql -u root -p 123456
   # 选择数据库
   use test;
   #  新增 DML 语句
   insert into user values(null, 'canal');
   ```
4. 观察控制台输出
   ```
   Insert: 
   [1] id : 8 <updated>
   [1] name : canal4 <updated>
   ```

### contribute & feedback
如果你发现了问题或者有想补充的地方，欢迎您提交 [Pull Request](https://github.com/marmot-z/canal-nodejs/pulls) 过 [Issue](https://github.com/marmot-z/canal-nodejs/issues/new)

### LICENSE
本项目采用 Apache-2 license