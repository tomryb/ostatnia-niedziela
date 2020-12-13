USER_ID=1000
GROUP_ID=1000

echo -ne "Copying default config files... " ; \
cp -np ./src/config/index.dist ./src/config/index.js ; \
cp -np ./.npmrc.dist ./.npmrc ; \
echo "ok" ; \
echo -ne "Building docker image..." ; \
docker-compose build ; \
echo -ne "Installing packages..." ; \
docker-compose up -d frontend ; \
docker-compose exec frontend yarn install ; \
echo -n "Starting front-end..." ; \
docker-compose exec frontend yarn start ; \
