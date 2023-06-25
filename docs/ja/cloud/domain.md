# ドメイン

## GROWI アプリに設定可能なドメイン

- GROWI アプリには、以下いずれかのドメインをご希望に合わせて指定いただくことができます。
    1. GROWI.cloud から発行可能な GROWI.cloud のドメイン
    2. ユーザー様ご自身で発行された独自のドメイン

### GROWI.cloudのドメインについて

- GROWI.cloud 上で作成した GROWI のドメインは、独自ドメインを指定しない限り `growi.cloud` のサブドメインとなります。
  - 例. `help.growi.cloud` 、 `sample.growi.cloud`
- `growi.cloud` のサブドメインには、ご希望の任意のサブドメインを無料でご利用いただけます。
  - 他の GROWI.cloud ユーザーがすでに使用済みの値は設定できません。
  - `growi.cloud` のサブドメインは SSL に対応しており、SSL サーバー証明書の発行も自動かつ無料で行ないます。

### 独自ドメインについて

- 独自ドメインがオプション機能に含まれているプランの場合は、独自ドメインを設定できます。
- 独自ドメインを利用する場合は以下のご準備が必要です。
    1. 指定するドメインの発行
    2. 以下のように、独自ドメインを production.growi.cloud の CNAME レコードに設定
        - 例. `example.com. IN CNAME production.growi.cloud.`
        - ※独自ドメインと IP アドレスを直接紐づけることは可能ですが、サービス設備の都合で IP アドレスが変更になる可能性があるため、CNAME レコードでの紐づけを推奨しています。
        - ※設定方法はご利用の DNS サービスなどをご確認ください。
    3. 独自ドメインの SSL サーバ証明書、秘密鍵の用意
    4. 上記 2 つを GROWI.cloud の設定画面上でアップロード
    5. 独自ドメインを GROWI.cloud の画面上で入力する
        1. GROWI.cloud 上で独自ドメインを適用したい GROWI の詳細画面にアクセスし、「ドメイン」の項目の「編集」ボタンをクリック
        3. 「独自ドメインを利用する」トグルボタンをオンにする
        4. 「SSLサーバー証明書」プルダウンで、先ほどアップロードした SSL サーバー証明書を選択
        5. 「GROWIに使用する独自ドメイン」の入力欄で利用したい独自ドメインを入力し、「更新する」ボタンをクリック  
<img :src="$withBase('/assets/images/ja/domain_1.png')" alt="domain_1.png">

上記の手順をご対応いただくことで、独自ドメインを有効化できます。

## Keycloak 連携時の GROWI アプリのドメイン変更について

現在 Keycloak と紐づけられた GROWI アプリについてドメインを変更する場合、お客様にて Keycloak 側の設定変更を実施していただく必要があります。  
つきましては、GROWI アプリのドメインを変更した際に、以下手順の実施をお願いします。

### 操作手順
<!-- textlint-disable weseek/ja-no-mixed-period -->
1. GROWI.cloud で作成した Keycloak へアクセスする  
<img :src="$withBase('/assets/images/ja/domain_2.png')" alt="domain_2.png">
2. `Administration Console` をクリックする
3. ログインする
4. 左メニューより `Clients` クリックする
5. 連携されている GROWI アプリのドメインを探し、右側の `Edit` をクリックする
    - 以下画像は、growi.example.com というドメイン名で Keycloak を起動させている例です  
<img :src="$withBase('/assets/images/ja/domain_3.png')" alt="domain_3.png">
6. `Client ID`、`Root URL`、`Valid Redirect URIs` に設定されている値を連携されている GROWI アプリの新しいドメインに書き換える  
<img :src="$withBase('/assets/images/ja/domain_4.png')" alt="domain_4.png">
7. 下部 `Save` をクリックする
<!-- textlint-enable weseek/ja-no-mixed-period -->