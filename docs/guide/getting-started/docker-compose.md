# docker-compose

[[toc]]

## Overview

This chapter introduces the installation process for GROWI with docker-compose.

Software needed for Setup are listed below.

* Docker
* docker-compose

## Download growi-docker-compose

Download or clone source code files from [https://github.com/weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose) 

```text
git clone https://github.com/weseek/growi-docker-compose.git growi
```

## Build GROWI

Excute these commands in downloaded directory

```text
cd growi
docker-compose up
```

Access to `http://localhost:3000/` , if you visit the first setting step (`/installer`), GROWI is starting.

## Allow to access GROWI from other hosts

you can allow to access GROWI from other hosts with changing `ports` in `docker-compose.yml`.

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

## Change heap size of Elasticsearch

If you have enough memory capacity, you can expand heap size of Elasticsearch with changing value of `ES_JAVA_OPTS` in `docker-compose.yml`.

```text
environment:
  - "ES_JAVA_OPTS=-Xms2g -Xmx2g"
```

## Upgrading

### Upgrading to GROWI v3.4.x(for user use older version than v3.3.x)

access to [Upgrading to GROWI v3.4.x](../upgrading/34x.html).

### Upgrading container

stop containers in a folder installed `growi-docker-compose`.

```text
cd growi
docker-compose stop
```

remove Docker containers and a Docker image.

```text
docker-compose rm app　mongodb elasticseach
docker rmi weseek/growi:3
```

pull GROWI latest edition, create a fresh Docker image and build up containers.

```text
git pull
docker-compose build
docker-compose up
```

after build up containers, access to admin page and rebuild ES index on full text search page全文検索管理ページ( `/admin/search` )で、インデックスを再構築してください。

## Related pages

- use many GROWIs

[Multiple Sites](../admin-cookbook/multi-app.html)

- use HTTPS proxy

[HTTPS with Let's Encript](../admin-cookbook/lets-encrypt.html)

- backup data about page and user in MongoDB

[MongoDB Auto Backup](../admin-cookbook/mongodb-backup-regular.html#manage-with-docker-compose)

- use HackMD(CodiMD) to simultaneous edit 

[HackMD(CodiMD) Integration](../admin-cookbook/integrate-with-hackmd.html#%E6%97%A2%E5%AD%98%E3%81%AE-hackmd-codimd-%E3%81%A8%E9%80%A3%E6%90%BA%E3%81%99%E3%82%8B)