#!/bin/bash

set -x

chmod 600 .ssh/deploy
scp -i .ssh/deploy -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -r dist/* deploy@andrewovens.com:/var/www/html/