###
###  This Docker file processes Multi Stage Build for help-growi-cloud
###

#
#  Build Stage
#
FROM node:20-slim AS builder

WORKDIR /growi-docs

COPY . .

RUN apt-get update && apt-get install -y ca-certificates wget --no-install-recommends \
  && wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.shrc" SHELL="$(which sh)" sh -

ENV PNPM_HOME="/root/.local/share/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

RUN pnpm install
RUN pnpm run help-growi-cloud:build


#
# Production Stage
#
FROM nginx:latest

COPY --from=builder /growi-docs/docs/.vuepress/dist /usr/share/nginx/html/help

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
