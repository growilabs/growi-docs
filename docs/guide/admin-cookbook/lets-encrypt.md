# HTTPS with Let's Encrypt

::: tip
This cookbook supposes the usage of [docker-compose](../getting-started/docker-compose.md).
:::

## Overview

`./docker-compose.yml` ファイルに以下のように HTTPS サーバーに関する記述を追加してください。ここでは [HTTPS-PORTAL](https://github.com/SteveLTN/https-portal) を利用しています。

```text:docker-compose.yml
version: '3'

services:
  ...
  
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
  ...
  https-portal_data:
```

## Start

Build GROWI and access to the site.

```bash
docker-compose up
```

[https://example.com](https://example.com)