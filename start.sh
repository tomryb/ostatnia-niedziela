USER_ID=1000
GROUP_ID=1000

echo -ne "Copying default config files... " ; \
cp -np ./src/config/index.dist ./src/config/index.js ; \
cp -np ./.npmrc.dist ./.npmrc ; \
echo "ok" ; \
if [ ! -e ./.env ] ; then \
  echo ; \
  echo ; \
  read -sp "Enter FontAwesome AuthToken (https://vault.timecamp.com/ui/vault/secrets/production/show/devtools/fontawesome): " "FONT_AWESOME_AUTH_TOKEN" ; \
  if [ -z "$FONT_AWESOME_AUTH_TOKEN" ]; then echo "Empty token provided. Aborting"; exit 1 ; fi; \
  echo ; \
  if ! echo "$FONT_AWESOME_AUTH_TOKEN" | egrep -q '^[A-Z0-9]{8}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{12}$$'; then \
      echo "Incorrect token provided: $FONT_AWESOME_AUTH_TOKEN"; \
      echo "Not matching: FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF"; \
      exit 2; \
    fi; \
  echo "FONT_AWESOME_AUTH_TOKEN=$FONT_AWESOME_AUTH_TOKEN" > ./.env ; \
  chown -R $HOST_USER_ID:$HOST_GROUP_ID ./.env ;\
  scripts/init-env.sh ; \
  echo "Initialized successfully." ; \
else \
  echo "FontAwesome AuthToken already saved." ; \
fi

echo -ne "Building docker image..." ; \
docker-compose build ; \
echo -ne "Installing packages..." ; \
docker-compose up -d frontend ; \
docker-compose exec frontend yarn install ; \
echo -n "Starting front-end..." ; \
docker-compose exec frontend yarn start ; \
