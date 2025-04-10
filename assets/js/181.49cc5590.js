(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{630:function(t,e,l){"use strict";l.r(e);var a=l(69),i=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h1",{attrs:{id:"データのアーカイブ"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#データのアーカイブ"}},[t._v("#")]),t._v(" データのアーカイブ")]),t._v(" "),l("p",[t._v("GROWI データを別の GROWI に移行するための zip 形式の GROWI アーカイブデータを作成します。")]),t._v(" "),l("div",{staticClass:"custom-block warning"},[l("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),l("ul",[l("li",[l("p",[t._v("GROWI アーカイブデータは同バージョンの GROWI のみインポート可能です。")])]),t._v(" "),l("li",[l("p",[t._v("ユーザーデータをインポートする場合は、以下に注意してください。")])])]),t._v(" "),l("ul",[l("li",[t._v("インポートを行う管理者ユーザーの username が admin1 だった場合、エクスポートされた旧環境のデータ内に同じ admin1 を username とするユーザーが存在すると、正常にインポートできません。また、 email でも同様の挙動となります。そのため、インポートを行うときは、旧環境のデータには存在しないユーザーを新たに作成することをお勧めします。\n")])])]),t._v(" "),l("ContextualBlock",{attrs:{context:"docs-growi-org"}},[l("div",{staticClass:"custom-block danger"},[l("p",{staticClass:"custom-block-title"},[t._v("DANGER")]),t._v(" "),l("ul",[l("li",[t._v("エクスポート機能のデータはファイルシステムを利用するため、GROWI サーバーをロードバランスしている場合は正常動作しない可能性があります。詳細は"),l("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/loadbalance.html#インポート・エクスポート機能に関する注意点"}},[t._v("こちら")]),t._v("を確認してください。")],1)])])]),t._v(" "),l("h3",{attrs:{id:"アーカイブ可能な-mongodb-collections"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#アーカイブ可能な-mongodb-collections"}},[t._v("#")]),t._v(" アーカイブ可能な MongoDB Collections")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[l("div",{staticStyle:{"white-space":"nowrap"}},[t._v("カテゴリー")])]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("MongoDB Collection 名")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("説明")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ページ")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Pages")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ページ。Revisions とセットでインポートする必要があります。閲覧権限はそのまま引き継がれるため、公開範囲を保持するには Users 及び Usergroups とセットでインポートする必要があります。"),l("code",[t._v("/trash")]),t._v(" 配下のページもインポートされます。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Revisions")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ページの変更履歴。"),l("br"),t._v("Pages とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Tags")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ページタグ。ページに紐づいた状態のままインポートするためには以下の PageTagRelation とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("PageTagRelations")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ページとページタグの紐づけを行うデータ。"),l("br"),t._v("Pages と Tags とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("ユーザー")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Users")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ユーザー。(注意: 環境変数 "),l("code",[t._v("PASSWORD_SEED")]),t._v(" を設定する必要があります。"),l("sup",{staticClass:"footnote-ref"},[l("a",{attrs:{href:"#fn1",id:"fnref1"}},[t._v("[1]")])]),t._v(" ユーザーデータのインポートには注意が必要です。"),l("sup",{staticClass:"footnote-ref"},[l("a",{attrs:{href:"#fn2",id:"fnref2"}},[t._v("[2]")])]),t._v(")")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Externalaccounts")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("外部認証機構のアカウント。Users とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Usergroups")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ユーザーグループ。グループ内のユーザーを保持する場合には Users と UserGroupRelations とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("UsergroupRelations")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ユーザーとユーザーグループの紐づけを行うデータ。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("管理設定")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Configs")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("各種設定データ。通知設定の一部は Configs ではなく Updateposts 及び Globalnotificationsettings に含まれます。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Updateposts")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("User Trigger Notification で作成されている通知設定。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Globalnotificationsettings")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Global Notification で作成されている通知設定。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("その他")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Comments")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("コメント。Pages とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Attachments")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("添付ファイルのメタデータ。ファイルアップロード方法に GridFS 使用している場合、AttachmentFiles.Files と AttachmentFiles.Chunks とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("AttachmentFiles.Files")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Grid FS でアップロードされた添付ファイルのメタデータ。Attachments と AttachmentFiles.Chunks とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("AttachmentFiles.Chunks")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Grid FS でアップロードされた添付ファイルのデータ。ファイルアップロード方法に GridFS 使用している場合、Attachments と AttachmentFiles.Files とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Bookmark")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("ページについているブックマーク。Users と Pages とセットでインポートする必要があります。")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}}),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("Migrations")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("マイグレーションログ。GROWI における MongoDB のマイグレーションはこのログに追加されているマーグレーションファイルをスキップします。そのため、エクスポート時点での完全なデータとしてアーカイブデータを作成する場合、Migrations をエクスポートしておく必要があります。")])])])]),t._v(" "),l("h3",{attrs:{id:"データアーカイブ方法"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#データアーカイブ方法"}},[t._v("#")]),t._v(" データアーカイブ方法")]),t._v(" "),l("ol",[l("li",[t._v("GROWI に管理者アカウントでログインし、[管理/データアーカイブ] ("),l("code",[t._v("/admin/export")]),t._v(") にアクセスします。")]),t._v(" "),l("li",[t._v("[アーカイブデータの新規作成] をクリックすると表示されるモーダルにてエクスポートしたい MongoDB Collections を選択し、[エクスポート]ボタンを押します。")]),t._v(" "),l("li",[t._v("エクスポートが完了すると[エクスポートされたアーカイブリスト]に先ほど作成したアーカイブデータが追加されます。リスト右部分の設定マークのドロップダウンから[ダウンロード]をクリックし、ダウンロードしてください。")])]),t._v(" "),l("hr",{staticClass:"footnotes-sep"}),t._v(" "),l("section",{staticClass:"footnotes"},[l("ol",{staticClass:"footnotes-list"},[l("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[l("p",[t._v("ユーザーデータをバックアップ/リストアする場合、現在の'PASSWORD_SEED'を新しいGROWIシステムにセットすることを忘れないでください。さもなくば、ユーザーがパスワードでログインできなくなります。現在の'PASSWORD_SEED'はエクスポートされるZIPファイル中のmeta.jsonに保存されます。 "),l("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[t._v("↩︎")])])]),t._v(" "),l("li",{staticClass:"footnote-item",attrs:{id:"fn2"}},[l("p",[t._v("インポートを行う管理者ユーザーの username が admin1 だった場合、エクスポートされた旧環境のデータ内に同じ admin1 を username とするユーザーが存在すると、正常にインポートできません。また、 email でも同様の挙動となります。そのため、インポートを行うときは、旧環境のデータには存在しないユーザーを新たに作成することをお勧めします。\n"),t._v(" "),l("a",{staticClass:"footnote-backref",attrs:{href:"#fnref2"}},[t._v("↩︎")])])])])])],1)}),[],!1,null,null,null);e.default=i.exports}}]);