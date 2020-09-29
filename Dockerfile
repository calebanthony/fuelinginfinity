# develop stage
FROM node:current-alpine as develop-stage
RUN apk upgrade --update
RUN apk add git
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn set version berry
RUN yarn install
COPY . .
