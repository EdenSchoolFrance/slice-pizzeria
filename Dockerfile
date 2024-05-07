FROM node:20.12

# TODO: to go to dev env
RUN apt-get update
RUN apt-get install -y procps

RUN npm i -g @nestjs/cli


WORKDIR /api