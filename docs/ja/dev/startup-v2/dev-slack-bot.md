# GROWI-Bot の開発

[toc]

## 概要

Slack 上で GROWI にアクセス、操作する Slack-Bot「GROWI-Bot」の開発手順です。

## 手順

# Slack-Bot 開発環境構築

## GROWI-Bot

- 管理ベージ
  - <https://api.slack.com/apps/A01KC9EV5KK>

## 準備

- 開発時にサーバーのデプロイするために[ngrok](https://ngrok.com/) をインストールしておく。
- 「GROWI-Bot」のコラボレータ申請をする。

## サーバー起動手順

1. 以下の情報を取得
   - [Basic Information](https://api.slack.com/apps/A01KC9EV5KK/general) の 「App Credentials」内の `Signing Secret`
   - [OAuth & Permissions](https://api.slack.com/apps/A01KC9EV5KK/oauth?) の「OAuth Tokens for Your Team」内の `Bot User OAuth Access Token`
1. `config/env.dev.js` に取得した値をセットする

   ```text:config.dev.js
     SLACK_SIGNING_SECRET: '{Signing Secret}',
     SLACK_BOT_TOKEN: '{Bot User OAuth Access Token}',
   ```

1. `yarn server` で起動
1. `$ ngrok http 3000` を実行

   ```shell:ターミナル
   $ ngrok http 3000

   ngrok by @inconshreveable                                       (Ctrl+C to quit)

   Session Status                online
   Session Expires               37 minutes
   Version                       2.3.35
   Region                        United States (us)
   Web Interface                 http://127.0.0.1:4040
   Forwarding                    http://ad2a1e1851f1.ngrok.io -> http://localhost:3
   Forwarding                    https://ad2a1e1851f1.ngrok.io -> http://localhost:

   Connections                   ttl     opn     rt1     rt5     p50     p90
                                 5       0       0.00    0.00    5.00    5.01

   HTTP Requests
   -------------
   ```

   Forwardin の https の方の URL (今回の例では `https://ad2a1e1851f1.ngrok.io` )をコピー

1. [Slash Commands](https://api.slack.com/apps/A01KC9EV5KK/slash-commands?) の Request URL に、コピーした URL に`/_api/v3/slack-bot` のパスをつけたものを設定

1. Slack にて該当のアクションを行い、サーバーへのアクセスが確認できたら設定完了
