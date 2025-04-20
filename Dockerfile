FROM node:20.12-alpine3.19 AS build

WORKDIR /usr/src

COPY package.json yarn.lock /usr/src/

RUN yarn install --pure-lockfile

COPY . .

RUN yarn build

FROM node:20.12-alpine3.19

WORKDIR /app

COPY --from=build /usr/src/node_modules /app/node_modules
COPY --from=build /usr/src/dist /app

EXPOSE 3000

ENTRYPOINT ["node", "main.js"]