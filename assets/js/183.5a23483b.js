(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{631:function(t,e,a){"use strict";a.r(e);var _=a(69),l=Object(_.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"growi-お引越し機能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#growi-お引越し機能"}},[t._v("#")]),t._v(" GROWI お引越し機能")]),t._v(" "),a("h2",{attrs:{id:"概要"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[t._v("#")]),t._v(" 概要")]),t._v(" "),a("p",[t._v("GROWI から別の GROWI へ簡単にデータの移行ができる機能です。")]),t._v(" "),a("h2",{attrs:{id:"はじめに"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#はじめに"}},[t._v("#")]),t._v(" はじめに")]),t._v(" "),a("p",[t._v("以下の条件を満たしていることが必要です。")]),t._v(" "),a("ul",[a("li",[t._v("移行先と移行元の両 GROWI のバージョンが一致している")]),t._v(" "),a("li",[a("strong",[t._v("v6 以上であり、同一のバージョン")]),t._v("である")]),t._v(" "),a("li",[t._v("環境変数: "),a("code",[t._v("USER_UPPER_LIMIT")]),t._v(" を設定している場合\n"),a("ul",[a("li",[t._v("移行先の USER_UPPER_LIMIT に移行元の USER_UPPER_LIMIT よりも大きな値を設定している")])])])]),t._v(" "),a("h2",{attrs:{id:"移行フロー"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移行フロー"}},[t._v("#")]),t._v(" 移行フロー")]),t._v(" "),a("ol",[a("li",[a("Badge",{attrs:{text:"to",vertical:"middle"}}),t._v(" GROWI で認証に使用するための移行キーを発行します。\n")],1),t._v(" "),a("li",[a("Badge",{attrs:{text:"from",vertical:"middle",type:"warning"}}),t._v(" GROWI の管理画面で移行キーをコピペし、移行開始ボタン押下します。\n")],1)]),t._v(" "),a("h2",{attrs:{id:"移行先の操作フロー"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移行先の操作フロー"}},[t._v("#")]),t._v(" "),a("Badge",{attrs:{text:"to",vertical:"middle"}}),t._v("  移行先の操作フロー")],1),t._v(" "),a("h3",{attrs:{id:"移行キーの発行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移行キーの発行"}},[t._v("#")]),t._v(" 移行キーの発行")]),t._v(" "),a("ul",[a("li",[t._v("移行先の GROWI はインストールの有無関係なく、移行キーが発行できます。\n"),a("ul",[a("li",[t._v("インストールしている場合は、管理画面から移行キーを発行します。")])])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/images/ja/g2g-transfer-1.png"),alt:"g2g-transfer-1"}}),t._v(" "),a("ul",[a("li",[t._v("インストールしていない場合は、インストーラー画面から移行キーを発行します。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/images/ja/g2g-transfer-2.png"),alt:"g2g-transfer-2"}}),t._v(" "),a("h3",{attrs:{id:"移行キーの期限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移行キーの期限"}},[t._v("#")]),t._v(" 移行キーの期限")]),t._v(" "),a("ul",[a("li",[t._v("発行した移行キーの有効期限は発行から1時間です。")]),t._v(" "),a("li",[t._v("一度移行に利用した移行キーは、再利用できません。")])]),t._v(" "),a("h2",{attrs:{id:"移行元の操作フロー"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移行元の操作フロー"}},[t._v("#")]),t._v(" "),a("Badge",{attrs:{text:"from",vertical:"middle",type:"warning"}}),t._v(" 移行元の操作フロー")],1),t._v(" "),a("h3",{attrs:{id:"移行キーの入力と移行ボタンの押下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移行キーの入力と移行ボタンの押下"}},[t._v("#")]),t._v(" 移行キーの入力と移行ボタンの押下")]),t._v(" "),a("ul",[a("li",[t._v("移行先で発行した移行キーを移行元の管理画面へ入力し、移行開始ボタンを押すと移行を開始します。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/images/ja/g2g-transfer-3.png"),alt:"g2g-transfer-3"}}),t._v(" "),a("h3",{attrs:{id:"移行するコレクション、高度なオプションを選択する"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移行するコレクション、高度なオプションを選択する"}},[t._v("#")]),t._v(" 移行するコレクション、高度なオプションを選択する")]),t._v(" "),a("ul",[a("li",[t._v("詳細オプションボタンをクリックすると移行するコレクションとコレクションごとの詳細な設定が可能です。")]),t._v(" "),a("li",[t._v("デフォルトはすべてのコレクションを移行し移行元と移行先のデータベースの中身が同じになります。")]),t._v(" "),a("li",[t._v("重複するデータが存在していた場合、移行元のデータで上書きします。ただし、Config だけは "),a("code",[t._v("Flush and insert")]),t._v(" されます。")])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/images/ja/g2g-transfer-4.png"),alt:"g2g-transfer-4"}}),t._v(" "),a("h2",{attrs:{id:"移行先のファイルアップロード設定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移行先のファイルアップロード設定"}},[t._v("#")]),t._v(" 移行先のファイルアップロード設定")]),t._v(" "),a("p",[t._v("v6.0.5 現在では "),a("strong",[t._v("移行先")]),t._v(" の設定値がそのまま使用されます。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("今後のアップデートにより "),a("strong",[t._v("移行元")]),t._v(" でファイルアップロード設定を選択し移行先の設定を上書きできるようになる予定です。")])]),t._v(" "),a("h2",{attrs:{id:"添付ファイル転送の転送可否"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添付ファイル転送の転送可否"}},[t._v("#")]),t._v(" 添付ファイル転送の転送可否")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("from/to")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Local")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("AWS(S3)")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("GCP(GCS)")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Azure(Blob)")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("MongoDB(GridFS)")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("未設定(none)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Local")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Cloud(S3)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("🚩 設定が異なる場合は転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Cloud(GCS)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("🚩 設定が異なる場合は転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Cloud(Azure)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("🚩 設定が異なる場合は転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("GridFS")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("未設定(none)")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("✅ 転送する")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("❌ 転送不能")])])])]),t._v(" "),a("ul",[a("li",[t._v("Cloud(S3/GCS/Azure) -> Cloud(GCS/S3/Azure)\n"),a("ul",[a("li",[t._v("サービス/バケット名が異なる場合は転送します")]),t._v(" "),a("li",[t._v("サービス/バケット名が一致している場合は転送しません(転送不要で移行が完了します)")])])]),t._v(" "),a("li",[t._v("移行先が未インストール\n"),a("ul",[a("li",[t._v("移行先の環境変数 "),a("code",[t._v("FILE_UPLOAD")]),t._v(" に 'aws' が設定されている場合（デフォルト）\n"),a("ul",[a("li",[t._v("v6.0.5 現在では転送されません")]),t._v(" "),a("li",[t._v("今後のアップデートにより転送可能になる予定です")])])]),t._v(" "),a("li",[t._v("移行先の環境変数 "),a("code",[t._v("FILE_UPLOAD")]),t._v(" に 'mongodb' か 'local' 設定されている場合\n"),a("ul",[a("li",[t._v("転送されます")])])]),t._v(" "),a("li",[t._v("移行先の環境変数 "),a("code",[t._v("FILE_UPLOAD")]),t._v(" に 'gcp' が設定されており、GCP 関連の環境変数("),a("code",[t._v("GCS_API_KEY_JSON_PATH")]),t._v(", "),a("code",[t._v("GCS_BUCKET")]),t._v(", "),a("code",[t._v("GCS_UPLOAD_NAMESPACE")]),t._v(")が設定されている場合\n"),a("ul",[a("li",[t._v("転送されます")])])])])])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("移行先で環境変数 "),a("code",[t._v("FILE_UPLOAD_DISABLED=true")]),t._v(" が設定されている場合は添付ファイルの移行はできません。")])])])}),[],!1,null,null,null);e.default=l.exports}}]);