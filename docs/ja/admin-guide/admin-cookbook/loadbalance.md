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

[環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) ページの `S2SMSG_PUBSUB_NCHAN_*` を参照してください。

## インポート・エクスポート機能に関する注意点

:::danger
インポート・エクスポートのデータはファイルシステムを利用するため、GROWI サーバーをロードバランスしている場合は正常動作しない可能性があります。
:::

インポート・エクスポートでは、以下のデータをファイルシステム上で展開して処理します。

- データインポート画面(`/admin/importer`) の 「GROWI アーカイブをインポート」にてアップロードした「GROWI アーカイブファイル」
- データアーカイブ画面(`/admin/export`) の「エクスポートされたアーカイブ」

そのためインポート・エクスポート機能はロードバランスしない環境での利用を推奨します。

また、データのバックアップを行いたい場合はアーカイブのエクスポートではなく [mongodb-awesome-backup](/ja/admin-guide/admin-cookbook/mongodb-backup.html) の利用を推奨します。
