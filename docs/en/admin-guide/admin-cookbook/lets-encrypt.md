# HTTPS with Let's Encrypt

::: tip
This cookbook supposes the usage of [docker-compose](/en/admin-guide/getting-started/docker-compose.html).
:::

## Overview

This chapter introduces how to launch GROWI with the HTTPS server with Let's Encript and nginx proxy.

## How to Configure

### Copy docker-compose.override.yml

Execute the following command to copy `./exmaples/https-portal/docker-compose.override.yml` into the base directory of GROWI.

```bash
$ cd growi # the base directory of GROWI
$ cp examples/https-portal/docker-compose.override.yml .
```

### Launch GROWI

Launch GROWI and access to the site.

```bash
docker-compose up
```

[https://example.com](https://example.com)

### Set Custom Domain

In `./docker-compose.override.yml`, set `DOMAINS` to a domain of your choice.

```yaml title="docker-compose.override.yml"
services:
  https-portal:
    environment:
      // replace 'example.com' with a domain of your choice
      DOMAINS: 'example.com -> http://app:3000' 
```
