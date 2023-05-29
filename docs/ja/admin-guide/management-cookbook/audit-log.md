# 監査ログ

ログイン、ログアウト、ページの作成など、ユーザーが行ったアクションを管理画面から 表示 / 検索 できる機能です。

![audit-log](/assets/images/audit-log.png)

<HiddenOnHelp>
## セットアップ

[監査ログのセットアップ](/ja/admin-guide/admin-cookbook/audit-log-setup.html)

</HiddenOnHelp>

## テーブルに表示される情報

- ユーザー名
- アクションが行われた時間
- アクション
<HiddenOnHelp><li>[IP アドレス](/ja/admin-guide/admin-cookbook/trust-proxy.html)</li></HiddenOnHelp>
- URL

## 検索

ユーザー名、日付、アクション名で監査ログを検索できます。

### ユーザ名

ユーザ名で検索できます。検索結果は3種類に分類されます。

- Active User
  - アクティブなユーザー
- Inactive User
  - 非アクティブ（未承認な、招待済みな、停止されている）ユーザー
- Active Snapshot User
  - アクションが行われた時点でのユーザーネーム（削除されたユーザーも含む）

### 日付

特定の日付、日付の範囲を指定して検索できます。

### アクション名

特定のアクションを絞り込んで検索できます。
