FROM node:current-alpine
RUN apk upgrade --update
RUN apk add git
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
#RUN yarn set version berry
RUN yarn install
COPY . .
