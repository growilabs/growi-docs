# セキュリティ設定

[[toc]]

## ページリストと検索結果に表示するページを制御する

ページの公開範囲が `自分のみ` または、 `特定グループのみ` に設定されているページは、ページリストやページの検索結果への表示/非表示を設定できます。

`表示` 設定の場合、閲覧が制限されているページが自分以外のユーザーのページリストや検索結果に表示されるので注意してください。

<img :src="$withBase('/assets/images/security.png')" alt="security">

## ページの削除権限

ページの削除権限を、４種類の削除の方法に応じて指定します。

- ページをゴミ箱に入れる(単体のみの操作)
- ページをゴミ箱に入れる(子孫を含む操作)
- ページを完全削除する(単体のみの操作)
- ページを完全削除する(子孫を含む操作)

「単体のみの操作」と「子孫を含む操作」でそれぞれ以下のオプションから設定を選ぶことができます。

- 単体のみの操作
  - `誰でも可能`, `管理者のみ可能`, `管理者とページ作者が可能` から選択

- 子孫を含む操作
  - `単体のみと同じ`, `管理者のみ可能`, `管理者とページ作者が可能` から選択

子孫を含む操作における`単体のみと同じ`オプションを選択すると、同じ種類の削除操作の設定が適用されます。また、「子孫を含む操作」は必ず「単体のみの操作」よりも制限の強い設定になるように強制されます。

::: tip
v4.5 以前で「ページの完全削除」として設定していたオプションは、v5.0 以降では「ページを完全削除する(単体のみの操作)」として引き継がれます
:::

## 認証機構設定

### ID/Password

#### 登録の制限

- `公開 (だれでも登録可能)`
  - ユーザー登録画面から ID/Password で新規登録ができます。

  <img :src="$withBase('/assets/images/register.png')" alt="">

- `制限 (登録完了には管理者の承認が必要)`
  - ユーザー登録画面から ID/Password で新規登録してもすぐにはログインできません。管理者による対象ユーザーへの承認が必要になります。
  - 新規登録すると管理者へアプリ内通知が送信されます。

  <img :src="$withBase('/assets/images/in-app-notification-requested-registration-approval.png')" alt="">

  ::: tip
  [メールの設定](/ja/admin-guide/management-cookbook/app-settings.html#%E3%83%A1%E3%83%BC%E3%83%AB%E3%81%AE%E8%A8%AD%E5%AE%9A)がセットアップされている場合は管理者へメールを送信します。
  :::

  - 管理者はユーザー管理から対象のユーザーを承認してください。

  <img :src="$withBase('/assets/images/user-management-user-approval-pending.png')" alt="">

- `非公開 (登録には管理者による招待が必要)`
  - ユーザー登録画面から ID/Password で新規登録できなくなります。
  - 新規ユーザーを登録するには[新規ユーザーの仮発行](/ja/admin-guide/management-cookbook/user-management.html#%E6%96%B0%E8%A6%8F%E3%83%A6%E3%83%BC%E3%82%B5%E3%82%99%E3%83%BC%E3%81%AE%E4%BB%AE%E7%99%BA%E8%A1%8C)から招待してください。

## 二要素認証

  GROWI.cloudのユーザー認証について、二要素認証はご提供しておりません。

- 但し、 GROWI.cloud のログインに利用可能な外部サービスアカウント (Google アカウント, GitHub アカウント) では、
  いずれもログインに二要素認証を設定することが可能となっております。

  二要素認証を設定済みの外部サービスアカウントで GROWI.cloud にご登録いただければ、
  疑似的に GROWI.cloud のログインに二要素認証をご利用いただけていると言えます。

### 二要素認証(2段階認証)の各サービスのヘルプページは以下となります

- Google: [Turn on 2-Step Verification - Computer - Google Account Help](https://support.google.com/accounts/answer/185839)
- GitHub: [二要素認証を設定する - GitHub Docs](https://docs.github.com/ja/authentication/securing-your-account-with-two-factor-authentication-2fa/configuring-two-factor-authentication)
