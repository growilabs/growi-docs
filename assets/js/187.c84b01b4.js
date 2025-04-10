(window.webpackJsonp=window.webpackJsonp||[]).push([[187],{634:function(v,_,e){"use strict";e.r(_);var i=e(69),a=Object(i.a)({},(function(){var v=this,_=v.$createElement,e=v._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[e("h1",{attrs:{id:"ldap-連携"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ldap-連携"}},[v._v("#")]),v._v(" LDAP 連携")]),v._v(" "),e("h2",{attrs:{id:"概要"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[v._v("#")]),v._v(" 概要")]),v._v(" "),e("p",[v._v("LDAP サーバーを登録することで、LDAP によるログインが可能となります。")]),v._v(" "),e("h2",{attrs:{id:"ldap-サーバー設定"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ldap-サーバー設定"}},[v._v("#")]),v._v(" LDAP サーバー設定")]),v._v(" "),e("ol",[e("li",[v._v("管理画面のセキュリティ設定ページ(/admin/security)にアクセスし、認証機構設定の LDAP タグを開きます。")]),v._v(" "),e("li",[v._v("「Use LDAP」を ON にし、必要事項を入力します。")])]),v._v(" "),e("ul",[e("li",[v._v("サーバ URL: "),e("code",[v._v("ldaps://ホスト:ポート/BaseDN")]),v._v(" というフォーマットで入力します。\n"),e("ul",[e("li",[v._v("スキーマは "),e("code",[v._v("ldap")]),v._v(" or "),e("code",[v._v("ldaps")])]),v._v(" "),e("li",[v._v("ポートは省略可")])])]),v._v(" "),e("li",[v._v("Bind モード: LDAP サーバーに接続してユーザー検索する際の挙動を選べます。\n"),e("ul",[e("li",[v._v("Manager Bind: あらかじめ特定の DN を設定しておき、それを用いて LDAP ユーザーを検索するモード。"),e("code",[v._v("uid=admin")]),v._v(" などに権限がある場合はこちらを選択してください。")]),v._v(" "),e("li",[v._v("User Bind: GROWI のログインフォームに入力したユーザー名から動的に DN を作成し、それを用いて LDAP ユーザーを検索するモード。")])])]),v._v(" "),e("li",[v._v("Bind DN\n"),e("ul",[e("li",[v._v("ディレクトリサービスに認証する際のアカウント DN を入力してください。")]),v._v(" "),e("li",[v._v("User Bind にて、ログイン時に入力されるユーザー名を使用するには"),e("code",{pre:!0},[v._v("{{username}}")]),v._v("の形式を使用してください。\n"),e("ul",[e("li",[v._v("例: "),e("code",{pre:!0},[v._v("uid={{username}},dc=example,dc=com")])])])])])]),v._v(" "),e("li",[v._v("Bind DN パスワード\n"),e("ul",[e("li",[v._v("Manager Bind の場合のみ、使用するパスワードを入力してください。（注: MongoDB 内には当該 DN の平文パスワードが保存されます）")]),v._v(" "),e("li",[v._v("User Bind の場合は、ログイン時のパスワードが使用されます。")])])]),v._v(" "),e("li",[v._v("検索フィルター\n"),e("ul",[e("li",[v._v("検索フィルターを用いると、認証されるユーザーを一意に決定させることができます。")]),v._v(" "),e("li",[v._v("ログイン時のユーザー名を使用するには "),e("code",{pre:!0},[v._v("{{username}}")]),v._v(" の形式を使用してください。")]),v._v(" "),e("li",[v._v("空欄の場合は "),e("code",{pre:!0},[v._v("(uid={{username}})")]),v._v(" が使用されます。")]),v._v(" "),e("li",[v._v("例1: "),e("code",{pre:!0},[v._v("(uid={{username}})")]),v._v(" "),e("ul",[e("li",[v._v("ログインフォームに入力したユーザー名が uid 属性と一致する LDAP ユーザーをピックアップ")])])]),v._v(" "),e("li",[v._v("例2: "),e("code",{pre:!0},[v._v("(|(uid={{username}})(mail={{username}}))")]),v._v(" "),e("ul",[e("li",[v._v("ログインフォームに入力したユーザー名が uid 属性または mail 属性と一致する LDAP ユーザーをピックアップ")])])]),v._v(" "),e("li",[v._v("例3: "),e("code",{pre:!0},[v._v("(&(uid={{username}})(memberOf=cn=manager,ou=group,dc=example,dc=com))")]),v._v(" "),e("ul",[e("li",[v._v("アクセス可能なユーザーを絞る")])])])])])]),v._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[v._v("設定が反映されているか確認します。")])]),v._v(" "),e("ul",[e("li",[v._v("ログアウトし、ログイン画面(/login)にアクセスします。")]),v._v(" "),e("li",[v._v("LDAP に登録されているアカウントでログインできれば設定完了です。")])]),v._v(" "),e("h2",{attrs:{id:"attribute-mapping-オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#attribute-mapping-オプション"}},[v._v("#")]),v._v(" Attribute Mapping (オプション)")]),v._v(" "),e("p",[v._v("LDAP アカウントをもとに GROWI アカウントを新規作成する際に、GROWI アカウントの以下の情報に対して LDAP アカウントのどの値( "),e("code",[v._v("uid")]),v._v(", "),e("code",[v._v("cn")]),v._v(" 等)を紐づけるか指定できます。")]),v._v(" "),e("ul",[e("li",[v._v("username: デフォルトでは LDAP アカウントの "),e("code",[v._v("uid")]),v._v(" が適用されます。(アカウント作成後、username は変更できません。)")]),v._v(" "),e("li",[v._v("Mail: デフォルトでは LDAP アカウントの "),e("code",[v._v("mail")]),v._v(" が適用されます。")]),v._v(" "),e("li",[v._v("Name: 未指定の場合 Name は空欄になります。")])]),v._v(" "),e("p",[v._v("新規にログインしたユーザーの "),e("code",[v._v("username")]),v._v(" が一致するローカルアカウントが存在する際に自動で紐付けたい場合は "),e("code",[v._v("新規ログイン時、username が一致したローカルアカウントが存在した場合は自動的に紐付ける")]),v._v(" にチェックを入れてください。(注: username の一致を以て同一ユーザーであるとみなすので、セキュリティに注意してください)\n")]),v._v(" "),e("h2",{attrs:{id:"グループ検索フィルター-オプション"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#グループ検索フィルター-オプション"}},[v._v("#")]),v._v(" グループ検索フィルター（オプション）")]),v._v(" "),e("p",[v._v("指定した条件を満たす posixGroup が存在した場合のみログインできるようにします。この機能を有効にする場合は、セキュリティ設定ページの認証機構設定の LDAP タグにて、以下の値を設定してください。")]),v._v(" "),e("ul",[e("li",[v._v("グループ検索ベース DN: グループを検索する際にベース DN として扱われる DN\n例: "),e("code",[v._v("ou=group,dc=example,dc=com")])]),v._v(" "),e("li",[v._v("グループ検索フィルター: グループフィルターに用いるクエリです。このクエリにヒットするグループがあった時のみ、LDAP でのログインが成功します。ログイン対象ユーザーオブジェクトのプロパティーで置換する場合は "),e("code",{pre:!0},[v._v("{{dn}}")]),v._v(" を用いてください。\n"),v._v("\n例: "),e("code",{pre:!0},[v._v("(&(cn=group1)(memberUid={{dn}}))")]),v._v(" とすると "),e("code",[v._v("cn=group1")]),v._v(" と、ユーザーの "),e("code",[v._v("uid")]),v._v(" を含む "),e("code",[v._v("memberUid")]),v._v(" を持つグループにヒットします("),e("code",[v._v("ユーザーの DN プロパティー")]),v._v(" がデフォルトの "),e("code",[v._v("uid")]),v._v(" から変更されていない場合)\n")]),v._v(" "),e("li",[v._v("ユーザーの DN プロパティー: グループ検索フィルター内の "),e("code",{pre:!0},[v._v("{{dn}}")]),v._v(" に置換される、ユーザーオブジェクトのプロパティー\nデフォルト: uid")])])])}),[],!1,null,null,null);_.default=a.exports}}]);