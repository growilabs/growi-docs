# 監査ログ

ログイン、ログアウト、ページの作成など、ユーザーが行ったアクションを管理画面から 表示 / 検索 できる機能です。

![audit-log](/assets/images/audit-log.png)

## テーブルに表示される情報

- ユーザー名
- アクションが行われた時間
- アクション
- IP アドレス
- URL

## 監査ログを有効にする

監査ログを有効にするには、環境変数 `AUDIT_LOG_ENABLED` を `true` にします。`true` にした時点からログの収集・表示・検索が可能になります。

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

![audit-log-search1](/assets/images/audit-log-search1.png)

### 日付

特定の日付、日付の範囲を指定して検索できます。

![audit-log-search2](/assets/images/audit-log-search2.png)


### アクション名

特定のアクションを絞り込んで検索できます。

![audit-log-search2](/assets/images/audit-log-search3.png)

## ログの種類

GROWI が収集するログは `SMALL、MEDIUM、LARGE` の3種類のグループに別れています。デフォルトは `SMALL` になっており、環境変数の `AUDIT_LOG_ACTION_GROUP_SIZE` から変更可能です。

| 値 | 収集するアクション |
| ------------------- | ---------- |
| `SMALL` | ログイン、ログアウト、ページの作成、ページの削除 |
| `MEDIUM` | SMALL + 一般ユーザーが行う操作全て - ページの閲覧 |
| `LARGE` | MEDIUM +  管理ユーザーが行う操作全て - ページの閲覧 |

また、`AUDIT_LOG_ACTION_GROUP_SIZE` で設定されたグループに 含まれる / 含まれない アクションを個別に 追加 / 除外 できます。

- 設定されたグループに含まれないアクションを個別に追加
  - 環境変数 `AUDIT_LOG_ADDITIONAL_ACTIONS` にカンマ区切りでアクションを設定します
  - 例: `AUDIT_LOG_ADDITIONAL_ACTIONS=PAGE_VIEW,USER_PASSWORD_UPDATE`
- 設定されたグループに含まれるアクションを個別に除外
  - 環境変数 `AUDIT_LOG_EXCLUDE_ACTIONS` にカンマ区切りでアクションを設定します。
  - 例: `AUDIT_LOG_EXCLUDE_ACTIONS=PAGE_CREATE,USER_LOGOUT`

## 対応しているアクション一覧

- [収集できるアクション名](https://github.com/weseek/growi/blob/master/packages/app/src/interfaces/activity.ts#L9)
