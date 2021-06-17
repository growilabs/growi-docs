# データのアーカイブ

GROWI データを別の GROWI に移行するための zip 形式の GROWI アーカイブデータを作成します。

:::warning

- GROWI アーカイブデータは同バージョンの GROWI のみインポート可能です。

- ユーザーデータのインポートを行う場合は、以下に注意してください。

  - インポート操作を行う管理者ユーザーの username が admin1 だった場合、エクスポートされた旧環境のデータ内に同じ admin1 を username とするユーザーが存在すると、正常にインポートすることができません。また、 email でも同様の挙動となります。そのため、インポート操作を行うときは、旧環境のデータには存在しないユーザーを新たに作成することをお勧めします。
:::

:::danger

- エクスポート機能のデータはファイルシステムを利用するため、GROWI サーバーをロードバランスしている場合は正常動作しない可能性があります。詳細は[こちら](../admin-cookbook/loadbalance.md#インポート・エクスポート機能に関する注意点)を確認してください。
:::

### アーカイブ可能な MongoDB Collections

| <div style="white-space: nowrap;">カテゴリー</div>| MongoDB Collection 名 | 説明 |
| :--- | :--- | :--- |
| ページ | Pages | ページ。Revisions とセットでインポートする必要があります。閲覧権限はそのまま引き継がれるため、公開範囲を保持するには Users 及び Usergroups とセットでインポートする必要があります。`/trash` 配下のページもインポートされます。 |
|| Revisions | ページの変更履歴。<br>Pages とセットでインポートする必要があります。 |
|| Tags | ページタグ。ページに紐づいた状態のままインポートするためには以下の PageTagRelation とセットでインポートする必要があります。 |
|| PageTagRelations | ページとページタグの紐づけを行うデータ。<br>Pages と Tags とセットでインポートする必要があります。 |
| ユーザー | Users | ユーザー。(注意: 環境変数 `PASSWORD_SEED` を設定する必要があります。[^*1] ユーザーデータのインポートには注意が必要です。[^*2]) |
|| Externalaccounts | 外部認証機構のアカウント。Users とセットでインポートする必要があります。|
|| Usergroups | ユーザーグループ。グループ内のユーザーを保持する場合には Users と UserGroupRelations とセットでインポートする必要があります。 |
|| UsergroupRelations | ユーザーとユーザーグループの紐づけを行うデータ。 |
| 管理設定 | Configs | 各種設定データ。通知設定の一部は Configs ではなく Updateposts 及び Globalnotificationsettings に含まれます。 |
|| Updateposts | User Trigger Notification で作成されている通知設定。 |
|| Globalnotificationsettings | Global Notification で作成されている通知設定。 |
| その他 | Comments |コメント。Pages とセットでインポートする必要があります。 |
|| Attachments | 添付ファイルのメタデータ。ファイルアップロード方法に GridFS 使用している場合、AttachmentFiles.Files と AttachmentFiles.Chunks とセットでインポートする必要があります。 |
|| AttachmentFiles.Files | Grid FS でアップロードされた添付ファイルのメタデータ。Attachments と AttachmentFiles.Chunks とセットでインポートする必要があります。|
|| AttachmentFiles.Chunks | Grid FS でアップロードされた添付ファイルのデータ。ファイルアップロード方法に GridFS 使用している場合、Attachments と AttachmentFiles.Files とセットでインポートする必要があります。|
|| Bookmark | ページについているブックマーク。Users と Pages とセットでインポートする必要があります。 |
|| Migrations | マイグレーションログ。GROWI における MongoDB のマイグレーションはこのログに追加されているマーグレーションファイルをスキップします。そのため、エクスポート時点での完全なデータとしてアーカイブデータを作成する場合、Migrations をエクスポートしておく必要があります。 |

[^*1]: ユーザーデータをバックアップ/リストアする場合、現在の'PASSWORD_SEED'を新しいGROWIシステムにセットすることを忘れないでください。さもなくば、ユーザーがパスワードでログインできなくなります。現在の'PASSWORD_SEED'はエクスポートされるZIPファイル中のmeta.jsonに保存されます。

[^*2]: インポート操作を行う管理者ユーザーの username が admin1 だった場合、エクスポートされた旧環境のデータ内に同じ admin1 を username とするユーザーが存在すると、正常にインポートすることができません。また、 email でも同様の挙動となります。そのため、インポート操作を行うときは、旧環境のデータには存在しないユーザーを新たに作成することをお勧めします。

### データアーカイブ方法

1. GROWI に管理者アカウントでログインし、[管理/データアーカイブ] (`/admin/export`) にアクセスします。
2. [アーカイブデータの新規作成] をクリックすると表示されるモーダルにてエクスポートしたい MongoDB Collections を選択し、[エクスポート]ボタンを押します。
3. エクスポートが完了すると[エクスポートされたアーカイブリスト]に先ほど作成したアーカイブデータが追加されます。リスト右部分の設定マークのドロップダウンから[ダウンロード]をクリックし、ダウンロードしてください。
