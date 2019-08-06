# HTTPS with Let's Encrypt

::: tip
This cookbook supposes the usage of [docker-compose](../getting-started/docker-compose.md).
:::

## Overview

This chapter introduces how to launch GROWI with the HTTPS server prepared by Let's Encript and ginx proxy.

## Edit docker-compose.yml

Add describe about the HTTPS server in `./docker-compose.yml`. In this example, use [HTTPS-PORTAL](https://github.com/SteveLTN/https-portal).

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
      DOMAINS: 'example.com -> http://localhost:3000'
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