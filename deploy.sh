#!/bin/bash

set -x

mkdir .ssh
echo $PRIVATE_KEY > .ssh/www-data
scp -i .ssh/www-data -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -r dist/* www-data@andrewovens.com:/var/www/html/