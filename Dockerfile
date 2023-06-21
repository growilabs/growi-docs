###
###  This Docker file processes Multi Stage Build for help-growi-cloud
###

##
# Stage 1
#
FROM node:16-slim AS builder

WORKDIR /growi-docs

COPY . .
RUN yarn
RUN yarn help-growi-cloud:build


##
# Stage 2
#
FROM node:16-slim

COPY --from=builder /growi-docs/docs/.vuepress/dist .
