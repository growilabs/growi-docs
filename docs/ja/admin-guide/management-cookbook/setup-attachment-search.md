# 添付ファイルの全文検索のセットアップ

ページに添付したファイルの本文を、全文検索の対象にするためのセットアップ手順を説明します。

対象のファイル形式は次のとおりです。

- PDF
- Office 文書（Word、Excel、PowerPoint。旧形式を含む）、OpenDocument、RTF、EPUB
- CSV、TSV、HTML、XML
- テキスト（Markdown、JSON、YAML などを含む）

ファイルの本文は、GROWI 本体とは別に動かす抽出サービス attachment-text-extractor（コンテナ）が取り出します。
GROWI は取り出された本文を Elasticsearch に登録し、ページと同じ閲覧権限で検索結果に表示します。

この機能は、抽出サービスの URI とトークンを設定したときだけ有効になります。設定しなければ、これまでどおりページだけが検索対象です。

## 前提条件

- **全文検索の設定**: Elasticsearch による全文検索を使えるようにしておく必要があります。手順は [全文検索のセットアップ](/ja/admin-guide/management-cookbook/setup-search-system.html) を参照してください。
- **抽出サービスを動かす環境**: 抽出サービスのコンテナに、メモリを 2 GiB まで使わせられる環境が必要です。

## セットアップの流れ

1. 抽出サービスのコンテナを配置します（下記）。
2. GROWI に、抽出サービスの URI とトークンを設定します。環境変数（下記）か、管理画面の **Elasticsearch 管理** ページで設定します。
3. **Elasticsearch 管理** ページで、添付ファイルも対象にしてインデックスをリビルドします。リビルドすると、設定より前にアップロードされた添付ファイルも検索対象になります。設定より後にアップロードされた添付ファイルは、リビルドしなくても自動で検索対象になります。

本文を取り出せなかった添付ファイルは、**Elasticsearch 管理** ページに失敗の件数と理由が表示されます。

## 抽出サービスの配置

イメージは Docker Hub の [growilabs/attachment-text-extractor](https://hub.docker.com/r/growilabs/attachment-text-extractor) で公開しています（linux/amd64 と linux/arm64）。
次は、GROWI のコンテナと同じ Docker ネットワークに、`docker run` で起動する例です。`<GROWI_NETWORK>` は GROWI のコンテナがつながっているネットワーク名に置き換えてください。

```bash
docker run -d --name attachment-text-extractor --network <GROWI_NETWORK> \
  --read-only --user 10001:10001 --cap-drop ALL \
  --security-opt no-new-privileges --memory 2g \
  -e ATTACHMENT_EXTRACTOR_SERVICE_TOKEN \
  growilabs/attachment-text-extractor:1
```

- サービスはポート 8000 で待ち受けます。この例では、GROWI から `http://attachment-text-extractor:8000` で接続します。ホストにポートを公開する必要はありません。
- 環境変数 `ATTACHMENT_EXTRACTOR_SERVICE_TOKEN` は必須です。未設定のときは起動しません。この例では、`docker run` を実行するシェルで設定済みの値をコンテナに渡します。GROWI 側の `GROWI_ATTACHMENT_EXTRACTOR_SERVICE_TOKEN` と同じ値を設定してください。
- メモリの上限、ヘルスチェック、停止の猶予、同時に処理する数などの条件は、[抽出サービスの README](https://github.com/growilabs/growi/blob/master/apps/attachment-text-extractor/docker/README.md) を参照してください。

::: warning
抽出サービスは、利用者がアップロードした信頼できないファイルを解析します。次のようにネットワークを制限してください。

- 抽出サービスから外部への通信をすべて遮断します。抽出の処理に外部への通信は必要ありません。
- 抽出サービスのポート 8000 には、GROWI と監視システムからだけ接続できるようにします。`/healthz`、`/readyz`、`/openapi.json`、`/metrics` はトークンなしで応答します。
:::

## 主な環境変数

GROWI に設定する環境変数は次のとおりです。全一覧は、[環境変数](/ja/admin-guide/admin-cookbook/env-vars.html) ページの「全文検索オプション」を参照してください。

- `GROWI_ATTACHMENT_EXTRACTOR_URI`: 抽出サービスの URI です。
- `GROWI_ATTACHMENT_EXTRACTOR_SERVICE_TOKEN`: 抽出サービスへの認証に使うトークンです。
- `GROWI_ATTACHMENT_EXTRACTOR_TIMEOUT_MS`: 抽出サービスへの 1 回の要求を待つ時間（ミリ秒）です。
- `GROWI_ATTACHMENT_EXTRACTOR_MAX_FILE_SIZE_BYTES`: 抽出サービスへ送る添付ファイルの最大サイズ（バイト）です。これより大きい添付ファイルは検索対象になりません。
- `ATTACHMENT_EXTRACTOR_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS`: `true` の場合、上の 4 つの設定はローカル DB の値を参照せず、環境変数の値だけを参照します。管理画面では読み取り専用になります。

`GROWI_ATTACHMENT_EXTRACTOR_MAX_FILE_SIZE_BYTES` は、抽出サービス側の上限 `MAX_FILE_SIZE_MB`（既定 50 MB）以下にしてください。
こうしておくと、上限を超えるファイルを GROWI が抽出サービスへ送らずに済みます。

::: warning
トークンはシークレットです。推測されにくい値を設定し、リポジトリやログに残さず、外部に漏らさないよう安全に管理してください。
:::
