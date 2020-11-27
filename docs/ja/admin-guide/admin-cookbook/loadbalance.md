# 複数の GROWI でのロードバランス

(TBD)

## PubSub サーバー

[weseek/nginx-nchan](https://hub.docker.com/repository/docker/weseek/nginx-nchan/) または Redis (未実装)

## 環境変数の設定

### 簡易設定

```
S2SMSG_PUBSUB_SERVER_TYPE=nchan
NCHAN_URI=http://nchan
```

### 詳細設定

[環境変数](./env-vars.md) ページの `S2SMSG_PUBSUB_NCHAN_*` を参照してください
