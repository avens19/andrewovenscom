#!/bin/bash

set -x

mkdir .ssh
echo $PRIVATE_KEY > .ssh/www-data
scp -i .ssh/www-data -r dist/* www-data@andrewovens.com:/var/www/html/