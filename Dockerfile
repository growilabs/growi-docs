FROM node:16.13.0-alpine AS builder

WORKDIR /growi-docs

COPY . .

RUN yarn
RUN yarn help-growi-cloud:build
