#!/bin/bash

npm run build
scp -i ./.ssh/www-data -r dist/* www-data@andrewovens.com:/var/www/html/