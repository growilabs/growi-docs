# ロギング

システムがクラッシュするような場合や、認証失敗の原因を調査したいというシチュエーションでは、ロギングを設定することでシステムに関するより詳細な情報を得ることができます。

## ログレベルの変更方法

環境変数 `DEBUG` に、ログレベルを上げたいログネームスペースをカンマ区切りで列挙し、GROWI を再起動してください。

### 例

```
DEBUG=growi:routes:page,growi:routes:login-passport
```

## 主要なログネームスペースリスト

|GROWI 対象モジュール|log namespaces|
|---|---|
|ログイン/ログアウト|`growi:routes:login,growi:routes:login-passport`|
|OAuth/LDAP 等の Passport 認証機構|`growi:service:PassportService`|
|ユーザーデータの操作|`growi:models:user*`|
|ページ操作|`growi:routes:page,growi:models:page`|
|設定の保存・参照|`growi:models:config,growi:service:Config*`|
|管理画面での操作|`growi:routes:admin`|
|ファイルアップロード|`growi:models:attachment,growi:service:fileUploader*`|
|全文検索|`growi:lib:search`|
|メール送信|`growi:lib:mailer`|

## 更に詳しい情報

[開発ガイド](/ja/dev/) 中の [ロガーの設定](/ja/dev/tips/logger.html) を参照してください。
