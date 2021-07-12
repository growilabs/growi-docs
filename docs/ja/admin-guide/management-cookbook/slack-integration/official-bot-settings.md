# Official bot 設定

【概念図】
![diagram-for-official-bot](/assets/images/slack-bot-outline-official.png)


## BotTypeの選択

管理画面の Slack 連携 にて **Official bot** を選択してください。

![slack-bot-selecting-official-bot](/assets/images/slack-bot-selecting-official-bot.png)

## Official bot を Slack のワークスペースへインストールする
 <!-- TODO: GW-6770  英語に統一（Slack ワークスペースを追加 -> Add a Slack Workspace）-->
1. **Slack ワークスペースを追加** ボタンをクリックします。

  ![slack-bot-add-a-slack-workspace](/assets/images/slack-bot-add-a-slack-workspace.png)

<!-- TODO: GW-6770  大文字にする（to -> To）-->
1. **Integration Procedure** に新規のアコーディオンが生成されるので、①「Install Bot to Slack」のタブをクリックして開きます。
1. **Install now** ボタンをクリックします。

  ![slack-bot-install-now-for-official](/assets/images/slack-bot-install-now-for-official.png)

1. Slack app directory のリンクに飛ぶので、「Add to Slack」ボタンを押して自身の Slack work space にインストールします。
![slack-bot-in-app-directory](/assets/images/slack-bot-in-app-directory.png)

## GROWI Official Bot with proxy サービスへの登録

1. GROWI Custom Bot with proxy サービスへの登録を開きます。
  <!-- TODO: GW-6770  英語に統一（Access Token の発行 -> Generate Access Token）-->
  **Access Token の発行** に各種トークンにアクセストークンが2種生成されていることを確認できます。
  アクセストークンは必要に応じて再発行できます。

1. Slack上で `/growi register` と打ちます。

  ![slack-bot-add-workspace](/assets/images/slack-bot-register-modal.png)

1. 表示されるモーダルの GROWI URL に、対象 GROWI の URL を保存します。
1. 上記で発行されている Access Token Proxy to GROWI と Access Token GROWI to Proxy を入れ
  **Submit** ボタンを押します。
  <!-- TODO: GW-6770 画像の差し替え-->
  ![slack-bot-update-proxy-url](/assets/images/slack-bot-update-proxy-url.png)

  <!-- TODO: GW-6770 Successfully registered with the proxy! Please check test connection in your GROWI と表示される -->
  成功した場合、 proxy サーバーの URL が表示されます。

  ![slack-bot-input-proxy-url](/assets/images/slack-bot-input-proxy-url.png)

  <!-- TODO: GW-6770 この文言は消す -->
  上記で取得した proxy サーバーの URL を **Official bot 連携** の proxy URL に入力し更新します。

## Official Bot with proxy の接続テストを実行する
<!-- TODO: GW-6770 デザインが変わっているため、画像の差し替え-->
1. 「Test connection」をクリックし、GROWI-Bot を招待した Slack チャンネルを入力します。
  ![slack-bot-test-introduction](/assets/images/slack-bot-test-introduction.png)

2. 「Test」 ボタンをクリックします。

- 成功の場合  
  **Successfully sent to Slack workspace.** が Logs に表示され、
  赤丸で囲った部分に緑色のチェックマークが表示されます。GROWI-Bot を招待した Slack チャンネルで確認してみましょう。
  - GROWI 側
    <!-- TODO: GW-6770 デザインが変わっているため、画像の差し替え-->
    ![slack-bot-test-success](/assets/images/slack-bot-test-success.png)
  - Slack 側
    <!-- TODO: GW-6770 現在の Official bot のアイコンは GROWI bot 君になっているので変えた方がよさそう？-->
    ![slack-bot-test-success-at-slack-app](/assets/images/slack-bot-test-success-at-slack-app.png)

<!-- TODO: GW-6770 URLが正しく遷移していない（ドキュメント内リンクに遷移しない） -->
- 失敗の場合  
  [接続テスト時のエラーログ](/admin-guide/management-cookbook/slack-integration/#接続テスト時のエラーログ)を参照してください。

<!-- TODO: GW-6770 URLが正しく遷移していない（ドキュメント内リンクに遷移しない） -->
全ての設定が完了したら [GROWI bot でできること](/admin-guide/management-cookbook/slack-integration/#growi-bot-でできること)を参照してください。
