# Official bot 設定

【概念図】
<img :src="$withBase('/assets/images/slack-bot-outline-official.png')" alt="diagram-for-official-bot">


## BotTypeの選択

管理画面の Slack 連携 にて **Official bot** を選択してください。

<img :src="$withBase('/assets/images/slack-bot-selecting-official-bot.png')" alt="slack-bot-selecting-official-bot">

## Official bot を Slack のワークスペースへインストールする

1. **Add a Slack Workspace** ボタンをクリックします。

    <img  :src="$withBase('/assets/images/slack-bot-add-a-slack-workspace.png')" alt="slack-bot-add-a-slack-workspace">
1. **Integration Procedure** に新規のアコーディオンが生成されるので、①「Install Bot to Slack」のタブをクリックして開きます。
1. **Install now** ボタンをクリックします。

    <img  :src="$withBase('/assets/images/slack-bot-install-now-for-official.png')" alt="slack-bot-install-now-for-official">
1. Slack app directory のリンクに飛ぶので、「Add to Slack」ボタンを押して自身の Slack work space にインストールします。

    <img  :src="$withBase('/assets/images/slack-bot-in-app-directory.png')" alt="slack-bot-in-app-directory">

## GROWI Official Bot with proxy サービスへの登録

1. GROWI Custom Bot with proxy サービスへの登録を開きます。
  **Generate Access Token** の各種トークンにアクセストークンが2種生成されていることを確認できます。
  アクセストークンは必要に応じて再発行できます。
1. Slack上で `/growi register` と打ちます。

    <img  :src="$withBase('/assets/images/slack-bot-growi-register.png')" alt="slack-bot-growi-register">

    <img :src="$withBase('/assets/images/slack-bot-register-modal.png')" alt="slack-bot-add-workspace">
1. 表示されるモーダルの GROWI URL に、対象 GROWI の URL を保存します。
1. 上記で発行されている Access Token Proxy to GROWI と Access Token GROWI to Proxy を入れ
  **Submit** ボタンを押します。

  成功した場合、"Successfully registered with the proxy! Please check test connection in your GROWI" と表示されます。

   <img :src="$withBase('/assets/images/slack-bot-successfully-registered-with-proxy.png')" alt="slack-bot-update-proxy-url">

## Official Bot with proxy の接続テストを実行する

1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。

    <img  :src="$withBase('/assets/images/slack-bot-test-introduction.png')" alt="slack-bot-test-introduction">
1. 「Test」 ボタンをクリックします。

- 成功の場合  
    **Successfully sent to Slack workspace.** が Logs に表示され、
    赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側

      <img :src="$withBase('/assets/images/slack-bot-test-success.png')" alt="slack-bot-test-success">
  - Slack 側

      <img :src="$withBase('/assets/images/slack-bot-test-success-at-slack-app.png')" alt="slack-bot-test-success">

- 失敗の場合  
    [接続テスト時のエラーログ](/ja/admin-guide/management-cookbook/slack-integration/#接続テスト時のエラーログ)を参照してください。

  全ての設定が完了したら [GROWI bot でできること](/ja/admin-guide/management-cookbook/slack-integration/#growi-bot-でできること)を参照してください。
