# データのアーカイブ

GROWI データを別の GROWI に移行するための zip 形式の GROWI アーカイブデータを作成します。

:::warning
GROWI アーカイブデータは同バージョンの GROWI のみインポート可能です。
:::

### アーカイブ可能な MongoDB Collection

| カテゴリー | MongoDB Collection 名 | 説明 | 
| :--- | :--- | :--- | 
| ページ | Pages | ページ。Revisions とセットでインポートする必要があります。閲覧権限はそのまま引き継がれるため、公開範囲を保持するためには Users 及び Usergroups とセットでインポートする必要があります。`/trash` 配下のページもインポートされます。 |            
|| Revisions | ページの変更履歴のデータ。<br>Pages とセットでインポートする必要があります。 |
|| Tags | ページタグ。ページに紐づいた状態のままインポートするためには以下の PageTagRelation とセットでインポートする必要があります。 |
|| PageTagRelations | ページとページタグの紐づけに関するデータ。<br>Pages と Tags とセットでインポートする必要があります。 |   
| ユーザー | Users | ユーザー。(注意: 環境変数 `PASSWORD_SEED` を設定する必要があります。[^*1]|
|| Externalaccounts | 外部認証機構のアカウントデータ。Users とセットでインポートする必要があります。|
|| Usergroups | ユーザーグループ。グループ内のユーザーを保持する場合には Users と UserGroupRelations とセットでインポートする必要があります。 |
|| UsergroupRelations | ユーザーとユーザーグループを紐づけするデータ。 |
| 管理設定 | Configs | 各種設定データ。通知設定の一部は Configs ではなく Updateposts 及び Globalnotificationsettings に含まれます。 |
|| Updateposts | User Trigger Notification で作成されている通知設定。 |
|| Globalnotificationsettings | Global Notification で作成されている通知設定。 |
| その他 | Comments |コメント。Pages とセットでインポートする必要があります。 |
|| Attachmants | 添付ファイルのメタデータ。ファイルアップロード方法に GridFS 使用している場合、Attachmantfiles.Files と Attachmantfiles.Chunks とセットでインポートする必要があります。 |
|| Attachmantfiles ||
|| Attachmantfiles.Files | Grid FS でアップロードされた添付ファイルのメタデータ。Attachmants と Attachmantfiles.Chunks とセットでインポートする必要があります。|
|| Attachmantfiles.Chunks | Grid FS でアップロードされた添付ファイルのデータ。ファイルアップロード方法に GridFS 使用している場合、Attachmants と Attachmantfiles.Files とセットでインポートする必要があります。|
|| Bookmark | ページについているブックマーク。Users と Pages とセットでインポートする必要があります。 |
|| Migrations | マイグレーションデータ。 |

[^*1]: ユーザーデータをバックアップ/リストアする場合、現在の'PASSWORD_SEED'を新しいGROWIシステムにセットすることを忘れないでください。さもなくば、ユーザーがパスワードでログインできなくなります。現在の'PASSWORD_SEED'はエクスポートされるZIPファイル中のmata.jsonに保存されます。

#### ページのアクセス
- 削除済みページ
- ページのアクセス権限

### データアーカイブ方法