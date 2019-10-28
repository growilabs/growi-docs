# HackMD(CodiMD)連携

![HackMD Demo](/assets/images/hackmd-demo.gif)

## 概要

- [HackMD](https://hackmd.io) は、チームで単一の Markdown 同時多人数編集を行うにはとても優れたツールです。
- [CodiMD](https://github.com/hackmdio/codimd) は HackMD からフォークした OSS です。
- GROWI を HackMD/CodiMD と連携させることで、GROWI 管理下のドキュメントを同時に多人数で編集することができるようになります。

## 仕組み

- GROWI に HackMD/CodiMD 連携設定をすることで、HackMD/CodiMD のエディタを iframe 内に借りる形で表示できます。
- ページのデータは [window.postMessage](https://developer.mozilla.org/ja/docs/Web/API/Window/postMessage) を介して共有されます。


## [growi-docker-compose](../getting-started/docker-compose.md) で新しく HackMD(CodiMD) コンテナを立てる

[こちら](https://github.com/weseek/growi-docker-compose/tree/master/examples/integrate-with-hackmd) の Example を利用します。

[README.md](https://github.com/weseek/growi-docker-compose/blob/master/examples/integrate-with-hackmd/README.md) の内容に従ってセットアップします。

1. `examples/integrate-with-hackmd/docker-compose.override.yml` を用意
2. GROWI コンテナに環境変数を設定
    - `HACKMD_URI`: GROWI のクライアントを実行するブラウザからアクセス可能な CodiMD の URI
    - `HACKMD_URI_FOR_SERVER`: GROWI サーバーからアクセス可能な CodiMD の URI
        - 設定されなかった場合は `HACKMD_URI` を利用します
3. CodiMD コンテナに環境変数を設定
    - `GROWI_URI`: GROWI のクライアントを実行するブラウザからアクセス可能な GROWI の URI
4. コンテナの起動
5. GROWI の管理画面の「アプリ設定」から、サイトURL設定を行う
    - GROWI のクライアントを実行するブラウザからアクセス可能な GROWI の URI を入力
    - あるいは環境変数 `APP_SITE_URL` で設定することもできる

## 既存の HackMD(CodiMD) と連携する

### GROWI の設定

1. 以下の環境変数を設定
    - `HACKMD_URI`: GROWI のクライアントを実行するブラウザからアクセス可能な CodiMD の URI
    - `HACKMD_URI_FOR_SERVER`: GROWI サーバーからアクセス可能な CodiMD の URI
        - 設定されなかった場合は `HACKMD_URI` を利用します
2. 再起動
3. GROWI の管理画面の「アプリ設定」から、サイトURL設定を行う
    - GROWI のクライアントを実行するブラウザからアクセス可能な GROWI の URI を入力
    - あるいは環境変数 `APP_SITE_URL` で設定することもできる

### HackMD(CodiMD) の設定

1. 以下の環境変数を設定
    - `GROWI_URI`: GROWI のクライアントを実行するブラウザからアクセス可能な GROWI の URI
2. GROWI agent for HackMD を読み込むため、ejs を編集
    - `/codimd/public/views/codimd/head.ejs` の末尾に以下を追加
        ```javascript
        <script src="<%= process.env.GROWI_URI %>/_hackmd/load-styles"></script>
        ```
    - `/codimd/public/views/codimd/foot.ejs` の末尾に以下を追加
        ```javascript
        <script src="<%= process.env.GROWI_URI %>/_hackmd/load-agent" defer></script>
        ```
3. 再起動

## 動作確認

### GROWI

- 任意の編集可能なページを表示した際に、HackMD タブが表示されていることを確認

### HackMD(CodiMD)

- 任意の編集可能なページを表示した際に、ブラウザのコンソールに以下のようなログが表示されていることを確認
    ```
    [GROWI] Loading styles for HackMD is not processed because currently not in iframe
    [GROWI] Loading agent for HackMD is not processed because currently not in iframe
    ```

## トラブルシュート

### GROWI で HackMD タブが表示されない

- `HACKMD_URI` に正しい値がセットされていることを確認してください

### 「Start to edit with HackMD」ボタン押下時にエラー

#### Error: Connecting to a non-HackMD server

- `HACKMD_URI_FOR_SERVER` に正しい値がセットされていることを確認してください
- GROWI サーバーから HackMD/CodiMD に対する疎通を確認してください

#### GROWI client failed to connect to GROWI agent for HackMD

- GROWI のサイトURLに正しい値がセットされていることを確認してください
- 既存の HackMD/CodiMD に変更を加えている場合、以下を確認してください
    - head.ejs, foot.ejs に記述した内容が正しいこと
    - HackMD/CodiMD のソース中に挿入された script タグの src のURLに正常にアクセスできる(css, javascript をロードできる)こと


