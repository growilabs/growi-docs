# 複数の GROWI を起動

::: tip
この Cookbook は [docker-compose](../getting-started/docker-compose.md) による管理を前提としています
:::

## 概要

この章では1つのマシン上に複数の GROWI を立ち上げる手順を紹介します。以下の Example では3つの GROWI を立ち上げる例を紹介しています。

[growi-docker-compose Multiple Sites Example](https://github.com/weseek/growi-docker-compose/tree/master/examples/multi-app)

### イメージのビルド

Docker イメージをビルドします。growi-docker-compose がインストールされているフォルダにて、以下のコマンドを実行してください。

```bash
$ docker build -t growimulti_app .
```

### docker-compose.yml の編集

`./docker-compose.yml` ファイルの `services:app` を以下のように複製してください。

```text:docker-compose.yml
...

services:
  app-1:
    image: "growimulti_app:latest"
    ports:
      - 127.0.0.1:3001:3000
    links:
      - mongo:mongo
      - elasticsearch:elasticsearch
    depends_on:
      - mongo
      - elasticsearch
    environment:
      - MONGO_URI=mongodb://mongo:27017/growi-1
      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-1
      - PASSWORD_SEED=changeme
    command: "dockerize
              -wait tcp://mongo:27017
              -wait tcp://elasticsearch:9200
              -timeout 60s
              npm run server:prod"
    restart: unless-stopped
    volumes:
      - growi_data_1:/data

  app-2:
    image: "growimulti_app:latest"
    ports:
      - 127.0.0.1:3002:3000
    links:
      - mongo:mongo
      - elasticsearch:elasticsearch
    depends_on:
      - mongo
      - elasticsearch
    environment:
      - MONGO_URI=mongodb://mongo:27017/growi-2
      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-2
      - PASSWORD_SEED=changeme
    command: "dockerize
              -wait tcp://mongo:27017
              -wait tcp://elasticsearch:9200
              -timeout 60s
              npm run server:prod"
    restart: unless-stopped
    volumes:
      - growi_data_2:/data

...

volumes:
  growi_data_1:
  growi_data_2:

...
```

## 起動

以下のコマンドを実行後、それぞれのポートにアクセスして起動を確認します。

```bash
$ docker-compose up
```

[http://localhost:3001](http://localhost:3001) (app-1)

[http://localhost:3002](http://localhost:3002) (app-2)


## アップグレード

### コンテナを停止

```bash
docker-compose stop
```

### Docker イメージと App コンテナの削除

```bash
docker-compose rm app-1
docker-compose rm app-2
docker rmi growimulti_app
docker rmi weseek/growi:3
```

### Docker イメージの起動

```bash
git pull
docker build -t growimulti_app .
```

### 起動

```bash
docker-compose up
```