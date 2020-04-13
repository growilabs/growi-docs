# データのアーカイブ

GROWI データを別の GROWI に移行するための zip 形式の GROWI アーカイブデータを作成します。

:::warning
GROWI アーカイブデータは同バージョンの GROWI のみインポート可能です。
:::

### アーカイブ可能な MongoDB Collection

| カテゴリー | MongoDB Collection 名 | 説明 | 
| :--- | :--- | :--- | 
| ページ | Pages | ページ。Revisions とセットでインポートする必要があります。|            
|| Revisions | ページの変更履歴のデータ。<br>Pages とセットでインポートする必要があります。 |
|| Tags | ページタグ。ページに紐づいた状態のままインポートするためには以下の PageTagRelation とセットでインポートする必要があります。 |
|| PageTagRelations | ページとページタグの紐づけに関するデータ。<br>Pages と Tags とセットでインポートする必要があります。 |   
| ユーザー | Users ||
|| Externalaccounts ||
|| Usergroups ||
| 管理設定 | Configs ||
|| Updateposts ||
| その他 | Comments ||
|| Attachmants ||
|| Bookmark ||
|| Migrations ||

### データアーカイブ方法