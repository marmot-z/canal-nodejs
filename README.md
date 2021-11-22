> 此应用是 node js 版本的 [Canal](https://github.com/alibaba/canal) 客户端。
>
> 它可以让你在 node js 环境中对 MySQL 数据库中的数据进行增量订阅 & 消费。更多信息请看 [Canal wiki]( https://github.com/alibaba/canal/wiki)

## 快速开始

### 构建

1. 安装 node js & npm

2. 下载本项目代码

   `git clone https://github.com/marmot-z/canal-nodejs.git`

3. 下载依赖

   ```shell
   cd canal-nodejs/
   npm install
   ```

### 运行

1. [安装 Canal Server](https://github.com/alibaba/canal/wiki/QuickStart) 

2. 启动demo代码

   ```shell
   // 按照 Canale Server 实际部署情况，修改 host、port、destination、username、password 值
   vim example/quick-start.js
   node example/quick-start.js
   ```

3. 修改监听的 MySQL 库表，例如进行以下操作，程序会打印以下结果

## 相关设计

如果你想了解或者设计 Canal 客户端，那你可以去参考一下 [Canal Java Client](https://github.com/alibaba/canal/tree/master/client) 是如何设计的。在你动身之前，或许我总结的图例可以给你一些帮助。如下：

![](./extra/canal-client-uml.png)



***<u>如果这个项目给你带来一些帮助，请帮我点亮 :star2: 吧</u>***