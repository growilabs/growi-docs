# データのアーカイブ

GROWI データを別の GROWI に移行するための zip 形式の GROWI アーカイブデータを作成します。

:::warning
GROWI アーカイブデータは同じバージョンの GROWI でしかインポートできないのでご注意ください。
:::

### アーカイブ可能なデータコレクション

| コレクションの種類 | コレクション名 | 説明 | 
| :--- | :--- | :--- ]
| ページコレクション |||
|| Pages | ページ。Revisions とセットでインポートする必要があります。|            
|| Revisions | ページの変更履歴のデータ。<br>Pages とセットでインポートする必要があります。 |
|| Tags | ページタグ。ページに紐づいた状態のままインポートするためには以下の PageTagRelation とセットでインポートする必要があります。 |
|| PageTagRelations | ページとページタグの紐づけに関するデータ。<br>Pages と Tags とセットでインポートする必要があります。 |   
| ユーザーコレクション |||
|| Users ||
|| Externalaccounts ||
|| Usergroups ||
| コンフィグコレクション |||
|| Configs ||
|| Updateposts ||
| その他のコレクション |||
|| Comments ||
|| Attachmants ||
|| Bookmark ||
|| Migrations ||

### データアーカイブ方法