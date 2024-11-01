# シングルサインオン（Keycloak）

## シングルサインオン（Keycloak）とは

- シングルサインオンとは、1つのIDとパスワードで認証し、複数の Web サービスやクラウドサービスにアクセスする仕組みです。
- `SSO` と省略することもあります。
- GROWI.cloud では、 GROWI アプリ と連携設定済みの Keycloak を提供し、シングルサインオンを実現します。
- 現在ご利用中の LDAP や Active Directory との連携も可能です。
- GROWI.cloud 導入時に、自社の他システムとの連携のため技術的なサポート、SI (システムインテグレーション) が必要な場合は別途お見積もりをいたします。

## GROWI.cloud におけるKeycloakの利用条件

- Keycloak は、以下のプランのご契約でご利用いただけます。
  - ラージ
  - グランド
  - アンリミテッド
  - 旧プラン (※現在は新規にご契約いただけません)
    - ビジネススタンダード
    - ビジネスプロ
    - ビジネス

## GROWI.cloud 上での設定方法

- GROWI アプリ詳細画面 にて Keycloak の編集ボタンを押すと、`Keycloakを新規作成する` が表示されますので、そちらからKeycloakを作成してください。

<img :src="$withBase('/assets/images/ja/singlesignon_1.png')" alt="singlesignon_1.png">


- Keycloakの作成後、再度GROWI App 詳細画面にて Keycloak の編集ボタンを押すと、`Single Sign On(Keycloak)を有効にする` が表示されますので、そちらをクリックしてください。
  - 有効にしたいKeycloakを選択し、`更新する`を押すと、KeycloakとGROWI Appの連携が完了します。

<img :src="$withBase('/assets/images/ja/singlesignon_2.png')" alt="singlesignon_2.png">



## idとパスワードについて

Keycloak の管理画面へのログイン ID と パスワードは、GROWI アプリで Keycloak を初めて有効にしたタイミングで GROWI.cloud 画面上に一度だけ表示されます。

パスワードについては必ずメモを取っておくようにしてください。

ID は固定で `keycloak` です。
