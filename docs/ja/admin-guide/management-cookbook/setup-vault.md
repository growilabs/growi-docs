# GROWI Vault のセットアップ

[GROWI Vault](/ja/guide/features/vault.html) を利用するためのセットアップ手順を説明します。

GROWI Vault は、GROWI アプリ本体に組み込まれたゲートウェイ（`/vault.git` で公開）と、独立した vault-manager サービス（コンテナ）の 2 つで構成されます。vault-manager は、共有ファイルシステム上の bare Git リポジトリを保持します。ページの変更は MongoDB の change stream を通じて取り込まれます。

## 前提条件

- **MongoDB のレプリカセット構成**: GROWI Vault は MongoDB の change stream を使用するため、MongoDB をレプリカセット構成で運用する必要があります（単一ノードのレプリカセットでも可）。詳細は [v8.0.x へのアップグレード](/ja/admin-guide/upgrading/80x.html) を参照してください。
- **共有ファイルシステム**: vault-manager が bare Git リポジトリを保持するための、永続的なファイルシステムが必要です。

## セットアップの流れ

1. vault-manager サービス（コンテナ）を配置します。具体的なコンテナ定義は [growi-docker-compose](https://github.com/growilabs/growi-docker-compose) の更新内容を参照してください。
2. GROWI アプリと vault-manager の双方に、接続と認証のための環境変数を設定します（下記）。
3. GROWI を再起動し、管理画面の `/admin/vault` から初期 bootstrap を実行します。bootstrap の進捗と保存状況は同じ画面で確認できます。

## 主な環境変数

セットアップに最低限必要な環境変数は次のとおりです。リトライ・drift 検出・reconcile・gc などのチューニング向けを含む全一覧は、[環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) ページの「GROWI Vault オプション」を参照してください。

- `VAULT_ENABLED`: GROWI Vault 機能を有効化します。
- `VAULT_MANAGER_ENDPOINT`: GROWI アプリが vault-manager へ接続する URL です。
- `VAULT_MANAGER_INTERNAL_SECRET`: アプリと vault-manager 間の認証に使う共有シークレットです。
- `VAULT_REPO_PATH`: vault-manager が管理する bare Git リポジトリのパスです。
- `VAULT_BOOTSTRAP_ON_START`: 起動時に初期 bootstrap を実行するかどうかを指定します。

::: warning
`VAULT_MANAGER_INTERNAL_SECRET` はシークレットです。本番環境では推測されにくい値を設定し、リポジトリやログに残さず、外部に漏らさないよう安全に管理してください。
:::
