# Slack 連携

GROWI bot を Slack にインストールすることによって様々なコマンドを実行できます。
セットアップについては[管理者ガイド](/ja/admin-guide/management-cookbook/slack-integration/)をご参照ください。

## GROWI bot でできること

### ヘルプコマンド

1. `/growi help` を入力すると GROWI bot で使うことができる、コマンド一覧が表示されます。
   ![HackMD Demo](/assets/images/growi-help.gif)

### ページの作成

1. `/growi note` を入力すると GROWI 内に新規ページが作成されます。

![HackMD Demo](/assets/images/growi-note.gif)

### ワークスペース内の全文検索

1. `/growi search [キーワード]` を入力すると検索結果が表示されます。

   - 例: `/growi search example`
     ![slack-bot-full-text-search-display-result-command](/assets/images/slack-bot-full-text-search-display-result-command.png)
   - 検索結果
     ![slack-bot-full-text-search-display-result](/assets/images/slack-bot-full-text-search-display-result.png)
   - **Next** ボタンをクリックすると、次の検索結果を表示します。
     ![slack-bot-full-text-search-click-next](/assets/images/slack-bot-full-text-search-click-next.png)
   - **Share** ボタンをクリックすると、チャンネル内に共有されます。
     ![slack-bot-full-text-search-click-share](/assets/images/slack-bot-full-text-search-click-share.png)

1. Slack ワークスペースを複数の GROWI に登録している場合、複数の GROWI から横断検索できます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)

   - 例: `/growi search example`
     ![slack-bot-full-text-search-display-result-command](/assets/images/slack-bot-full-text-search-display-result-command.png)
   - 検索結果
     ![slack-bot-search-multi-growi](/assets/images/slack-bot-search-multi-growi.png)

### Slack チャンネル内の会話からページを作成する (Alpha)

1. `/growi keep` を入力します。
2. `Oldest datetime` にページで使用したい最も古いメッセージの時刻を入力します。
3. `Newest datetime` にページで使用したい最も新しいメッセージの時刻を入力します。
4. `Page path` にページの作成パスを入力し、`Create page` します。 `Oldest datetime` から `Newest datetime` の間の会話が作成されるページに反映されます。

![HackMD Demo](/assets/images/growi-keep.gif)

### Slack 内で GROWI ページのプレビュー (Unfurl 機能)

Unfurl 機能を利用することで Slack に GROWI のリンクを共有した際にスニペットを表示できます。
デフォルトでは無効のため、管理画面から有効化する必要があります。

![slack-bot-unfurl](/assets/images/slack-bot-unfurl.png)

Public ではないページのスニペットは表示されません。
![slack-bot-unfurl-private-page](/assets/images/slack-bot-unfurl-private-page.png)

### 接続中の GROWI を確認する

`/growi status` と入力することで、Slack ワークスペースと連携している GROWI を確認できます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)
![slack-bot-growi-status](/assets/images/slack-bot-growi-status.png)

### Slack ワークスペースと GROWI App との連携を解除する

1. `/growi unregister [連携解除したい GROWI App の URL1] [連携解除したい GROWI App の URL2] ...` と入力するとモーダルが表示されます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)

   - 入力例: `growi unregister http://example.com http://growi.jp`
     ![slack-bot-unregister-input-eg](/assets/images/slack-bot-unregister-input-eg.png)

   - 表示されるモーダル
     ![slack-bot-unregister-modal](/assets/images/slack-bot-unregister-modal.png)

1. **Submit** ボタンをクリックします。
1. 以下のように表示されたら、連携解除が完了しています。
   ![slack-bot-unregister-completed](/assets/images/slack-bot-unregister-completed.png)

