## Canal Nodejs

> 此应用是 node js 版本的 [Canal](https://github.com/alibaba/canal) 客户端。
> 
> 它可以让你在 node js 环境中对 MySQL 数据库中的数据进行增量订阅 & 消费。更多信息请看 [Canal wiki]( https://github.com/alibaba/canal/wiki)

### Quick Start

1. 启动 `canal-server`
   
   `cd ./docker && docker-compose up`

2. 启动 `nodejs canal client`
   
   `node ../example/quick-start.js`

3. 修改 MySQL 表记录观察控制台输出
   
   ```shell
   docker exec -it mysql-8.0 bash
   mysql -u root -p 123456
   use test;
   insert into user values(null, 'canal');
   ```

4. 观察控制台输出
   
   ```
   Insert: 
   id : 4   update = true
   name : canal   update = true
   ----------------------
   ```