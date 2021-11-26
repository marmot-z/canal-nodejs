#!/bin/sh

if [ ! -d /tmp/canal ]; then
    if [ ! -f /tmp/canal.deployer-1.1.5.tar.gz ]; then
        echo "download canal-server"
        curl -LJO https://github.com/alibaba/canal/releases/download/canal-1.1.5/canal.deployer-1.1.5.tar.gz > /tmp/canal.deployer-1.1.5.tar.gz
    fi

    echo "mkdir /tmp/canal"
    mkdir /tmp/canal
    tar zxvf /tmp/canal.deployer-1.1.5.tar.gz  -C /tmp/canal
fi

cd /tmp/canal
sh bin/startup.sh

sleep 1s
tail -f -n 100 logs/canal/canal.log