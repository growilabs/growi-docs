# LDAP/keycloakグループ同期

## 概要

LDAPとKeycloakのグループ同期とは、 LDAPやKeycloak がもつ外部グループ情報を同期する機能です。



## GROWI 側の必要な設定

1. GROWI 管理画面のグループ管理画面(`/admin/user-groups`)にアクセスし、作成したい外部グループ（LDAP または Keycloak）のタブを選択します
2. 選択した認証機構の設定をします

- 外部グループ同期の機能を使うには、あらかじめ LDAP/Keycloak の認証機構設定が必要です

### LDAP

GROWI 管理画面のセキュリティ設定画面(`/admin/security`)にアクセスし、「認証機構設定」内、「LDAP」タブから設定します。

- 設定する内容や手順の詳細は、 [LDAP 連携](/ja/admin-guide/management-cookbook/ldap.html)をご覧ください

GROWI 管理画面のグループ管理画面(`/admin/user-groups`)にアクセスし、「外部グループ管理」の「LDAP」タブから設定します。

入力必須の項目は以下です。

- グループ検索ベース DN
- 所属メンバーを表す LDAP 属性
- 子グループを表す LDAP 属性

### Keycloak

 GROWI 管理画面のセキュリティ設定画面(`/admin/security`)にアクセスし、「認証機構設定」内、「OIDC」タブから設定します。

入力必須の項目は以下です。

- プロバイダ名
- 発行ホスト
- クライアント ID
- クライアントシークレット
- 認可エンドポイント
- トークンエンドポイント
- 失効エンドポイント
- 検証エンドポイント
- ユーザ情報エンドポイント
- セッション終了エンドポイント
- 登録エンドポイント
- Attribute Mapping
  - Identifier
  - username
  - Email

GROWI 管理画面のグループ管理画面(`/admin/user-groups`)にアクセスし、「外部グループ管理」の「Keycloak」タブから設定します。

入力必須の項目は以下です。

- Host
- Group Realm
- Admin API にリクエストするための client がある realm
- Client の ID
- Client の Secret
- 作成されていない GROWI アカウントを自動生成する
- 説明

3. 同期実行の「同期」をクリックし、「外部グループ管理」内の「グループ一覧」にグループが追加されていることを確認します

- (TBD) 大規模グループ同期時の注意点
