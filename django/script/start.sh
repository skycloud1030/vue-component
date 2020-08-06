#!/bin/bash
#

cd /utils/server-build
./wait-for-it.sh db:5432 -- ./server.sh
