# 複数の GROWI を起動

::: tip
この Cookbook は [docker-compose](../getting-started/docker-compose.md) による管理を前提としています
:::

## 概要

この章では1つのマシン上に3つの GROWI を立ち上げる手順を紹介します。

### イメージのビルド

Docker イメージをビルドします。growi-docker-compose がインストールされているフォルダにて、以下のコマンドを実行してください。

```bash
$ docker build -t growimulti_app .
```

### docker-compose.yml の編集

`./docker-compose.yml` ファイルの `services:app` およびボリュームを以下のように複製してください。なお、今回はリソース節約のために Mongo DB と Elasticsearch はそれぞれ1つだけで運用します。

```text:docker-compose.yml
...

services:
  app-1:
    # 上記でビルドしたイメージ名に合わせます
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
      # この MONGO_URI と ELASTICSEARCH_URI のパス名は app-1 用のものに揃えてください
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
    # 上記でビルドしたイメージ名に合わせます
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
      # この MONGO_URI と ELASTICSEARCH_URL のパス名は app-2 用のものに揃えてください
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

  app-3:
    # 上記でビルドしたイメージ名に合わせます
    image: "growimulti_app:latest"
    ports:
      - 127.0.0.1:3003:3000
    links:
      - mongo:mongo
      - elasticsearch:elasticsearch
    depends_on:
      - mongo
      - elasticsearch
    environment:
      # この MONGO_URI と ELASTICSEARCH_URI のパス名は app-3 用のものに揃えてください
      - MONGO_URI=mongodb://mongo:27017/growi-3
      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-3
      - PASSWORD_SEED=changeme
    command: "dockerize
              -wait tcp://mongo:27017
              -wait tcp://elasticsearch:9200
              -timeout 60s
              npm run server:prod"
    restart: unless-stopped
    volumes:
      - growi_data_3:/data

...

volumes:
  # それぞれの GROWI で使用しているボリューム名に合わせてください
  growi_data_1:
  growi_data_2:
  growi_data_3:

...
```

## 起動

以下のコマンドを実行後、それぞれのポートにアクセスして起動を確認します。

```bash
$ docker-compose up
```

[http://localhost:3001](http://localhost:3001) (app-1)

[http://localhost:3002](http://localhost:3002) (app-2)

[http://localhost:3003](http://localhost:3003) (app-3)


## アップグレード

### コンテナを停止

```bash
docker-compose stop
```

### Docker イメージと App コンテナの削除

```bash
docker-compose rm app-1
docker-compose rm app-2
docker-compose rm app-3
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