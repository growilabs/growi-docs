# 外部ツールへの通知

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

## 通知手段の種類

### 概要

### Slack bot

### Slack / Mattermost incoming webhook

GROWI では、 Incoming Webhook を利用した Slack 通知が可能です。  
ワークスペースに属するチャンネルのいずれかを選択して通知できます。

### IFTTT

GROWI では、IFTTT を利用して、その他の Web サービスに通知できます。

- IFTTT ご利用手順

  1. GROWI 管理画面の「アプリ設定」 からメール設定を行う。
     - 詳しくは、[メール設定](/ja/admin-guide/management-cookbook/app-settings.html#メールの設定)をご覧ください。
  1. GROWI 管理画面の「通知設定」 から Global notification をクリックする。

     ![ifttt-global-notification-introduction](/assets/images/ifttt-global-notification-introduction.png)

  1. **通知設定を追加** をクリックする。

     ![ifttt-global-notification-addition](/assets/images/ifttt-global-notification-addition.png)

  1. トリガーパスを設定してください。
  1. リンクから IFTTT のアプレットをお好みで作成してください。
  1. 通知先を **Email** とし、IFTTT のトリガーとなる Email を入力してください。
     - 例: IFTTT の **email** をご利用の場合、trigger@applet.ifttt.com と入力します。
  1. GROWI 上での トリガーイベントを設定してください。

     ![ifttt-global-notification-detail-settings](/assets/images/ifttt-global-notification-detail-settings.png)

  1. 必要事項を入力したら、**更新**を押してください。

## 通知内容の種類 / 設定方法

## 概要

## User Trigger Notification 設定

User Trigger Notification は、GROWI を利用するユーザーがページの編集やコメントを投稿する際に選択的に通知できる機能です。
基本的には通知先のチャンネルを都度入力する必要がありますが、デフォルトパターンを設定することで入力を省くことが可能です。

### デフォルトパターンの設定方法

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. User Trigger Notification のタブを開きます。
3. パターンとチャンネル名を入力します。

- 設定値を表示するパスをパターンといいます。例えば `/event/*` と設定した場合 event 配下のページのみに設定したデフォルトパターンが表示されます。
- 全てのページにデフォルトパターン表示したい場合は `/*` と入力してください。

### デフォルトパターン設定が反映されているかの確認

<!-- textlint-disable weseek/sentence-length -->
例えば、パターンを `/event/*` チャンネルを `general` と設定した場合、  
`/event/忘年会のお知らせ`というパスのページを作成すると Slack 通知フォームに `general` が設定された状態で編集モードに遷移します。
<!-- textlint-enable weseek/sentence-length -->

![slack2](/assets/images/slack2.png)

チェックボックスを有効にした状態でページを更新した場合、 `general` チャンネルに Slack 通知が届きます。

## Global Notification 設定

Wiki 利用者が所定のアクションをしたタイミングで発信される Slack 通知を設定できます。

### Global Notification の設定方法

1. 管理画面のセキュリティ設定ページ(/admin/notification)にアクセスします。
2. Global Notification のタブを開きます。
3. 通知設定の一覧の右側にある通知設定の追加ボタンを押します。
4. 通知詳細設定で各項目を設定します。

- 通知機構はトリガーパスで起きるイベントを感知します。  
  例えば `/event/*` と設定した場合、`/event` 配下のページで Global Notification が有効になります。

### 通知の有効 / 無効

Global Notification は通常 public なページ内のイベントのみ通知が届きます。

チェックボックスを有効にすることで以下のページ内のイベントを感知するようになります。

- '自分のみ'に閲覧制限をしているページ
- '特定グループにのみ'に閲覧制限をしているページ

link を知っている人のみ閲覧できるページは設定に関わらず常に通知されません。
