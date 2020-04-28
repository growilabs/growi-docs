# Slack/Mattermost への通知

## 概要

GROWI では、 Incoming Webhook を利用した Slack 通知が可能です。  
1つの GROWI につき 1つのワークスペースを登録でき、ワークスペースに属する全てのチャンネルに通知できます。

## Slack Configuration 設定

通知を行う Slack ワークスペースを設定します。

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Slack Incoming Webhooks 設定の必要事項を入力し、更新ボタンを押します。

- **Wrbhook URL**  
[Incoming Webhooks](https://itizawa.slack.com/apps/new/A0F7XDUAZ--incoming-webhook-) で取得できます。

- **Slack アプリより Incoming Webhook を優先する**  
このオプションをオンにすると、 Slack App が有効になっていても GROWI は Incoming Webhook を使用します。

### 設定が反映されているかの確認

上記の設定後、ページの編集モード画面に Slack 通知フォームが追加されます。  

![slack1](./images/slack1.png)

ページの保存・更新時に 入力したチャンネルに Slack 通知が届きます。  
この方法で通知を行うことを GROWI では **User Trigger Notification** といいます。

## User Trigger Notification 設定

通常、通知先のチャンネルを通知する度に入力する必要がありますが、
デフォルトパターンを設定することで入力を省くことが可能です。

### デフォルトパターンの設定方法

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. User Trigger Notification のタブを開きます。
3. パターンとチャンネル名を入力します。

- 設定値を表示するパスをパターンといいます。例えば `/event/*` と設定した場合 event 配下のページのみに設定したデフォルトパターンが表示されます。
- 全てのページにデフォルトパターン表示したい場合は `/*` と入力してください。

### デフォルトパターン設定が反映されているかの確認

例えば、パターンを `/event/*` チャンネルを `general` と設定した場合、  
`/event/忘年会のお知らせ`というパスのページを作成すると Slack 通知フォームに `general` が設定された状態で編集モードに遷移します。

![slack2](./images/slack2.png)

チェックボックスを有効にした状態でページを更新した場合、 `general` チャンネルに Slack 通知が届きます。

## Global Notification 設定

Wiki 利用者が所定のアクションをしたタイミングで発信される Slack 通知を設定できます。

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Global Notification のタブを開きます。
3. 通知設定の一覧の右側にある通知設定の追加ボタンを押します。
4. 通知詳細設定で各種設定を行います。

- 通知機構はトリガーパスで起きるイベントを感知します。  
例えば `/event/*` と設定した場合、`/event` 配下のページで Global Notification が有効になります。

### 通知の有効 / 無効

Global Notification は通常 public なページ内のイベントのみ通知が届きます。

チェックボックスを有効にすることで以下のページ内のイベントを感知するようになります。

- '自分のみ'に閲覧制限をしているページ
- '特定グループにのみ'に閲覧制限をしているページ

linkを知っている人のみ閲覧できるページは設定に関わらず常に通知されません。
