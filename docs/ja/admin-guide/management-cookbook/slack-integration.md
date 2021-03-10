# Slack 連携

## 概要

<!-- TODO: GW-5376 作成した図を用いて、botの概要を記述する -->

### Custom bot (non-proxy) のセットアップ

#### Slack app で Bot を新規作成する

<!-- TODO: GW-5326 「slack appでbot新規作成するまで」を記述 (日本語) -->

#### スコープを設定する

<!-- TODO: GW-5332 スコープの設定方法を記述する(日本語) -->

#### 各 Request URL を設定する

<!-- TODO: GW-5336 スラッシュコマンドなど各RequestURLのセット方法を記述(日本語) -->

#### Bot を Slack のワークスペースへインストールする

1. 作成した Slack App の **Settings** から **Basic Information** をクリックします。
1. **Install your app** をクリックします。
   ![install-your-app-introduction](./images/install-your-app-introduction.png)
1. **Install to Workspace** をクリックします。
   ![install-to-workspace](./images/install-to-workspace.png)
1. 遷移先の画面にて、**許可する**をクリックします。
   ![install-your-app-transition-destination](./images/install-your-app-transition-destination.png)
1. Install your app の右側に 緑色のチェックがつけば完了です。
   ![install-your-app-complete](./images/install-your-app-complete.png)

<!-- ### Official bot のセットアップ -->

<!-- ### Custom bot (with-proxy) のセットアップ -->

### Incoming webhook のセットアップ

<!-- TODO: GW-5372 「Slack/Mattermost への通知」の内容を適切なタイトルの下に移動させる -->

## Slack bot でできること

### ワークスペース内の全文検索

<!-- TODO: GW-5375 全文検索の方法を記述(日本語) -->

<!-- ### 複数ワークスペースの横断検索 (TBD) -->

<!-- ### Slack ログの記録 (TBD) -->
