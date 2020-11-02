#!/bin/bash
set -e

DIST_PATH='./.npmrc.dist'
RESULT_PATH='./.npmrc'

cp -a ${DIST_PATH} ${RESULT_PATH}

# read all env values
cat ./.env |
while read line;
do
	splitedLine=(${line//=/ })

	# get key and value from .env file
	key=${splitedLine[0]}
	value=${splitedLine[1]}

	# replace key with value in .npmrc file
	sed -i "s/\${${key}}/${value}/g" ${RESULT_PATH}
done
