# HTTPS with Let's Encrypt

::: tip
This cookbook supposes the usage of [docker-compose](../getting-started/docker-compose.md).
:::

## Overview

This chapter introduces how to launch GROWI with the HTTPS server prepared by Let's Encript and ginx proxy.

## Procedure

### Copy docker-compose.override.yml

Excuse the follow command for copying `./exmaples/https-portal/docker-compose.override.yml` into the directory where `growi-docker-compose` exists.

```text
$ cd growi // the directory where `growi-docker-compose` exists.
$ cp examples/https-portal/docker-compose.override.yml .
```

### Start

Build GROWI and access to the site.

```bash
docker-compose up
```

[https://example.com](https://example.com)

### Set your domain name
Set `DOMAINS` of `./docker-compose.override.yml` in your domain.

```text:docker-compose.override.yml
services:
  https-portal:
    environment:
      // replace 'example.com' for your domain
      DOMAINS: 'example.com -> http://app:3000' 
```