# パスワードをリセットする

## 概要

パスワードを忘れた場合など、ユーザーがパスワードをリセットして変更したい時に利用できる機能です。  

- 事前に GROWI の管理画面（`/admin/app`）でメールの設定が必要です。
- 詳しい設定方法は[アプリ設定＞メールの設定](/ja/admin-guide/management-cookbook/app-settings.html#%E3%83%A1%E3%83%BC%E3%83%AB%E3%81%AE%E8%A8%AD%E5%AE%9A)をご覧ください。

## 手順

1. パスワードリセット画面(`/forgot-password`)を開き、 パスワードリセットの案内を送るメールアドレスを登録します。

<img :src="$withBase('/assets/images/ja/forgot-password_1.png')" alt="forgot-password_1.png">

2. 入力したメールアドレス宛に、パスワードをリセットするための URL が届いたことを確認し、記載の URL をクリックします。

- メールが届いてから10分以内に対応してください。

<img :src="$withBase('/assets/images/ja/forgot-password_2.png')" alt="forgot-password_2.png">

4. 開いたページから、新しいパスワードを設定します。

<img :src="$withBase('/assets/images/ja/forgot-password_3.png')" alt="forgot-password_3.png">

5. 登録したメールアドレス宛に、新パスワードの設定完了メールが届きます。

<img :src="$withBase('/assets/images/ja/forgot-password_4.png')" alt="forgot-password_4.png">
