# PASSWORD_SEED

## PASSWORD_SEED とは

- GROWI ではユーザーのパスワードを保存する際に、パスワード文字列はそのまま保存せず、ハッシュ化します。
- PASSWORD_SEED は GROWI ユーザーのパスワードをハッシュ化する際の乱数種です。
- PASSWORD_SEED は主に GROWI をオンプレミスから GROWI.cloud へ移行する際に使用することを想定しています。

### GROWI.cloud の PASSWORD_SEED 設定方法

- GROWI.cloud では、アプリ詳細画面の高度な設定から GROWI アプリ毎に PASSWORD_SEED を設定できます。
  - PASSWORD_SEED を更新すると GROWI アプリは再起動されます。  
<img :src="$withBase('/assets/images/ja/passwordseed_1.png')" alt="passwordseed_1.png">
- オンプレミスで構築した GROWI からユーザーデータを移行する場合には、移行元の PASSWORD_SEED が必要になります。
  - 移行の手順については [オンプレミスから GC への移行](/ja/cloud/ompremise-growi.html) をご参照ください。
  - もし、移行時に PASSWORD_SEED を設定しない場合、移行したユーザーは以前のパスワードではログインできなくなります。

### 紛失など移行元の PASSWORD_SEED の値が不明な場合

- GROWI の管理者アカウントで GROWI にログインし、管理画面からパスワード再発行を行い新たなパスワードを設定しなおすことで、同ユーザーで再度ログインできるようになります。

### 移行のタイミングなどで PASSWORD_SEED を変更した場合

- PASSWORD_SEED 変更前に GROWI 上で作成していたユーザーは、以前のパスワードではログイン出来なくなります。
  - それらのユーザーも、 GROWI の管理画面上からパスワード再発行をすることで再度ログインできるようになります。

### PASSWORD_SEED の取得方法

- 移行元の GROWI を起動しているサーバー上で `PASSWORD_SEED` の環境変数をご確認ください。
  - 環境変数は、`printenv` コマンド等でご確認いただけます。
<!-- textlint-disable weseek/no-doubled-joshi -->
- [GROWI 公式 Docs](https://docs.growi.org/ja/admin-guide/management-cookbook/export.html) では GROWI のデータを移行する際に Export 機能を使用した場合、 PASSWORD_SEED が書き込まれた meta.json ファイルが生成されると説明されていますが、パスワードの中に記号等が入っている場合などはエスケープ文字が入る場合があり、正確ではありません。
<!-- textlint-enable weseek/no-doubled-joshi -->
- GROWI を起動しているサーバー上で環境変数を確認していただく方がより確実です。
