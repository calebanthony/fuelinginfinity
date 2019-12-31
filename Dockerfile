# develop stage
FROM node:current-alpine as develop-stage
RUN apk upgrade --update
RUN apk add git
WORKDIR /app
RUN mkdir -p /app/node_modules
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
