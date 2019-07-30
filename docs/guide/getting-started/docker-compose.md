# docker-compose

[[toc]]

## Overview

This chapter introduces the installation process for GROWI with docker-compose.

Software needed for setup are listed below.

* Docker
* docker-compose

## Download growi-docker-compose

Download or clone source code files from [https://github.com/weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose) .

```text
git clone https://github.com/weseek/growi-docker-compose.git growi
```

## Build GROWI

Execute these commands in the directory where `growi-docker-compose` exists.

```text
cd growi
docker-compose up
```

Access to `http://localhost:3000/` , and if the request is redirected to `/installer`, GROWI is properly launched.

## Allow to Access GROWI From Other Hosts

GROWI can be accessed from other hosts by changing `ports` in `docker-compose.yml`.

**Before**

```text
services:
  app:
    ports:
      - 127.0.0.1:3000:3000
```

**After**

```text
services:
  app:
    ports:
      - 3000:3000
```

## Change Heap Size of Elasticsearch

If there is enough memory capacity, the heap size of Elasticsearch may be increased by changing `ES_JAVA_OPTS` in `docker-compose.yml`.

```text
environment:
  - "ES_JAVA_OPTS=-Xms2g -Xmx2g"
```

## Upgrade GROWI

### Upgrading to GROWI v3.4.x(from v3.3.x or below)

See [Upgrading to GROWI v3.4.x](../upgrading/34x.html).

### Upgrading Container

Stop containers in the directory where `growi-docker-compose` exists.

```text
cd growi
docker-compose stop
```

Remove Docker containers and Docker images.

```text
docker-compose rm app　mongodb elasticseach
docker rmi weseek/growi:3
```

Pull latest GROWI, and create a fresh Docker image and build up containers.

```text
git pull
docker-compose build
docker-compose up
```

After containers are built, access to the admin page and build ES index again on full text search management( `/admin/search` ).

## Related Pages

- Launch Multiple GROWIs

[Multiple Sites](../admin-cookbook/multi-app.html)

- HTTPS proxy

[HTTPS with Let's Encript](../admin-cookbook/lets-encrypt.html)

- Backup data about page and user in MongoDB

[MongoDB Auto Backup](../admin-cookbook/mongodb-backup-regular.html#manage-with-docker-compose)

- Use HackMD(CodiMD) to simultaneous editing

[HackMD(CodiMD) Integration](../admin-cookbook/integrate-with-hackmd.html#%E6%97%A2%E5%AD%98%E3%81%AE-hackmd-codimd-%E3%81%A8%E9%80%A3%E6%90%BA%E3%81%99%E3%82%8B)