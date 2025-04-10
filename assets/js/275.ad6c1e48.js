(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{721:function(t,a,s){"use strict";s.r(a);var e=s(69),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"slack-連携"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slack-連携"}},[t._v("#")]),t._v(" Slack 連携")]),t._v(" "),s("p",[t._v("GROWI を Slack と連携することによって様々なコマンドを実行できます。\nセットアップについては"),s("RouterLink",{attrs:{to:"/ja/admin-guide/management-cookbook/slack-integration/"}},[t._v("管理者ガイド")]),t._v("をご参照ください。")],1),t._v(" "),s("h2",{attrs:{id:"growi-bot-でできること"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#growi-bot-でできること"}},[t._v("#")]),t._v(" GROWI bot でできること")]),t._v(" "),s("h3",{attrs:{id:"ヘルプコマンド"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ヘルプコマンド"}},[t._v("#")]),t._v(" ヘルプコマンド")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("/growi help")]),t._v(" を入力すると GROWI bot で使うことができる、コマンド一覧が表示されます。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/growi-help.gif"),alt:"HackMD Demo"}})])]),t._v(" "),s("h3",{attrs:{id:"ページの作成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ページの作成"}},[t._v("#")]),t._v(" ページの作成")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/growi note")]),t._v(" を入力すると GROWI 内に新規ページが作成されます。")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/growi-note.gif"),alt:"HackMD Demo"}}),t._v(" "),s("h3",{attrs:{id:"ワークスペース内の全文検索"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ワークスペース内の全文検索"}},[t._v("#")]),t._v(" ワークスペース内の全文検索")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("/growi search [キーワード]")]),t._v(" を入力すると検索結果が表示されます。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("例: "),s("code",[t._v("/growi search example")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-full-text-search-display-result-command.png"),alt:"slack-bot-full-text-search-display-result-command"}})]),t._v(" "),s("li",[s("p",[t._v("検索結果")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-full-text-search-display-result.png"),alt:"slack-bot-full-text-search-display-result"}})]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Next")]),t._v(" ボタンをクリックすると、次の検索結果を表示します。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-full-text-search-click-next.png"),alt:"slack-bot-full-text-search-click-next"}})]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Share")]),t._v(" ボタンをクリックすると、チャンネル内に共有されます。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-full-text-search-click-share.png"),alt:"slack-bot-full-text-search-click-share"}})])])]),t._v(" "),s("li",[s("p",[t._v("Slack ワークスペースを複数の GROWI に登録している場合、複数の GROWI から横断検索できます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("例: "),s("code",[t._v("/growi search example")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-full-text-search-display-result-command.png"),alt:"slack-bot-full-text-search-display-result-command"}})]),t._v(" "),s("li",[s("p",[t._v("検索結果")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-search-multi-growi.png"),alt:"slack-bot-search-multi-growi"}})])])])]),t._v(" "),s("h3",{attrs:{id:"slack-チャンネル内の会話からページを作成する-alpha"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slack-チャンネル内の会話からページを作成する-alpha"}},[t._v("#")]),t._v(" Slack チャンネル内の会話からページを作成する (Alpha)")]),t._v(" "),s("ol",[s("li",[s("code",[t._v("/growi keep")]),t._v(" を入力します。")]),t._v(" "),s("li",[s("code",[t._v("Oldest datetime")]),t._v(" にページで使用したい最も古いメッセージの時刻を入力します。")]),t._v(" "),s("li",[s("code",[t._v("Newest datetime")]),t._v(" にページで使用したい最も新しいメッセージの時刻を入力します。")]),t._v(" "),s("li",[s("code",[t._v("Page path")]),t._v(" にページの作成パスを入力し、"),s("code",[t._v("Create page")]),t._v(" します。 "),s("code",[t._v("Oldest datetime")]),t._v(" から "),s("code",[t._v("Newest datetime")]),t._v(" の間の会話が作成されるページに反映されます。")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/growi-keep.gif"),alt:"HackMD Demo"}}),t._v(" "),s("h3",{attrs:{id:"slack-内で-growi-ページのプレビュー-unfurl-機能"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slack-内で-growi-ページのプレビュー-unfurl-機能"}},[t._v("#")]),t._v(" Slack 内で GROWI ページのプレビュー (Unfurl 機能)")]),t._v(" "),s("p",[t._v("Unfurl 機能を利用することで Slack に GROWI のリンクを共有した際にスニペットを表示できます。\nデフォルトでは無効のため、管理画面から有効化する必要があります。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-unfurl.png"),alt:"slack-bot-unfurl"}}),t._v(" "),s("p",[t._v("Public ではないページのスニペットは表示されません。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-unfurl-private-page.png"),alt:"slack-bot-unfurl-private-page"}}),t._v(" "),s("h3",{attrs:{id:"接続中の-growi-を確認する"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接続中の-growi-を確認する"}},[t._v("#")]),t._v(" 接続中の GROWI を確認する")]),t._v(" "),s("p",[s("code",[t._v("/growi status")]),t._v(" と入力することで、Slack ワークスペースと連携している GROWI を確認できます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-growi-status.png"),alt:"slack-bot-growi-status"}}),t._v(" "),s("h3",{attrs:{id:"slack-ワークスペースと-growi-app-との連携を解除する"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#slack-ワークスペースと-growi-app-との連携を解除する"}},[t._v("#")]),t._v(" Slack ワークスペースと GROWI App との連携を解除する")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("/growi unregister [連携解除したい GROWI App の URL1] [連携解除したい GROWI App の URL2] ...")]),t._v(" と入力するとモーダルが表示されます。(※ Bot type が Official bot と Custom bot with proxy の場合のみ使えます。)")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("入力例: "),s("code",[t._v("growi unregister http://example.com http://growi.jp")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-unregister-input-eg.png"),alt:"slack-bot-unregister-input-eg"}})]),t._v(" "),s("li",[s("p",[t._v("表示されるモーダル")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-unregister-modal.png"),alt:"slack-bot-unregister-modal"}})])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Submit")]),t._v(" ボタンをクリックします。")])]),t._v(" "),s("li",[s("p",[t._v("以下のように表示されたら、連携解除が完了しています。")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/assets/images/slack-bot-unregister-completed.png"),alt:"slack-bot-unregister-completed"}})])])])}),[],!1,null,null,null);a.default=r.exports}}]);