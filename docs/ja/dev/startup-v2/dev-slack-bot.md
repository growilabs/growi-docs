# GROWI-Bot の開発

[toc]

## 概要

Slack 上で GROWI にアクセス，操作する Slack-Bot「GROWI-Bot」の開発手順です。

## 手順

# Slack-Bot 開発環境構築

## トピックブランチ

`feat/growi-bot` (master にマージされるまで)

## GROWI-Bot

- 管理ベージ
  - https://api.slack.com/apps/A01KC9EV5KK

## 手順

1. [ngrok](https://ngrok.com/) をインストール
   - 上記リンクからダウンロードする
   - or Mac の場合 `$ brew cask install ngrok`
1. 「GROWI-Bot」のコラボレータになっていない場合はすでにコラボレータになってる村民に申請をする （[このリンク](https://app.slack.com/app-settings/T4V7GA7CM/A01KC9EV5KK/collaborators) を一緒に送ると良い）
1. 以下の情報を取得しておく
   - [Basic Information](https://api.slack.com/apps/A01KC9EV5KK/general) の 「App Credentials」内の `Signing Secret`
   - [OAuth & Permissions](https://api.slack.com/apps/A01KC9EV5KK/oauth?) の「OAuth Tokens for Your Team」内の `Bot User OAuth Access Token`
1. GROWI の `config/env.dev.js` にて取得した値をセットする

   ```text:config.dev.js
     SLACK_SIGNING_SECRET: '{Signing Secret}',
     SLACK_BOT_TOKEN: '{Bot User OAuth Access Token}',
   ```

1. `yarn server` で起動
1. ローカルで `$ ngrok http 3000` を叩き外部公開（終了は Ctrl + C)

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

1. [Event Subscriptions](https://api.slack.com/apps/A01KC9EV5KK/event-subscriptions?) や [Slash Commands](https://api.slack.com/apps/A01KC9EV5KK/slash-commands?) にて Request URL にコピーした URL に`/_api/v3/slack-bot` のパスをつけたものをセット
   - Event Subscriptions を複数人でやると競合すると思うので相談しながら進める
1. GROWI WS の #slacktest, #growi_bot 等で `/growi-bot` と送信し、GROWI-Bot が Hello と返してきたら起動成功

# 開発時の注意点

- Bot 管理画面上でスラッシュコマンドの追加などの変更を行った場合逐一アプリの Reinstall が必要
