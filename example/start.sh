#!/bin/sh

while getopts h:p:d:u:pw: flag
do
    case "${flag}" in
        h) host=${OPTARG};;
        p) port=${OPTARG};;
        d) destination=${OPTARG};;
        u) username=${OPTARG};;
        pw) password=${OPTARG};;
    esac
done

export host=${host:=127.0.0.1}
export port=${port:=11111} 
export destination=${destination:=example}
export username=$username
export password=$password

full_path="$(cd "$(dirname "$0")"; pwd)/quick-start.js"
/usr/local/bin/node $full_path