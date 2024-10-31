# systemd による自動起動

## 概要

この章では、GROWI を systemd によって自動起動させる方法を紹介します。

## ユニットファイルを作成する

`/etc/systemd/system/growi.service` を作成し、以下の内容を書き込みます。

```text
[Unit]
Description=Growi
After=network.target mongod.service

[Service]
WorkingDirectory=/opt/growi
Environment=PORT=3000\
MONGO_URI=mongodb://localhost:27017/growi\
ELASTICSEARCH_URI=http://localhost:9200/growi
ExecStart=/usr/bin/npm run app:server

[Install]
WantedBy=multi-user.target
```

### 設定事項

#### WorkingDirectory

GROWI のディレクトリのある場所を指定します。  
[GROWI Docs](/ja/admin-guide/getting-started/docker-compose.html) に従ってインストールした場合は `/opt/growi` です。適宜環境に合わせて設定してください。

#### Environment

環境変数を指定します。  
`MONGO_URI` や `FILE_UPLOAD` などをここで指定します。

#### ExecStart

起動コマンドを指定します。  
適宜環境に合わせて設定してください。npm のパスは、`which npm` などで確認してください。

## systemctl による操作

### 起動

```text
sudo systemctl start growi
```

### 自動起動の有効化

```text
sudo systemctl enable growi
```
