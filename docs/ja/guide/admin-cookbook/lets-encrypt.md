# Let's Encrypt による HTTPS 運用

::: tip
この Cookbook は [docker-compose](../getting-started/docker-compose.md) による管理を前提としています
:::

## 概要

この章では Let's Encript および nginx プロキシを用いた HTTPS サーバーの利用手順を紹介します。

## docker-compose.yml ファイルの編集

`./docker-compose.yml` ファイルに以下のように HTTPS サーバーに関する記述を追加してください。ここでは [HTTPS-PORTAL](https://github.com/SteveLTN/https-portal) を利用しています。

```text:docker-compose.yml
...

services:
  # a fully automated HTTPS server powered by Nginx, Let's Encrypt
  # see https://github.com/SteveLTN/https-portal
  https-portal:
    image: steveltn/https-portal:1
    ports:
      - '80:80'
      - '443:443'
    links:
      - app:app
    environment:
      DOMAINS: 'example.com -> http://localhost:3000'
      STAGE: 'production'
      FORCE_RENEW: 'false'
      WEBSOCKET: 'true'
      CLIENT_MAX_BODY_SIZE: 0
    restart: unless-stopped
    volumes:
      - https-portal_data:/var/lib/https-portal

volumes:
  https-portal_data:
```

## 起動

GROWI を起動し、サイトにアクセスしてください。

```bash
docker-compose up
```

[https://example.com](https://example.com)