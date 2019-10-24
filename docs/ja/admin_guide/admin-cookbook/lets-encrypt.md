# Let's Encrypt による HTTPS 運用

::: tip
この Cookbook は [docker-compose](../getting-started/docker-compose.md) による管理を前提としています
:::

## 概要

この章では [HTTPS-PORTAL](https://github.com/SteveLTN/https-portal) をもとにした Let's Encript および nginx プロキシを用いた HTTPS サーバーの利用手順を紹介します。

## 手順

### docker-compose.override.yml ファイルのコピー

以下のコマンドを実行し、GROWI のあるディレクトリの直下に `./exmaples/https-portal` の `docker-compose.override.yml` ファイルをコピーします。

```text
$ cd growi // growi-docker-compose をインストールしたディレクトリ
$ cp examples/https-portal/docker-compose.override.yml .
```

### 起動

GROWI を起動し、サイトにアクセスしてください。

```bash
docker-compose up
```

[https://example.com](https://example.com)


### ドメイン名の設定
`./docker-compose.override.yml` の `DOMAINS` の値に、利用者が管理可能なドメイン名を設定してください。

```text:docker-compose.override.yml
services:
  https-portal:
    environment:
      // example.com の部分を利用可能なドメイン名に変更
      DOMAINS: 'example.com -> http://app:3000' 
```