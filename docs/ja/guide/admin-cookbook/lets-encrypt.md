# Let's Encrypt による HTTPS 運用

::: tip
この Cookbook は [docker-compose](../getting-started/docker-compose.md) による管理を前提としています
:::

## 概要

この章では Let's Encript および nginx プロキシを用いた HTTPS サーバーの利用手順を紹介します。

## docker-compose.yml ファイルの編集

`./docker-compose.yml` ファイルに以下のように HTTPS サーバーに関する記述を追加してください。ここでは [HTTPS-PORTAL](https://github.com/SteveLTN/https-portal) を利用しています。環境変数 `DOMAIN` の `example.com` は利用者が管理可能なドメイン名に設定してください。検証用にローカル環境で `example.com` を利用する場合、変更不要です。

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
      DOMAINS: 'example.com -> http://app:3000'
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

::: tip
example.com を利用する場合、ローカル環境における example.com の IP アドレス設定を行う必要があります
:::

[https://example.com](https://example.com)
