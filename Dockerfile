FROM node:current-buster-slim

# Install command dependencies.
RUN apt update
RUN apt install -y git

RUN npm install -g lerna
RUN npm install -g firebase-tools

RUN rm -rf /var/lib/apt/lists/*