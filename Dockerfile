# develop stage
FROM node:current-alpine as develop-stage
RUN apk upgrade --update
RUN apk add git
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
