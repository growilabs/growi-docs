# Multiple Sites

::: tip
この Cookbook は [docker-compose](../getting-started/docker-compose.md) による管理を前提としています
:::

## 概要

この章では1つのマシン上に複数の GROWI を立ち上げる手順を紹介します。以下の Example では3つの GROWI を立ち上げる手順を紹介しています。

[growi-docker-compose Multiple Sites Example](https://github.com/weseek/growi-docker-compose/tree/master/examples/multi-app)

### イメージのビルド

複数立ち上げのためにタグをつけて Docker イメージをビルドします。growi-docker-compose がインストールされているフォルダにて、以下のコマンドを実行してください。（タグ名はなんでも構いません）

```bash
docker build -t growimulti_app .
```

### docker-compose.yml の編集

`./docker-compose.yml` ファイルの `services:app` を以下のように複製する。

```text:docker-compose.yml
...

services:
  app-1: // 1つ目の GROWI 用のコンテナ名
    image: "growimulti_app:latest" // 上記で設定したタグ名
    ports:
      - 127.0.0.1:3001:3000 // app-1 にアクセスするためのポート
    links:
      - mongo:mongo
      - elasticsearch:elasticsearch
    depends_on:
      - mongo
      - elasticsearch
    environment:
      - MONGO_URI=mongodb://mongo:27017/growi-1 // 1つめの GROWI 用の MONGO_URL
      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-1 // 1つめの GROWI 用の ELASTICSEARCH_URL
      - PASSWORD_SEED=changeme
    command: "dockerize
              -wait tcp://mongo:27017
              -wait tcp://elasticsearch:9200
              -timeout 60s
              npm run server:prod"
    restart: unless-stopped
    volumes:
      - growi_data_1:/data // 1つめの GROWI 用のボリューム名

  app-2: // 2つ目の GROWI 用のコンテナ名
    image: "growimulti_app:latest" // 上記で設定したタグ名
    ports:
      - 127.0.0.1:3002:3000 // app-2 にアクセスするためのポート
    links:
      - mongo:mongo
      - elasticsearch:elasticsearch
    depends_on:
      - mongo
      - elasticsearch
    environment:
      - MONGO_URI=mongodb://mongo:27017/growi-2 // 2つめの GROWI 用の MONGO_URI
      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-2 // 2つめの GROWI 用の ELASTICSEARCH_URL
      - PASSWORD_SEED=changeme
    command: "dockerize
              -wait tcp://mongo:27017
              -wait tcp://elasticsearch:9200
              -timeout 60s
              npm run server:prod"
    restart: unless-stopped
    volumes:
      - growi_data_2:/data // 2つめの GROWI 用のボリューム名

...

volumes:
  growi_data_1: // 1つめの GROWI 用のボリューム名
  growi_data_2: // 2つめの GROWI 用のボリューム名

...
```

### Start

```bash
docker-compose up
```

and access to:

* http://localhost:3001 (app-1)
* http://localhost:3002 (app-2)
* http://localhost:3003 (app-3)


Upgrade
-------

### Prepare
```bash
# go to growi-docker-compose workdir
cd growi
```

### Stop

```bash
docker-compose stop
```

### Remove app containers and images
```bash
docker-compose rm app-1
docker-compose rm app-2
docker-compose rm app-3
docker rmi growimulti_app
docker rmi weseek/growi:3
```

### Rebuild Image
```bash
git pull
docker build -t growimulti_app .
```

### Start

```bash
docker-compose up
```

### app 数の上限

### 共通のDB(mongo, ES) を使わない方法