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

export host=$host
export port=$port 
export destination=$destination
export username=$username
export password=$password

shell_full_path="$(cd "$(dirname "$0")"; pwd)/quick-start.js"
/usr/local/bin/node $shell_full_path