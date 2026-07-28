---
title: アップグレードの概要と最新バージョンへの移行
---

# アップグレードの概要と最新バージョンへの移行

GROWI の過去バージョンをご利用の皆様に向けて、現在ご利用中のバージョンから最新バージョン（2026年6月時点では v8.0.x）まで一気にアップグレードするために必要な作業を、本ページ 1 つに集約してご案内します。

最新系列では機能・パフォーマンス・セキュリティの改善が継続的に行われており、サポート対象の実行環境も最新化されています。皆様に安全に GROWI をご利用し続けていただくためにも、開発チームとしては最新バージョンへのアップデートを強く推奨しております。

作業は次の順番で進めます。

1. アップグレード前に実施すること
2. GROWI 最新バージョンへのアップグレード
3. アップグレード後に実施すること

::: danger
Revision（ページの更新履歴）データの重大な不具合があるため、**v6.1.0〜v7.0.15 にはアップグレードせず、必ず v7.4.0 以降へ直接**アップグレードしてください。
詳細は開発 Wiki の [v5.0.0〜v7.0.15 での Revision データマイグレーションバグ](https://dev.growi.org/69301054963f68dfcf2b7111) を参照してください。
:::

## 目次

[[toc]]

## 現在のバージョンを確認する

まず、現在起動中の GROWI のバージョンを確認してください。

以降の「1. アップグレード前に実施すること」「3. アップグレード後に実施すること」の各表は、現在ご利用中のバージョンの**列**を上から下まで確認し、○ が付いている行の対応を実施するという読み方をします。○ は「そのバージョンから最新バージョンへ上げるまでに対応が必要」であることを示します。

各行冒頭の `[必須]` `[該当時]` `[任意]` は対応の性質を表します。`[該当時]` は、記載された条件に該当する場合のみ対応が必要です。

各項目の詳細な手順は「4. 手順詳細」を参照してください。

アップグレード前には、必ず MongoDB のバックアップを取得してください。

参考：[MongoDB のバックアップ/リストア](https://docs.growi.org/ja/admin-guide/admin-cookbook/mongodb-backup.html)

[weseek/mongodb-awesome-backup](https://github.com/weseek/mongodb-awesome-backup) を利用する場合、バックアップは次のコマンドで取得できます。

```bash
docker run --rm \
  -e MONGODB_HOST=<Target MongoDB Host> \
  -e AWS_ACCESS_KEY_ID=<Your IAM Access Key ID> \
  -e AWS_SECRET_ACCESS_KEY=<Your IAM Secret Access Key> \
  -e S3_TARGET_BUCKET_URL=<Target S3 Bucket URL (s3://...)> \
  weseek/mongodb-awesome-backup
```

MongoDB が docker コンテナで動作している場合は `--link ${container}:mongo` オプションを、docker コンテナ以外かつ Docker ホストの OS が Linux の場合は `--network host` オプションを追加してください。リストア手順は上記の参考ページを参照してください（本ページには記載しません）。

## 1. アップグレード前に実施すること

GROWI 本体を最新バージョンへアップグレードする**前**に済ませておく必要がある対応を、分類ごとの表にまとめています。現在ご利用中のバージョンの列を確認し、○ が付いている行にすべて対応してください。

### ミドルウェア

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [Elasticsearch v7 系以前を利用している場合: v8 系または v9 系へ移行（インデックスは再生成を推奨）](#elasticsearch-を-v8-系または-v9-系へ移行する) | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [MongoDB を standalone 構成で運用している場合: レプリカセット構成へ移行（単一ノードのレプリカセットでも可）](#mongodb-をレプリカセット構成へ移行する) | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [必須] [MongoDB を v6.0 以上へアップグレード（メジャーバージョンを飛ばさず段階的に）](#mongodb-を-v6-0-以上へアップグレードする) | | | | ○ | ○ | ○ | ○ | ○ | ○ |
| [必須] [Node.js を v18 または v20 へアップグレード（公式 Docker イメージ利用時は対応不要）](#node-js-を-v18-または-v20-へアップグレードする) | | | | | ○ | ○ | ○ | ○ | ○ |

### インフラ・ストレージ

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [S3 互換オブジェクトストレージ利用時: IAM ポリシーに s3:AbortMultipartUpload を追加](#iam-ポリシーに-s3-abortmultipartupload-を追加する) | | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [公式 Docker イメージ利用時: Docker Hardened Images 化（シェル・パッケージマネージャーを含まない）による運用への影響を確認](#docker-hardened-images-化による運用への影響を確認する) | | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [AWS S3 利用時: バケットの ACL 無効化・パブリックアクセスブロックへの変更と、環境変数 S3_OBJECT_ACL の見直し](#aws-s3-バケットの-acl-設定と-s3-object-acl-を見直す) | | | | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [v3.3 系以前に構築し MongoDB GridFS を利用している場合: 旧形式の添付ファイル URL を /attachment/{attachmentId} 形式へ書き換え](#旧形式の添付ファイル-url-を書き換える) | | | | | | ○ | ○ | ○ | ○ |

### 環境変数・設定

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [OpenTelemetry の計装をカスタマイズしている場合: 計装切り替え用の環境変数が廃止されたため設定方法を確認](#opentelemetry-の計装カスタマイズを見直す) | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [アクティブユーザーが数百人を超える大規模環境: MongoDB コネクションプール上限の引き上げを検討](#mongodb-コネクションプールの上限を引き上げる) | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [LOCAL_STRATEGY_ENABLED / SAML_ENABLED 設定時: /login で認証方式の実際の有効・無効状態を確認](#local-strategy-enabled-と-saml-enabled-の実際の状態を確認する) | | | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [廃止された環境変数 FILE_UPLOAD_DISABLED / DISABLE_LINK_SHARING からの移行](#廃止された環境変数-file-upload-disabled-と-disable-link-sharing-から移行する) | | | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [任意] [OpenTelemetry によるテレメトリ送信が既定で有効になるため、送信可否・送信先を確認](#opentelemetry-のテレメトリ送信可否と送信先を確認する) | | | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [カスタム HTML Header 利用時: カスタム Noscript やカスタムスクリプトへ移行](#カスタム-html-header-から移行する) | | | | | | | | ○ | ○ |
| [該当時] [Twitter OAuth 2 認証利用時: 別の認証方式へ移行](#twitter-oauth-2-認証から別の認証方式へ移行する) | | | | | | | | ○ | ○ |
| [該当時] [nocdn 版イメージ利用時: 統合された公式イメージへ移行](#nocdn-版イメージから公式イメージへ移行する) | | | | | | | | ○ | ○ |

### 自前ビルド運用

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [ソースから自前でビルドしている場合: ビルドツールの変更（Lerna → Turborepo、yarn v1 → pnpm v9.4 以上）に対応](#自前ビルドのビルドツールの変更に対応する) | | | | ○ | ○ | ○ | ○ | ○ | ○ |

### 廃止機能への対応

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [HackMD 連携利用時: ビルトインエディタの同時多人数編集へ移行し、HackMD サーバーの縮退を検討](#hackmd-連携からビルトインエディタの同時多人数編集へ移行する) | | | | | ○ | ○ | ○ | ○ | ○ |
| [該当時] [Promster 連携で監視している場合: 監視構成を見直し](#promster-による監視構成を見直す) | | | | | ○ | ○ | ○ | ○ | ○ |

### 利用者への周知

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [Bootstrap v4 → v5 に伴い Markdown 中の HTML 記法が変わることを利用者へ周知](#bootstrap-v5-化に伴う-markdown-中の-html-を周知し、書き換える) | | | | | ○ | ○ | ○ | ○ | ○ |
| [必須] [WIP ページの導入・新規ページ作成導線の変更・全文検索の呼び出し方の変更を利用者へ周知](#wip-ページと-ui-変更を利用者へ周知する) | | | | | ○ | ○ | ○ | ○ | ○ |
| [該当時] [mdcont- プレフィクス付きアンカーリンクが使えなくなることを利用者へ周知](#mdcont-プレフィクス付きアンカーリンクを周知し、書き換える) | | | | | | | ○ | ○ | ○ |
| [該当時] [v6.0 の記法変更（Draw.io / PlantUML / CSV・TSV / 数式 / プレゼンテーションのページ区切り / 脚注インライン記法 / GROWI 独自ページリンク記法 / blockdiag）を利用者へ周知](#v6-0-の記法変更を周知し、既存ページを書き換える) | | | | | | | | ○ | ○ |
| [必須] [v5 の仕様変更（子孫ページを含む移動・リネーム・削除、URL のパーマリンク化、UI 変更）を利用者へ周知](#v5-の仕様変更を利用者へ周知する) | | | | | | | | | ○ |

## 2. GROWI 最新バージョンへのアップグレード

「1. アップグレード前に実施すること」の対応をすべて済ませ、MongoDB のバックアップを取得したうえで、GROWI 本体をアップグレードします。

現在ご利用中のバージョンに関わらず、中間のバージョンを経由する必要はありません。最新バージョン（v8.0.x）へ直接アップグレードしてください。

なお、ページ冒頭の警告のとおり、v6.1.0〜v7.0.15 を経由するアップグレードは行わないでください。

### docker-compose 運用でのアップグレード

[growi-docker-compose](https://github.com/growilabs/growi-docker-compose) で運用している場合は、次の手順で進めます。手順の詳細は [GROWI のアップグレード](/ja/admin-guide/getting-started/docker-compose.html#growi-のアップグレード) を参照してください。

`growi-docker-compose` をダウンロードしたフォルダで、コンテナを停止します。

```text
cd growi
docker-compose stop
```

既存の Docker コンテナと Docker イメージを削除します。イメージのタグ（下記例の `growilabs/growi:7`）は利用中のバージョンに合わせて読み替えてください。

```text
docker-compose rm app mongo elasticsearch
docker rmi growilabs/growi:7
```

最新版を pull し、Docker イメージを作成した後、コンテナを起動します。

```text
git pull
docker-compose build
docker-compose up
```

### ソースからのビルド運用でのアップグレード

ソースを自前で取得しビルドして運用している場合は、次の流れで進めます。手順の具体例は [Ubuntu Server の GROWI 節](/ja/admin-guide/getting-started/ubuntu-server.html#growi) を参照してください（AlmaLinux OS・CentOS でも流れは同様です）。

GROWI サーバーのプロセスを停止した後、リポジトリで最新の安定版タグを確認し、そのタグへ切り替えます。

```bash
$ git tag --sort=-version:refname | head -10
...
v7.2.0
v7.2.1
v7.2.3
v7.2.4
...

# RC がついていない最新版を利用（バージョンは適宜読み替え）
$ git checkout -b v7.2.4 refs/tags/v7.2.4
```

依存関係を更新し、ビルドし直します。

```bash
$ pnpm install
$ pnpm run app:build
```

`MONGO_URI` と `ELASTICSEARCH_URI` を環境に合わせて指定し、起動を確認します。

```bash
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
npm run app:server
```

systemd による自動起動の設定は [systemd による自動起動](/ja/admin-guide/admin-cookbook/launch-with-systemd.html) を参照してください。

### 全文検索インデックスの再構築

GROWI 本体のアップグレード後は、管理画面の **Elasticsearch 管理**ページ（`/admin/search`。サイドバーの表示名。以前は「全文検索管理」）でインデックスを再構築してください。「ページデータ管理」セクションの［ページデータのインデックスのリビルド］ボタンで実行できます。インデックスが破損表示になっている場合は正規化を利用できます。監査ログ機能を有効にしている場合は、同じページの「監査ログのインデックス管理」セクションで監査ログ用インデックスも管理できます。手順の詳細は [全文検索のセットアップと監査ログのインデックス管理](/ja/admin-guide/management-cookbook/setup-search-system.html) を参照してください。

## 3. アップグレード後に実施すること

GROWI 本体のアップグレード**後**に対応が必要な項目を、分類ごとの表にまとめています。現在ご利用中のバージョンの列を確認し、○ が付いている行にすべて対応してください（列の意味は「1. アップグレード前に実施すること」と同じです）。

### 設定の再設定

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [AI 連携機能を利用していた場合: 旧 AI 連携設定が廃止されたため、GROWI AI Agent の設定方法で再設定](#growi-ai-agent-の設定をやり直す) | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [LOCAL_STRATEGY_ENABLED / SAML_ENABLED 設定時: /login で認証方式の有効・無効状態が期待どおりか再確認](#local-strategy-enabled-と-saml-enabled-の実際の状態を確認する) | | | ○ | ○ | ○ | ○ | ○ | ○ | ○ |
| [該当時] [XSS 対策設定を独自にカスタマイズしていた場合: 起動時に既定へリセットされるため再設定（許可属性の記述形式が JSON に変更）](#xss-対策設定を再設定する) | | | | | | | | ○ | ○ |

### データ・ファイルの移行

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [FILE_UPLOAD=local 利用時: 添付ファイルを新しい保存先ディレクトリへ移動](#file-upload-local-の添付ファイルを新しい保存先へ移動する) | | | | | | | ○ | ○ | ○ |
| [該当時] [v4.5 以前に作成され未変換のページが残っている場合: v5 互換形式へ変換（管理ページから公開ページを一括変換、旧形式のプライベートページは各ユーザーが変換）](#未変換のページを-v5-互換形式へ変換する) | | | | | | | | ○ | ○ |

### ページ内容の書き換え

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [該当時] [Bootstrap v4 → v5 に伴う Markdown 中の HTML の書き換え](#bootstrap-v5-化に伴う-markdown-中の-html-を周知し、書き換える) | | | | | ○ | ○ | ○ | ○ | ○ |
| [該当時] [mdcont- プレフィクス付きアンカーリンクの書き換え](#mdcont-プレフィクス付きアンカーリンクを周知し、書き換える) | | | | | | | ○ | ○ | ○ |
| [該当時] [v6.0 の記法変更に該当する既存ページの書き換え](#v6-0-の記法変更を周知し、既存ページを書き換える) | | | | | | | | ○ | ○ |

### 新機能のセットアップ

| 対応内容 | v7.5.x | v7.2.x〜v7.4.x | v7.1.x | v7.0.x | v6.3.x | v6.1.x〜v6.2.x | v6.0.x | v5.x | 〜v4.x |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| [任意] [GROWI Vault を利用する場合: 専用コンテナの追加と有効化](#growi-vault-をセットアップする) | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ | ○ |

## 4. 手順詳細

「1. アップグレード前に実施すること」「3. アップグレード後に実施すること」の各表からリンクで遷移してくる、対応ごとの詳細手順です。各項目の「対応タイミング」に、いつ実施すべきかを明記しています。

### Elasticsearch を v8 系または v9 系へ移行する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: Elasticsearch v7 系以前を利用している場合
- **参考**: [v5.0.x](/ja/admin-guide/upgrading/50x.html)、[v6.1.x](/ja/admin-guide/upgrading/61x.html#管理者向け)、[v8.0.x](/ja/admin-guide/upgrading/80x.html#管理者向け)

1. 利用している Elasticsearch のメジャーバージョンを確認します。

    | GROWI | <= v7.3.x | v8.0.x 以降 |
    | :---: | :---: | :---: |
    | 対応 Elasticsearch | 7.x, 8.x, 9.x | 8.x, 9.x |

1. v7 系以前の場合は、v8 系または v9 系の Elasticsearch を新たに用意します。既存のインデックスは引き継がず、新しいインデックスを作成することを推奨します。手順は次のとおりです（docker を利用している場合）。
    1. 利用していた Elasticsearch のコンテナを削除する
    1. Elasticsearch コンテナが使っていた docker volume を削除する
    1. 新バージョンの Elasticsearch コンテナを起動する（GROWI 用のインデックスデータが存在しないことを確認）
    1. GROWI を起動する（起動後、Elasticsearch 管理ページでインデックスを再構築できます）

    オンプレミスの場合は、旧バージョンをアンインストールしたうえで新バージョンを新規インストールし、同様に GROWI 用のインデックスが存在しないことを確認してから GROWI を起動してください。
1. 環境変数 `ELASTICSEARCH_VERSION` に、接続先のメジャーバージョン（`8` または `9`。既定値は `9`）を設定します。
1. Elasticsearch v7 系のまま GROWI v8.0 以降を起動すると、全文検索の初期化に失敗し検索が利用できなくなります（サーバープロセス自体は起動しますが、ログにエラーが出力されます）。必ずアップグレード前に移行してください。

### MongoDB をレプリカセット構成へ移行する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: MongoDB を standalone 構成で運用している場合（GROWI v8.0 以降で必須）
- **参考**: [v8.0.x](/ja/admin-guide/upgrading/80x.html#管理者向け)

1. 現在の MongoDB の構成が standalone か、レプリカセットかを確認します。
1. GROWI Vault が MongoDB の change stream を利用するため、v8.0 以降ではレプリカセット構成が必須です。change stream はレプリカセット構成でのみ利用できます。
1. standalone 構成の場合は、レプリカセット構成へ移行します。単一ノードのレプリカセットでも構いません。
1. [growi-docker-compose](https://github.com/growilabs/growi-docker-compose) を利用している場合は、同リポジトリの更新内容を参照して移行してください。

### MongoDB を v6.0 以上へアップグレードする

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: MongoDB v5.0 以前を利用している場合
- **参考**: [v7.1.x](/ja/admin-guide/upgrading/71x.html#管理者向け)、[MongoDB のアップグレード](/ja/admin-guide/admin-cookbook/upgrade-mongodb.html)

1. 現在の MongoDB のバージョンを確認します。
1. v6.0 未満の場合は、メジャーバージョンを 1 つずつ順番に上げてアップグレードします（例: v4.4 から v6.0 に上げる場合は、先に v5.0 を経由します）。各バージョン間のアップグレード手順は MongoDB 公式のリリースノート（[v3.6](https://docs.mongodb.com/manual/release-notes/3.6-upgrade-standalone/index.html)・[v4.0](https://docs.mongodb.com/manual/release-notes/4.0-upgrade-standalone/index.html)・[v4.2](https://docs.mongodb.com/manual/release-notes/4.2-upgrade-standalone/index.html)・[v4.4](https://docs.mongodb.com/manual/release-notes/4.4-upgrade-standalone/index.html)・[v5.0](https://docs.mongodb.com/manual/release-notes/5.0-upgrade-standalone/index.html)・[v6.0](https://docs.mongodb.com/manual/release-notes/6.0-upgrade-standalone/index.html)）を参照してください。
1. docker で運用している場合、1 メジャーバージョン分のアップグレード（例: v5.0 から v6.0）は次の手順で行います。実際の MongoDB コンテナ名を `MONGO_CONTAINER_NAME` に設定してください。

    ```bash
    export MONGO_VERSION=5.0
    export MONGO_CONTAINER_NAME=mymongodb
    docker exec $MONGO_CONTAINER_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

    上記実行後、MongoDB v5.0 を停止し、v6.0 を起動します。

1. docker-compose で運用している場合は、次の手順で行います。実際の MongoDB サービス名を `MONGO_SERVICE_NAME` に設定してください。

    ```bash
    export MONGO_VERSION=5.0
    export MONGO_SERVICE_NAME=mymongodb
    docker-compose exec $MONGO_SERVICE_NAME mongo --eval 'db.adminCommand( { setFeatureCompatibilityVersion: "'$MONGO_VERSION'" } )'
    ```

    上記実行後、MongoDB v5.0 を停止し、yml 内の MongoDB の指定バージョンを変更したうえで v6.0 を起動します。

1. 目的のバージョンに達するまで、1 メジャーバージョンずつ上記を繰り返します。MongoDB v4.4 および v5.0 のサポートは終了しているため、最終的に v6.0 以上にしてください。

### Node.js を v18 または v20 へアップグレードする

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: v6.3.x 以前を利用している場合。公式 Docker イメージ利用時は対応不要です。
- **参考**: [v7.0.x](/ja/admin-guide/upgrading/70x.html#管理者向け)、[v6.1.x](/ja/admin-guide/upgrading/61x.html#管理者向け)

1. 現在の Node.js のバージョンを確認します。

    ```bash
    $ nodejs -v
    ```

1. v18 または v20 でない場合は、Node.js を v18 または v20 にアップグレードします。NodeSource のリポジトリを利用する場合の手順は次のとおりです（`20.x` の部分は導入したいバージョンに読み替えてください）。

    ```bash
    $ cd ~
    $ curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
    $ sudo bash nodesource_setup.sh
    $ sudo apt -y install nodejs
    ```

1. 公式 Docker イメージを利用している場合、この対応は不要です。

### IAM ポリシーに s3:AbortMultipartUpload を追加する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: S3 互換オブジェクトストレージを利用している場合
- **参考**: [v7.5.x](/ja/admin-guide/upgrading/75x.html#管理者向け)

1. v7.5.x 以降、S3 へのアップロード方式が単一の PutObject からマルチパートアップロードに変わります（5MB 以下のファイルは PutObject にフォールバックします）。
1. IAM ポリシーに `s3:AbortMultipartUpload` 権限を追加します。
1. `CreateMultipartUpload`・`CompleteMultipartUpload`・`UploadPart` は IAM 上 `s3:PutObject` に含まれるため、追加が必要なのは `s3:AbortMultipartUpload` のみです。

### Docker Hardened Images 化による運用への影響を確認する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: 公式 Docker イメージを利用している場合
- **参考**: [v7.5.x](/ja/admin-guide/upgrading/75x.html#管理者向け)

1. v7.5.x 以降、公式 Docker イメージのベースイメージが [Docker Hardened Images (DHI)](https://www.docker.com/products/hardened-images/) に変わります。DHI はシェル（`sh`、`bash`）やパッケージマネージャーを含みません。
1. `docker exec` でコンテナ内部に入って対話的に操作する運用をしていないかを確認します。
1. 公式イメージをベースに独自のカスタマイズ（追加パッケージのインストール、独自のエントリポイントなど）をしている場合は、アップグレード前に DHI 上で動作するかを確認します。

### AWS S3 バケットの ACL 設定と S3_OBJECT_ACL を見直す

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: AWS S3 を添付ファイルの保存先に利用している場合
- **参考**: [v7.1.x](/ja/admin-guide/upgrading/71x.html#管理者向け)

1. v7.1.x 以降、ファイルアップロード時のオブジェクト ACL 設定が次のように変わります。

    | バージョン | ファイルアップロード時の挙動 |
    | :--- | :--- |
    | v7.0.x 以前 | オブジェクト ACL 設定 `ACL: 'public-read'` を付加するリクエスト |
    | v7.1.x 以降 | オブジェクト ACL を設定しないリクエスト |

1. AWS 公式の [S3 のベストプラクティス](https://docs.aws.amazon.com/ja_jp/AmazonS3/latest/userguide/security-best-practices.html) に沿って、S3 バケットの ACL を無効化し、パブリックアクセスをブロックする設定に変更します。
1. 環境変数 `S3_OBJECT_ACL`（既定値 `public-read`）に `public-read` を設定している場合は、`private` に変更するか設定を削除します。
1. v3.3.0 以前にアップロードされ、次のようにバケット URL を直接参照する形式の添付ファイルは、この変更後にアクセスできなくなる可能性があるため、事前に影響を確認してください。

    ```text
    https://${AWS bucket name}.s3.amazonaws.com/attachment/5d091f611fe336003eec5bfd/foobar.jpg
    ```

1. S3 バケットの設定を変えずこれまで通りの運用を続けたい場合（非推奨）は、環境変数 `S3_OBJECT_ACL=public-read` を明示的に設定してください。

### 旧形式の添付ファイル URL を書き換える

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: v3.3 系以前に構築し、MongoDB GridFS で添付ファイルを管理している場合
- **参考**: [v6.3.x](/ja/admin-guide/upgrading/63x.html)

1. v6.3.x で、MongoDB GridFS 用の旧エンドポイント（`/attachment/{pageID}/{fileName}`）が廃止されます。
1. Markdown 中にこの形式の URL を含むページがないかを確認します。
1. 該当する URL を `/attachment/{attachmentId}` 形式へ書き換えるか、ファイルをアップロードし直します。

### OpenTelemetry の計装カスタマイズを見直す

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: OpenTelemetry の自動計装の範囲を環境変数で切り替えている場合
- **参考**: [v8.0.x](/ja/admin-guide/upgrading/80x.html#管理者向け)

1. GROWI v8.0 以降、OpenTelemetry の計装は GROWI が実際に使用する必要最小限のセットに固定されます。
1. 従来、自動計装の範囲を環境変数で切り替えていた場合、その環境変数は廃止されます。
1. 標準的な利用では追加の対応は不要ですが、計装をカスタマイズしていた場合は、アップグレード後に設定方法が変わっている点に注意してください。

### MongoDB コネクションプールの上限を引き上げる

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: アクティブユーザー数の多い（おおむね 500 人超の）大規模環境の場合
- **参考**: [v8.0.x](/ja/admin-guide/upgrading/80x.html#管理者向け)、[環境変数](/ja/admin-guide/admin-cookbook/env-vars.html)

1. GROWI v8.0 以降、MongoDB コネクションプールの既定の上限値が、従来より小さい値に変更されます。
1. アクティブユーザー数や総ページ数、アクセス頻度が高い大規模環境では、既定値のままだと不足する場合があります。
1. 該当する場合は、次の環境変数で上限・下限を引き上げます。

    | 環境変数名 | 説明 | 既定値 |
    | --- | --- | --- |
    | `MONGO_MAX_POOL_SIZE` | MongoDB コネクションプールの最大接続数 | `15` |
    | `MONGO_MIN_POOL_SIZE` | MongoDB コネクションプールの最小接続数 | `2` |

### LOCAL_STRATEGY_ENABLED と SAML_ENABLED の実際の状態を確認する

- **対応タイミング**: アップグレード前（設定確認）とアップグレード後（再確認）
- **対応が必要な条件**: 環境変数 `LOCAL_STRATEGY_ENABLED` または `SAML_ENABLED` を設定している場合
- **参考**: [v7.2.x](/ja/admin-guide/upgrading/72x.html#管理者向け)

アップグレード前:

1. 環境変数 `LOCAL_STRATEGY_ENABLED` と `SAML_ENABLED` を設定しているかを確認します。どちらも設定していない場合、この対応は不要です。
1. 設定している場合は、プライベートブラウザ等で `/login` にアクセスし、ID/Pass 認証・SAML 認証の有効・無効状態が期待どおりかを確認します。
1. 一致していない場合は、以下のいずれかの措置を執ります。
    1. **DB の値を優先させる（推奨）**: 管理画面の「セキュリティ設定」ページで ON/OFF を切り替えて DB に正しい状態を保存し、環境変数 `LOCAL_STRATEGY_ENABLED` および `SAML_ENABLED` を削除してサーバーを再起動します。
    1. **環境変数の値を優先させる**: データベースの `configs` collection から `key: 'security:passport-local:isEnabled'` のドキュメントを削除します。`key: 'security:passport-saml:isEnabled'` のドキュメントも同様に削除します。その後サーバーを再起動します。

アップグレード後:

1. 再度 `/login` にアクセスし、ID/Pass 認証・SAML 認証の有効・無効状態が期待どおりかを確認します。

### 廃止された環境変数 FILE_UPLOAD_DISABLED と DISABLE_LINK_SHARING から移行する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: 環境変数 `FILE_UPLOAD_DISABLED` または `DISABLE_LINK_SHARING` を設定している場合
- **参考**: [v7.2.x](/ja/admin-guide/upgrading/72x.html#管理者向け)

1. 環境変数 `FILE_UPLOAD_DISABLED`（ファイルアップロード機能の無効化）は廃止されました。代わりに、環境変数 `FILE_UPLOAD` に `none` を設定してください。
1. 環境変数 `DISABLE_LINK_SHARING`（シェアリンク機能の無効化）は廃止されました。代わりに、管理画面の「セキュリティ設定」からシェアリンク機能を無効化してください。

### OpenTelemetry のテレメトリ送信可否と送信先を確認する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: v7.1.x 以前から v7.2.x 以降へアップグレードする場合（全員が対象）
- **参考**: [v7.2.x](/ja/admin-guide/upgrading/72x.html#管理者向け)、[テレメトリー](/ja/admin-guide/admin-cookbook/telemetry.html)、[環境変数](/ja/admin-guide/admin-cookbook/env-vars.html)

1. GROWI v7.2.9 以降、OpenTelemetry によるテレメトリ送信は既定で有効です。関連する環境変数は次のとおりです。

    | 環境変数名 | 説明 | 既定値 |
    | --- | --- | --- |
    | `OPENTELEMETRY_ENABLED` | OpenTelemetry によるデータ送信を有効にします | `true` |
    | `OTEL_EXPORTER_OTLP_ENDPOINT` | データ送信先エンドポイント | `https://telemetry.growi.org` |
    | `OPENTELEMETRY_ANONYMIZE_IN_BEST_EFFORT` | 追加の匿名化処理を行います（有効時はサーバーパフォーマンスにわずかに影響する可能性があります） | `false` |
    | `OPENTELEMETRY_IS_APP_SITE_URL_HASHED` | 送信データ中のサイト URL をハッシュ化します | `false` |

1. 送信を望まない場合は、環境変数 `OPENTELEMETRY_ENABLED` に `false` を設定します。
1. 送信先を変更したい場合は、環境変数 `OTEL_EXPORTER_OTLP_ENDPOINT` を設定します。
1. 送信内容を確認したい場合は、環境変数 `OTEL_LOG_LEVEL` を設定します。
1. 収集される内容の詳細は [テレメトリー](/ja/admin-guide/admin-cookbook/telemetry.html) を参照してください。

### カスタム HTML Header から移行する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: カスタム HTML Header を利用している場合
- **参考**: [v6.0.x](/ja/admin-guide/upgrading/60x.html#管理者向け)

1. v6.0 以降、head タグに自由に文字列・タグを挿入できる「カスタム HTML Header」は廃止されます。
1. 代わりに追加された「カスタム Noscript」、またはカスタムスクリプトへ移行します。
1. 例えば `link` タグを追加したい場合は、次のようなカスタムスクリプトで代替できます。

    ```javascript
    var link = document.createElement('link');
    link.id = 'mylink';
    link.rel = 'stylesheet';
    link.href = 'https://example.com/mystyles.css';
    document.head.appendChild(link);
    ```

### Twitter OAuth 2 認証から別の認証方式へ移行する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: Twitter OAuth 2 認証を利用している場合
- **参考**: [v6.0.x](/ja/admin-guide/upgrading/60x.html#管理者向け)

1. v6.0 以降、Twitter を使った認証機構は廃止されます。
1. アップグレード前に、ID/Pass 認証や SAML 認証など、別の認証方式へ切り替えてください。

### nocdn 版イメージから公式イメージへ移行する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: nocdn 版の Docker イメージを利用している場合
- **参考**: [v6.0.x](/ja/admin-guide/upgrading/60x.html#管理者向け)

1. v6.0 以降、default 版と nocdn 版に分かれていた公式コンテナイメージが 1 本化されます。
1. nocdn 版を利用している場合は、統合された公式イメージへ移行してください。

### 自前ビルドのビルドツールの変更に対応する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: ソースから自前でビルドしている場合。公式 Docker イメージ利用時は対応不要です。
- **参考**: [v6.1.x](/ja/admin-guide/upgrading/61x.html#管理者向け)、[v7.1.x](/ja/admin-guide/upgrading/71x.html#管理者向け)

1. v7.1 以降、パッケージマネージャー・タスクランナーが yarn (v1) から pnpm に変わります。[pnpm 公式サイト](https://pnpm.io/installation) を参考に、v9.4 以上をインストールしてください。

    ```bash
    $ curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sudo sh -
    $ sudo pnpm setup
    ```

1. v6.1 以降、ビルドツールが Lerna から [Turborepo](https://turbo.build/repo) に変わります。最新バージョンへ一気に上げる場合は、pnpm 導入後に次のコマンドでグローバルインストールしてください。

    ```bash
    $ sudo pnpm add turbo --global
    ```

1. インストールしたバージョンを確認します。

    ```bash
    $ nodejs -v
    $ pnpm -v
    $ turbo --version
    ```

1. yarn コマンドで npm script を実行していた箇所は、`pnpm run` または `npm run` に書き換えてください。

### HackMD 連携からビルトインエディタの同時多人数編集へ移行する

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: HackMD(CodiMD) 連携を利用している場合
- **参考**: [v7.0.x](/ja/admin-guide/upgrading/70x.html#管理者向け)、[HackMD(CodiMD)連携](/ja/admin-guide/admin-cookbook/integrate-with-hackmd.html)

1. v7.0 以降、HackMD と連携して同時多人数編集する機能は廃止されます。
1. 代わりに、ビルトインエディタでの同時多人数編集の機能に移行します。利用者側の追加設定は不要です。
1. 運用していた HackMD(CodiMD) サーバーは、縮退（停止・撤去）を検討してください。

### Promster による監視構成を見直す

- **対応タイミング**: アップグレード前
- **対応が必要な条件**: Promster 連携で監視している場合
- **参考**: [v7.0.x](/ja/admin-guide/upgrading/70x.html#管理者向け)

1. v7.0 以降、Promster と連携する機能は廃止されます。
1. Promster 経由で GROWI を監視している場合は、アップグレード前に監視構成を見直してください。

### Bootstrap v5 化に伴う Markdown 中の HTML を周知し、書き換える

- **対応タイミング**: アップグレード前（周知）とアップグレード後（書き換え）
- **対応が必要な条件**: v6.3.x 以前を利用している場合
- **参考**: [v7.0.x](/ja/admin-guide/upgrading/70x.html#管理者向け)

アップグレード前:

1. v7.0 で、フロントエンドフレームワークが Bootstrap v4.6 から v5.3 へアップグレードされることを利用者へ周知します。
1. Markdown 文書中に Bootstrap の記法で記述された HTML タグがある場合は影響を受けます。Bootstrap 公式の [v5 で変更された内容](https://getbootstrap.jp/docs/5.3/migration/) を確認してください。

アップグレード後:

1. 該当する HTML タグを含む既存ページを洗い出し、Bootstrap v5 の記法へ書き換えます。マークダウン文書を一括で新しい記法に書き換えるためのスクリプトが次のディスカッションで提供されています。

    <https://github.com/growilabs/growi/discussions/7180>

### WIP ページと UI 変更を利用者へ周知する

- **対応タイミング**: アップグレード前（周知）
- **対応が必要な条件**: v6.3.x 以前を利用している場合
- **参考**: [v7.0.x](/ja/admin-guide/upgrading/70x.html#利用者向け)

1. v7.0 以降、編集画面を表示した時点で「無題のページ-1」のような WIP (Work In Progress) ページとして保存されるようになります（v6 までは保存操作をするまでページデータ自体が作成されませんでした）。
1. 新規作成された WIP ページは、作成から一定期間（既定 48 時間。環境変数 `WIP_PAGE_EXPIRATION_SECONDS` で変更可能）が経過すると自動削除されます。ページツリーや新規ページ作成モーダルから作成したページも対象です。ただし、新規作成後に一度でもページを更新（WIP としての保存・通常の保存を問わず）した場合は自動削除の対象になりません。
1. 新規ページ作成ボタンの位置が、画面上部のナビバーから左上のサイドバー内へ移ります。
1. 全文検索機能を呼び出す場所・使い方が変わります。
1. これらの変更を、アップグレード前に利用者へ周知してください。

### mdcont- プレフィクス付きアンカーリンクを周知し、書き換える

- **対応タイミング**: アップグレード前（周知）とアップグレード後（書き換え）
- **対応が必要な条件**: v6.0.x 以前を利用している場合
- **参考**: [v6.1.x](/ja/admin-guide/upgrading/61x.html#利用者向け)

アップグレード前:

1. v6.1.0 以降、アンカーリンクに自動付与されていた `mdcont-` プレフィクスが廃止されることを利用者へ周知します。例えば、`/Sandbox` の `Headers` セクションの `id` はこれまで `#mdcont-headers` でしたが、`mdcont-` プレフィクスが付かなくなります。
1. GROWI が生成する目次のリンクは影響を受けませんが、`mdcont-` を含むリンクをページ内やページ外から参照している場合は、アップグレード後にアンカーへジャンプしなくなります。

アップグレード後:

1. `mdcont-` を含むリンクを記述しているページを洗い出し、プレフィクスなしの記法へ書き換えます。マークダウン文書を一括で新しい記法に書き換えるためのスクリプトが次のディスカッションで提供されています。

    <https://github.com/growilabs/growi/discussions/7180>

### v6.0 の記法変更を周知し、既存ページを書き換える

- **対応タイミング**: アップグレード前（周知）とアップグレード後（書き換え）
- **対応が必要な条件**: v5.x 以前を利用している場合
- **参考**: [v6.0.x](/ja/admin-guide/upgrading/60x.html#利用者向け)

アップグレード前:

1. 次の記法が変更されることを利用者へ周知します: Draw.io、PlantUML、CSV・TSV によるテーブル描画、数式（MathJax から KaTeX へ）、プレゼンテーションのページ区切り、脚注のインライン記法（廃止）、GROWI 独自のページリンク記法（廃止）、blockdiag（未実装）。

アップグレード後:

既存ページのうち、次の記法を使っているページを洗い出し、新しい記法へ書き換えます。以前の記法で保存されたページの内容は、GROWI 本体をアップグレードしても自動では変更されません。

#### Draw.io (Diagrams.net) 記法

図データ本体（`drawio` コードブロックの中身）はそのままで、外側の区切り記法だけが変わります。

Before:

~~~ drawio
::: drawio
（図のデータ）
:::
~~~

After:

~~~ drawio
``` drawio
（図のデータ）
```
~~~

#### PlantUML 記法

Before:

~~~ plantuml
@startuml
class RemarkPlugin {
    + transform(syntaxTree: AST): AST
}
@enduml
~~~

After（`@startuml`/`@enduml` は省略可）:

~~~ plantuml
``` plantuml
class RemarkPlugin {
    + transform(syntaxTree: AST): AST
}
```
~~~

#### CSV, TSV によるテーブル描画記法

Before:

~~~
::: tsv
Content Cell  Content Cell
Content Cell  Content Cell
:::
~~~

After:

~~~
``` tsv
Content Cell  Content Cell
Content Cell  Content Cell
```
~~~

#### 数式描画ライブラリ（MathJax → KaTeX）

`$` を特殊文字ではなくそのまま使いたい場合は、`\$` のようにエスケープしてください。数式については、一括で書き換えるための手法は提供されていません。

#### プレゼンテーションのページ区切り

ページ区切り文字列は「水平方向の罫線 `---`」のみになりました。プレゼンテーションのページ区切りについても、一括で書き換えるための手法は提供されていません。

#### 脚注のインライン記法（廃止）

次の記法は廃止されました。代替手段への移行を検討してください。

```markdown
文章内に [^インラインで注釈文章を追加] します
```

#### GROWI 独自記法のページリンク（廃止）

`[/Sandbox/Math]` のような記法は廃止されました。代わりに次のいずれかの記法を利用してください。

- `[[/Sandbox/Math]]`
- `[[Label>/Sandbox/Math]]`
- `[Label](/Sandbox/Math)`

#### blockdiag（未実装）

blockdiag 記法での図表描画は実装されていません。

Draw.io・PlantUML・CSV/TSV・GROWI 独自ページリンク記法については、マークダウン文書を一括で新しい記法に書き換えるためのスクリプトが次のディスカッションで提供されています。

<https://github.com/growilabs/growi/discussions/7180>

### v5 の仕様変更を利用者へ周知する

- **対応タイミング**: アップグレード前（周知）
- **対応が必要な条件**: v4.x 以前を利用している場合
- **参考**: [v5.0.x](/ja/admin-guide/upgrading/50x.html)

1. v5.0 では、ページ閲覧・遷移時の URL がページパスからパーマリンクへ変わります。
1. 親ページを移動・リネーム・削除すると、閲覧権限の有無に関わらず配下ページも影響を受けるよう変わります（「リンクを知っている人のみ」設定のページを除きます）。
1. サイドバーにページツリーが追加されます。
1. 目次上部にあった更新履歴・添付データ・共有リンク管理などのアイコンが、三点リーダードロップダウン内に移動します。
1. 利用者向けの周知文の例は、[v5.0.x へのアップグレード](/ja/admin-guide/upgrading/50x.html) の「利用者への周知内容例」に掲載されています。以下のテキストをコピーして周知に利用できます。

    ```text
    利用中の GROWI を v5.0.0 にアップグレードしました。利用者向けにいくつか変更点があるので、各自チェックをしてください。

    公式アップグレードガイド
    https://docs.growi.org/ja/admin-guide/upgrading/50x.html


    アクセスURIが変更されました
    ---------------------------

    - 新しいバージョンではブラウザのアドレスバーに表示される URL が、ページパスの URL ではなく、パーマリンクになります
        - Before: http://example.com/Page1/Page1-1
        - After: http://example.com/61d04d3aecc2ec9f6cce3d3e


    移動・リネーム・削除の挙動が変わりました
    ----------------------------------------

    - 新しいバージョンでは親ページを移動・リネーム・削除をすると、配下のページも全て影響を受けます
        - ただし「自分のみ」や「特定のグループのみ」設定にしてあるプライベートページは旧形式のままの状態なので、今は影響を受けない状態になっています
        - 各自、管理可能なプライベートページを http://example.com/_private-legacy-pages から新しい形式に変換してください
        - 変換すると、**移動・リネーム・削除については親ページの影響を受けることに注意してください**


    ページツリーが追加されました
    ----------------------------

    - サイドバーから利用可能です


    UIが変わりました
    ----------------

    - 目次上部に配置されていた以下のアイコンが、三点リーダードロップダウン内に移動しました。
        - ページリスト(子孫のページ一覧表示)
        - タイムライン(子孫のページのコンテンツの一覧表示)
        - 更新履歴
        - 添付データ
        - 共有リンク管理
    - また、以下のリンクボタンの位置が変わりました
        - ページ閲覧ユーザー一覧を表示するためのあしあとアイコン
        - コメントリストにスクロールするためのリンクボタン
    ```

### GROWI AI Agent の設定をやり直す

- **対応タイミング**: アップグレード後
- **対応が必要な条件**: 旧 AI 連携機能（ナレッジアシスタントの作成機能・エディターアシスタント）を利用していた場合
- **参考**: [v8.0.x](/ja/admin-guide/upgrading/80x.html#管理者向け)、[GROWI AI Agent のセットアップと管理](/ja/admin-guide/management-cookbook/growi-ai-agent.html)

1. GROWI v8.0 で旧 AI 連携設定は廃止され、自動移行は行われません。旧バージョンの設定のままでは、アップグレード後に動作しません。
1. 管理画面の「AI 設定」（`/admin/ai`）を開き、「AI 機能を有効にする」をオンにします。ただし、有効にしただけでは動作しません。
1. 利用する LLM プロバイダ（OpenAI・Anthropic・Google・Azure OpenAI から選択可能。複数同時に有効化可）のタブで「このプロバイダーを有効にする」をオンにし、API キーを入力します。API キーは書き込み専用で、保存後は「（設定済み）」と表示されます（空欄のまま保存すると既存のキーが保持されます）。タブには設定状態を示すドットが表示されます（緑 = 利用可能、灰色 = 無効、黄色 = 設定未完了）。Azure OpenAI を利用する場合は、API キーに加えてエンドポイントの設定も必要です。
1. 各プロバイダのタブ内「Models」でモデルを登録します（利用可能なプロバイダに 1 つ以上のモデル登録が必要です）。登録したモデルの中から「デフォルトモデル」を選びます。
1. 画面下部の「更新」ボタンで設定を保存します。サーバーの再起動は不要です。
1. 詳しい設定手順は [GROWI AI Agent のセットアップと管理](/ja/admin-guide/management-cookbook/growi-ai-agent.html) を参照してください。

### XSS 対策設定を再設定する

- **対応タイミング**: アップグレード後
- **対応が必要な条件**: XSS 対策設定でカスタムホワイトリストを独自に設定している場合
- **参考**: [v6.0.x](/ja/admin-guide/upgrading/60x.html#管理者向け)、[マークダウン設定](/ja/admin-guide/management-cookbook/markdown.html#xss-cross-site-scripting-対策設定)

1. v6.0 以降、起動時に XSS 対策設定は「おすすめ設定」を選択した状態にリセットされ、過去の設定は引き継がれません。
1. 「全てのタグを削除」モードは廃止されているため、選択できません。
1. カスタムホワイトリストを利用していた場合は、管理画面のマークダウン設定（`/admin/markdown`）から再設定します。入力形式は次のとおりです。
    - **タグ名**: カンマ区切りのタグ名のリスト
    - **タグ属性**: JSON Object の string 表現。キーにタグ名、値には許可したいタグ属性の JSON Array の string 表現を指定します。`"*"` をキーにすると全タグに対して許可するタグ属性を指定できます
    - 空欄にすると、全ての HTML タグおよびタグ属性が無効化されます
1. **GROWI v6.0.0〜v7.0.11 にはカスタムホワイトリストのバグがあります。** 入力した値は正常に反映されません。v7.0.10 以降へのアップグレードでこの問題が顕在化し、マークダウン中の HTML タグを正常にレンダリングできなくなる症状が発現します。該当する場合は、次のいずれかで対処してください。
    - おすすめ設定を利用する
    - v7.0.12 以降にアップグレードしたうえでカスタムホワイトリストを選択し、タグ名・タグ属性ともにおすすめ設定の値をインポートして、それをベースに設定を変更する
1. 詳細は [マークダウン設定](/ja/admin-guide/management-cookbook/markdown.html#xss-cross-site-scripting-対策設定) を参照してください。

### FILE_UPLOAD=local の添付ファイルを新しい保存先へ移動する

- **対応タイミング**: アップグレード後
- **対応が必要な条件**: 環境変数 `FILE_UPLOAD=local`（ローカルファイルシステムへの保存）を利用している場合
- **参考**: [v6.1.x](/ja/admin-guide/upgrading/61x.html#管理者向け)

1. v6.1 で `app` パッケージの場所が変わったことにより、ファイルの保存先が次のように変わります。

    | Before | | After |
    | :-: | :-: | :-: |
    | `/opt/growi/packages/app/public` | -> | `/opt/growi/apps/app/public` |

1. アップグレード後、既存のファイルを新しい保存先へ移動してください。参考ディスカッション: <https://github.com/growilabs/growi/discussions/6086>

### 未変換のページを v5 互換形式へ変換する

- **対応タイミング**: アップグレード後
- **対応が必要な条件**: v4.5 以前に作成され、未変換のページが残っている場合
- **参考**: [v5.0.x](/ja/admin-guide/upgrading/50x.html)

1. v4.5 までに作成されたページは、v5.0 以降でも新しい v5 互換形式には自動変換されません。
1. 公開（パブリック）ページは、管理ページの操作で一括変換できます。
1. プライベートページは、ページツリー最下部の「旧形式のプライベートページ」リンク（`/_private-legacy-pages`）から、閲覧可能なページの一覧の中から対象を選択し、「一括変換」ドロップダウンで変換します。
1. 変換前後で、次のように挙動が変わります。

    |  | v4.5 以前に作成されたデータ | 新しい v5 互換形式のデータ |
    | --- | :---: | :---: |
    | **ページツリーへの表示** | 表示されない | 表示される |
    | **子孫ページを伴う移動・削除** | 閲覧可能なページのみ処理 | 配下の全てのページを処理（ただし新しい v5 互換形式のページに限る） |
    | **子孫ページに設定可能な閲覧権限** | 全ての種類の権限を設定可能 | 親ページよりも範囲の狭い権限のみ設定可能 |

1. 事前に [v5.0.x へのアップグレード](/ja/admin-guide/upgrading/50x.html) の該当箇所を確認してください。

### GROWI Vault をセットアップする

- **対応タイミング**: アップグレード後
- **対応が必要な条件**: GROWI Vault を利用したい場合（任意）
- **参考**: [v8.0.x](/ja/admin-guide/upgrading/80x.html#管理者向け)、[GROWI Vault のセットアップ](/ja/admin-guide/management-cookbook/setup-vault.html)

GROWI Vault は、GROWI アプリ本体に組み込まれたゲートウェイ（`/vault.git` で公開）と、独立した vault-manager サービス（コンテナ）の 2 つで構成されます。vault-manager は共有ファイルシステム上の bare Git リポジトリを保持し、ページの変更は MongoDB の change stream を通じて取り込まれます。

1. 前提条件を満たしていることを確認します。
    - **MongoDB のレプリカセット構成**（[MongoDB をレプリカセット構成へ移行する](#mongodb-をレプリカセット構成へ移行する) を参照。単一ノードのレプリカセットでも可）
    - vault-manager が bare Git リポジトリを保持するための、永続的な共有ファイルシステム
1. vault-manager サービス（コンテナ）を配置します。コンテナ定義は [growi-docker-compose](https://github.com/growilabs/growi-docker-compose) の更新内容を参照してください。
1. GROWI アプリと vault-manager の双方に、接続・認証用の環境変数を設定します。セットアップに最低限必要なものは次のとおりです（チューニング系を含む全一覧は [環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) の「GROWI Vault オプション」を参照）。

    | 環境変数名 | 説明 | 既定値 |
    | --- | --- | --- |
    | `VAULT_ENABLED` | GROWI Vault 機能の有効化（デプロイ時に固定。実行時の切り替えは不可） | `false` |
    | `VAULT_MANAGER_ENDPOINT` | GROWI アプリが vault-manager サービスへ接続する URL（有効化には設定が必須） | |
    | `VAULT_MANAGER_INTERNAL_SECRET` | アプリと vault-manager 間の認証に使う共有シークレット | |
    | `VAULT_REPO_PATH` | vault-manager が管理する bare Git リポジトリのファイルパス（設定は必須。慣例値は `/data/vault-repo.git`） | |
    | `VAULT_BOOTSTRAP_ON_START` | 起動時に初期 bootstrap を実行する（`true` / `false` / `force`） | `false` |

1. GROWI を再起動し、管理画面の `/admin/vault` から初期 bootstrap を実行します。bootstrap の進捗と保存状況は同じ画面で確認できます。
1. `VAULT_MANAGER_INTERNAL_SECRET` は内部通信用のシークレットです。外部に漏らさず、安全に管理してください。
