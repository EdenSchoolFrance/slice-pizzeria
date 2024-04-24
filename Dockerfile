FROM ubuntu:22.04

# TODO: to go to dev env
RUN apt-get update
RUN apt-get install -y curl unzip

# Setting up bun
RUN curl -fsSL https://bun.sh/install | bash
RUN source /root/.bashrc



