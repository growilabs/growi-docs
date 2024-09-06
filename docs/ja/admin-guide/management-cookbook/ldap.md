# LDAP 連携

## 概要

LDAP サーバーを登録することで、LDAP によるログインが可能となります。

## LDAP サーバー設定

1. 管理画面のセキュリティ設定ページ(/admin/security)にアクセスし、認証機構設定の LDAP タグを開きます。
2. 「Use LDAP」を ON にし、必要事項を入力します。

- サーバ URL: `ldaps://ホスト:ポート/BaseDN` というフォーマットで入力します。
  - スキーマは `ldap` or `ldaps`
  - ポートは省略可
- Bind モード: LDAP サーバーに接続してユーザー検索する際の挙動を選べます。
  - Manager Bind: あらかじめ特定の DN を設定しておき、それを用いて LDAP ユーザーを検索するモード。`uid=admin` などに権限がある場合はこちらを選択してください。
  - User Bind: GROWI のログインフォームに入力したユーザー名から動的に DN を作成し、それを用いて LDAP ユーザーを検索するモード。
- Bind DN
  - ディレクトリサービスに認証する際のアカウント DN を入力してください。
  - User Bind にて、ログイン時に入力されるユーザー名を使用するには<code v-pre>{{username}}</code>の形式を使用してください。
    - 例: <code v-pre>uid={{username}},dc=example,dc=com</code>
- Bind DN パスワード
  - Manager Bind の場合のみ、使用するパスワードを入力してください。（注: MongoDB 内には当該 DN の平文パスワードが保存されます）
  - User Bind の場合は、ログイン時のパスワードが使用されます。
- 検索フィルター
  - 検索フィルターを用いると、認証されるユーザーを一意に決定させることができます。
  - ログイン時のユーザー名を使用するには <code v-pre>{{username}}</code> の形式を使用してください。
  - 空欄の場合は <code v-pre>(uid={{username}})</code> が使用されます。
  - 例1: <code v-pre>(uid={{username}})</code>
    - ログインフォームに入力したユーザー名が uid 属性と一致する LDAP ユーザーをピックアップ
  - 例2: <code v-pre>(|(uid={{username}})(mail={{username}}))</code>
    - ログインフォームに入力したユーザー名が uid 属性または mail 属性と一致する LDAP ユーザーをピックアップ
  - 例3: <code v-pre>(&(uid={{username}})(memberOf=cn=manager,ou=group,dc=example,dc=com))</code>
    - アクセス可能なユーザーを絞る

3. 設定が反映されているか確認します。

- ログアウトし、ログイン画面(/login)にアクセスします。
- LDAP に登録されているアカウントでログインできれば設定完了です。

## Attribute Mapping (オプション)

LDAP アカウントをもとに GROWI アカウントを新規作成する際に、GROWI アカウントの以下の情報に対して LDAP アカウントのどの値( `uid`, `cn` 等)を紐づけるか指定できます。

- username: デフォルトでは LDAP アカウントの `uid` が適用されます。(アカウント作成後、username は変更できません。)
- Mail: デフォルトでは LDAP アカウントの `mail` が適用されます。
- Name: 未指定の場合 Name は空欄になります。

<!-- textlint-disable weseek/sentence-length -->
新規にログインしたユーザーの `username` が一致するローカルアカウントが存在する際に自動で紐付けたい場合は `新規ログイン時、username が一致したローカルアカウントが存在した場合は自動的に紐付ける` にチェックを入れてください。(注: username の一致を以て同一ユーザーであるとみなすので、セキュリティに注意してください)
<!-- textlint-enable weseek/sentence-length -->

## グループ検索フィルター（オプション）

指定した条件を満たす posixGroup が存在した場合のみログインできるようにします。この機能を有効にする場合は、セキュリティ設定ページの認証機構設定の LDAP タグにて、以下の値を設定してください。

- グループ検索ベース DN: グループを検索する際にベース DN として扱われる DN
  例: `ou=group,dc=example,dc=com`
- グループ検索フィルター: グループフィルターに用いるクエリです。このクエリにヒットするグループがあった時のみ、LDAP でのログインが成功します。ログイン対象ユーザーオブジェクトのプロパティーで置換する場合は <code v-pre>{{dn}}</code> を用いてください。
<!-- textlint-disable weseek/sentence-length -->
  例: <code v-pre>(&(cn=group1)(memberUid={{dn}}))</code> とすると `cn=group1` と、ユーザーの `uid` を含む `memberUid` を持つグループにヒットします(`ユーザーの DN プロパティー` がデフォルトの `uid` から変更されていない場合)
<!-- textlint-enable weseek/sentence-length -->
- ユーザーの DN プロパティー: グループ検索フィルター内の <code v-pre>{{dn}}</code> に置換される、ユーザーオブジェクトのプロパティー
  デフォルト: uid
