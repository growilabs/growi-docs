# LDAP/keycloakグループ同期

## 概要

LDAPとkeycloakのグループ同期とは、LDAPやKeycloakがもつ外部グループ情報を同期する機能です。

### 利便性の向上

ユーザーの所属グループ情報が一貫して管理できるため、ユーザーやグループを再登録する必要がなく、手軽にグループ機能を活用できます。


### セキュアな認証

外部認証プロバイダー（LDAPやKeycloak）が提供するセキュリティ機能を活用することで、認証や認可の信頼性が向上します。

## GROWI 側の必要な設定

### LDAP

1. GROWI 管理画面のグループ管理画面(/admin/user-groups)にアクセスし、「LDAP グループ同期設定」の「グループ検索ベース DN」に `ou=groups,dc=example,dc=org` と入力し、設定を更新します
2. 同期実行の「同期」をクリックし、外部グループ管理内のグループ一覧にグループが追加されていることを確認します
3. 「グループ検索ベース DN」の値を空にして、設定を再度更新します
4. 「セキュリティ設定」の LDAP の「グループ検索フィルター」に 1 と同じ値 `ou=groups,dc=example,dc=org`を入れて設定を更新します

### Keycloak

1. 管理者画面のセキュリティ設定 -> OIDC で以下の設定を入力する
- プロバイダ名: Keycloak
- 発行ホスト: <http://host.docker.internal:8080/realms/myrealm>
- クライアントID: growi-test-oidc
- クライアントシークレット: keycloak の growi-test-oidc の詳細画面の Credentials のタブにある Client secret
- 認可エンドポイント: <http://host.docker.internal:8080/realms/myrealm/protocol/openid-connect/auth>
- トークンエンドポイント: <http://host.docker.internal:8080/realms/myrealm/protocol/openid-connect/token>
- 失効エンドポイント: <http://host.docker.internal:8080/realms/myrealm/protocol/openid-connect/revoke>
- 検証エンドポイント: <http://host.docker.internal:8080/realms/myrealm/protocol/openid-connect/token/introspect>
- ユーザ情報エンドポイント: <http://host.docker.internal:8080/realms/myrealm/protocol/openid-connect/userinfo>
- セッション終了エンドポイント: <http://host.docker.internal:8080/realms/myrealm/protocol/openid-connect/logout>
- 登録エンドポイント: <http://host.docker.internal:8080/realms/myrealm/clients-registrations/openid-connect>
- Attribute Mapping
  - Identifier: sub
  - username: preferred_username
  - Email: email

2. 端末 の /etc/hosts に 127.0.0.1 localhost host.docker.internal の行を追加しておく (OIDC ログイン時にブラウザから host.docker.internal にアクセスしてしまうため)

3. 管理者画面のグループ管理の Keycloak のタブで、以下の設定を入力する
- Host: <http://host.docker.internal:8080>
- Group Realm: myrealm
- Admin API にリクエストするための client がある realm: myrealm
- Client の ID: admin-cli
- Client の Secret: keycloak の admin-cli の詳細画面の Credentials のタブにある Client secret
- 作成されていない GROWI アカウントを自動生成する: true
- 説明: description

4. 同期を実行し、同期完了後に同期されたグループがグループ管理画面に表示されることを確認

5. 同期されたユーザでログインできることを確認し、グループに所属していることを確認
