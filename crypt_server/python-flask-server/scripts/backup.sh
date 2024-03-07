#!/bin/bash
source /etc/profile
CRYPT_TOOL_PATH=/home/root/app
KEYBACKUP_CONF=/home/root/keybackup/keybackup.conf

sed -i "s/SERVER_IP = \".*\"/SERVER_IP = \"$1\"/g" $KEYBACKUP_CONF
cd $CRYPT_TOOL_PATH
pufs_crypt backup
echo "backup to $1 success."
