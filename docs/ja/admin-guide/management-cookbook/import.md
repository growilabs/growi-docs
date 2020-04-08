# データのインポート

GROWI v3.7.2 現在では、GROWI、 esa.io、Qiita:team のデータをインポートする機能をサポートしています。

## GROWI アーカイブデータインポート

(TBD)

## esa.io のデータインポート
esa.io が公開している [API v1](https://docs.esa.io/posts/102) を利用して esa.io のデータをインポートします。

### インポート対象
| esa.io     |     | GROWI      |
| ---------- | --- | ---------- |
| 記事       | →   | ページ     |
| カテゴリー | →   | ページパス |

:::danger
- ユーザーデータはインポートされません。
- 同名ページがインポート先の GROWI にすでに存在している場合、そのページはスキップされます。
- GROWI において作成不可能なページパスの場合、そのページはスキップされます。
- esa.io のページにおける以下のメタデータはインポートされません。
  - star
  - watch
  - tag
  - comment
  - WIP/Ship it
  - revisions および change log
- 添付ファイルは esa.io が管理している添付ファイル用 URL にアクセスするという方法で表示されます。そのため esa.io 上でファイルが削除した場合ページはリンク切れになります。
:::


### インポート方法

1. esa.io に owner アカウントでログインし、左側のタブから [SETTINGS] → [ユーザー設定] の画面にアクセスします。
2. [Personal access tokens] の [Generate new token] ボタンをクリックし、GROWI から esa.io にアクセスするためのトークンを発行します。
3. トークン名を入力し、[Select scopes] の [Read] にチェックを入れ、[Save] します。

![import1](./images/import1.png)

4. 生成されたトークンを保存します。

![import2](./images/import2.png)

5. GROWI に管理者アカウントでログインし、[管理/データインポート] (`/admin/importer`) にアクセスします。
6. [esa.io からのインポート] において、esa.io のチーム名とアクセストークン（先ほど保存したトークン）を入力し、更新します。
7. [接続テスト] を実行し、`Test connection to esa success.` のアラートが表示されたら接続成功です。
8. esa.io に接続可能な状態で [インポート] を実行するとページのインポートが開始されます。

## Qiita:team のデータインポート

(TBD)