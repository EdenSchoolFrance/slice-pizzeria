# Slice Pizzeria API

REST API built with NestJS - inspired by Slice Life Pizzeria

**Status**: In Progress (_Give me some time to write the doc_)

## Quickstart

Before starting, you need to install `yarn`.

```sh
# Install all dependencies using yarn
yarn install --pure-lockfile

# Start dev application
yarn start:dev

# Format all files (optional)
yarn format

# Test all files (optional)
yarn lint
```

## How to build ?

Before starting, you need to install `yarn`.

```sh
# Install all dependencies using yarn
yarn install --pure-lockfile

# Build yarn application
yarn build

# Run application
node ./dist/main.js
```

## How to deploy app ?

Before start, you need to install and setup `Docker`.

**Step 1**

Configure environnements variables from `docker-compose.yml` file with your custom values.

```sh
CHOKIDAR_USEPOLLING=true
WATCHPACK_POLLING=true
WDS_SOCKET_HOST=127.0.0.1
DB_HOST=slice-pizzeria-db
DB_PORT=5432
DB_USERNAME=admin
DB_PASSWORD=toto90
DB_DATABASE=slice-pizzeria
SECRET_KEY=toto90
```

**Step 2**

```sh
# Start api, postgres and adminer services
docker compose up -d --build

# Stop all services
docker compose down
```

## How to seed database ?

You can fill database with default values of `products` and `categories` from `src/data`.

Start Postgresql database width `Docker` and then seed database with `seed` script.

```sh
# start postgresql database
docker compose up -d --build

# run typescript seed script with default env variables
yarn run seed

# or with custom env variables
DB_HOST=localhost \
DB_PORT=5432 \
DB_USERNAME=admin \
DB_PASSWORD=toto90 \
DB_DATABASE=slice-pizzeria \
yarn run seed
```
