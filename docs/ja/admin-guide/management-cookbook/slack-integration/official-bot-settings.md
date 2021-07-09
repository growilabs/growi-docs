# Official bot 設定

## BotTypeの選択

管理画面の Slack 連携 にて **Official bot** を選択してください。

![slack-bot-selecting-official-bot](/assets/images/slack-bot-selecting-official-bot.png)

## Official bot を Slack のワークスペースへインストールする

1. **Slack ワークスペースを追加** ボタンをクリックします。

  ![slack-bot-add-a-slack-workspace](/assets/images/slack-bot-add-a-slack-workspace.png)

1. **Integration Procedure** に新規のアコーディオンが生成されるので、①「Install Bot to Slack」のタブをクリックして開きます。
1. **Install now** ボタンをクリックします。

  ![slack-bot-install-now-for-official](/assets/images/slack-bot-install-now-for-official.png)

1. Slack app directory のリンクに飛ぶので、「Add to Slack」ボタンを押して自身の Slack work space にインストールします。
![slack-bot-in-app-directory](/assets/images/slack-bot-in-app-directory.png)

## GROWI Official Bot with proxy サービスへの登録

1. GROWI Custom Bot with proxy サービスへの登録を開きます。  
  **Access Token の発行** に各種トークンにアクセストークンが2種生成されていることを確認できます。
  アクセストークンは必要に応じて再発行できます。

1. Slack上で `/growi register` と打ちます。

  ![slack-bot-add-workspace](/assets/images/slack-bot-register-modal.png)

1. 表示されるモーダルの GROWI URL に、対象 GROWI の URL を保存します。
1. 上記で発行されている Access Token Proxy to GROWI と Access Token GROWI to Proxy を入れ
  **Submit** ボタンを押します。

  ![slack-bot-update-proxy-url](/assets/images/slack-bot-update-proxy-url.png)

  成功した場合、 proxy サーバーの URL が表示されます。

  ![slack-bot-input-proxy-url](/assets/images/slack-bot-input-proxy-url.png)

  上記で取得した proxy サーバーの URL を **Official bot 連携** の proxy URL に入力し更新します。

## Official Bot with proxy の接続テストを実行する

1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。
  ![slack-bot-test-introduction](/assets/images/slack-bot-test-introduction.png)

2. 「Test」 ボタンをクリックします。

- 成功の場合  
  **Successfully sent to Slack workspace.** が Logs に表示され、
  赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側
    ![slack-bot-test-success](/assets/images/slack-bot-test-success.png)
  - Slack 側
    ![slack-bot-test-success-at-slack-app](/assets/images/slack-bot-test-success-at-slack-app.png)

- 失敗の場合  
  [接続テスト時のエラーログ](./slack-integration.html#接続テスト時のエラーログ)を参照してください。


全ての設定が完了したら [GROWI bot でできること](./slack-integration.html#growi-bot-でできること)を参照してください。
