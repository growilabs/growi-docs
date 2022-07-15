# 監査ログのセットアップ

[監査ログ](/ja/admin-guide/management-cookbook/audit-log.html)を利用可能な状態にする方法、収集するログについて紹介します。

## 監査ログを有効にする

監査ログを有効にするには、環境変数 `AUDIT_LOG_ENABLED` を `true` にします。`true` にした時点からログの収集・表示・検索が可能になります。

## ログの種類

GROWI が収集するログは `SMALL、MEDIUM、LARGE` の3種類のグループに別れています。デフォルトは `SMALL` になっており、環境変数の `AUDIT_LOG_ACTION_GROUP_SIZE` から変更可能です。

| 値 | 収集するアクション |
| ------------------- | ---------- |
| `SMALL` | ログイン、ログアウト、ページの作成、ページの削除 |
| `MEDIUM` | `SMALL` + 一般ユーザーが行う操作全て - ページの閲覧 |
| `LARGE` | `MEDIUM` +  管理ユーザーが行う操作全て - ページの閲覧 |

## 収集するログの 追加 / 除外

`AUDIT_LOG_ACTION_GROUP_SIZE` で設定されたグループに 含まれる / 含まれない アクションを個別に 追加 / 除外 できます。

- 設定されたグループに含まれないアクションを個別に追加
  - 環境変数 `AUDIT_LOG_ADDITIONAL_ACTIONS` に CSV形式（カンマ区切りの文字列）で指定します
  - 例: `AUDIT_LOG_ADDITIONAL_ACTIONS=PAGE_VIEW,USER_PASSWORD_UPDATE`
- 設定されたグループに含まれるアクションを個別に除外
  - 環境変数 `AUDIT_LOG_EXCLUDE_ACTIONS` に CSV形式（カンマ区切りの文字列）で指定します
  - 例: `AUDIT_LOG_EXCLUDE_ACTIONS=PAGE_CREATE,USER_LOGOUT`

## 対応しているアクション一覧

- [収集できるアクション名](https://github.com/weseek/growi/blob/master/packages/app/src/interfaces/activity.ts#L9)
