# docker-compose

[[toc]]

## Overview

This chapter introduces the installation process for GROWI with docker-compose.

Software needed for setup are listed below.

* Docker
* docker-compose

## Download growi-docker-compose

Download or clone source code files from [https://github.com/growilabs/growi-docker-compose](https://github.com/growilabs/growi-docker-compose) .

```text
git clone https://github.com/growilabs/growi-docker-compose.git growi
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

### Refer to upgrading guides

The following page introduces the processes to upgrade GROWI to v3.4.x from v3.3.x or below.

[Upgrading GROWI to v3.4.x](/en/admin-guide/upgrading/34x.html).

::: danger
In upgrading any other version, please check the upgrade guide for the appropriate version first.

:::

### Upgrading Container

Stop containers in the directory where `growi-docker-compose` exists.

```text
cd growi
docker-compose stop
```

Remove Docker containers and Docker images.

```text
docker-compose rm app mongo elasticseach
docker rmi growilabs/growi:5
```

Pull latest GROWI, and create a fresh Docker image and build up containers.

```text
git pull
docker-compose build
docker-compose up
```

After containers are built, access to the admin page and build ES index again on full text search management ( `/admin/search` ).

## Related Pages

* Launch Multiple GROWIs

[Multiple Sites](/en/admin-guide/admin-cookbook/multi-app.html)

* HTTPS proxy

[HTTPS with Let's Encript](/en/admin-guide/admin-cookbook/lets-encrypt.html)

* Backup data about page and user in MongoDB

[MongoDB Auto Backup](/en/admin-guide/admin-cookbook/mongodb-backup-regular.html#manage-with-docker-compose)

* Use HackMD(CodiMD) to simultaneous editing

[HackMD(CodiMD) Integration](/en/admin-guide/admin-cookbook/integrate-with-hackmd.html)
