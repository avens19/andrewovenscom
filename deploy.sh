#!/bin/bash

npm run build
mkdir .ssh
echo $PRIVATE_KEY > .ssh/www-data
scp -i .ssh/www-data -r dist/* www-data@andrewovens.com:/var/www/html/