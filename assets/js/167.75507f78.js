(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{615:function(a,t,s){"use strict";s.r(t);var e=s(69),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mongodb-の定期バックアップ"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mongodb-の定期バックアップ"}},[a._v("#")]),a._v(" MongoDB の定期バックアップ")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#前提条件"}},[a._v("前提条件")])]),s("li",[s("a",{attrs:{href:"#バックアップ用コンテナによる管理"}},[a._v("バックアップ用コンテナによる管理")])]),s("li",[s("a",{attrs:{href:"#docker-compose-による管理"}},[a._v("docker-compose による管理")])]),s("li",[s("a",{attrs:{href:"#google-cloud-platform-による管理"}},[a._v("Google Cloud Platform による管理")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),s("ul",[s("li",[a._v("バックアップ/リストアは、"),s("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[a._v("weseek/mongodb-awesome-backup"),s("OutboundLink")],1),a._v(" を利用します")])]),a._v(" "),s("h4",{attrs:{id:"必要なもの"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#必要なもの"}},[a._v("#")]),a._v(" 必要なもの")]),a._v(" "),s("ul",[s("li",[a._v("docker")]),a._v(" "),s("li",[a._v("バックアップファイルをアップロードするための AWS S3 バケット\n"),s("ul",[s("li",[a._v("S3 バケットへのアクセス権を持った IAM ユーザーのアクセスキーおよびシークレットキー")])])])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("事前に "),s("RouterLink",{attrs:{to:"/ja/admin-guide/admin-cookbook/mongodb-backup.html"}},[a._v("MongoDB のバックアップ/リストア")]),a._v(" ページを確認することをお勧めします")],1)]),a._v(" "),s("h2",{attrs:{id:"バックアップ用コンテナによる管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#バックアップ用コンテナによる管理"}},[a._v("#")]),a._v(" バックアップ用コンテナによる管理")]),a._v(" "),s("ol",[s("li",[s("p",[a._v("CRONMODE を true に設定したコンテナを起動します")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MONGODB_HOST")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Target MongoDB Host"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_ACCESS_KEY_ID")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Your IAM Access Key ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("AWS_SECRET_ACCESS_KEY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Your IAM Secret Access Key"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("S3_TARGET_BUCKET_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("Target S3 Bucket URL "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("s3://"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("CRONMODE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"CRON_EXPRESSION=0 4 * * *"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  weseek/mongodb-awesome-backup\n")])])])]),a._v(" "),s("li",[s("p",[a._v("対象となる MongoDB サーバーの全てのデータベースを、毎日 AM 4:00 にバックアップするコンテナが起動します")])])]),a._v(" "),s("h4",{attrs:{id:"バックアップの世代管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#バックアップの世代管理"}},[a._v("#")]),a._v(" バックアップの世代管理")]),a._v(" "),s("ul",[s("li",[a._v("(執筆者・PR募集)")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("その他のオプションは "),s("a",{attrs:{href:"https://github.com/weseek/mongodb-awesome-backup",target:"_blank",rel:"noopener noreferrer"}},[a._v("weseek/mongodb-awesome-backup"),s("OutboundLink")],1),a._v(" を参照してください")])]),a._v(" "),s("h2",{attrs:{id:"docker-compose-による管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-compose-による管理"}},[a._v("#")]),a._v(" docker-compose による管理")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),s("p",[a._v("GROWI を "),s("RouterLink",{attrs:{to:"/ja/admin-guide/getting-started/docker-compose.html"}},[a._v("growi-docker-compose")]),a._v(" で管理している場合、更に簡単にバックアップ用コンテナを起動できます")],1)]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose/tree/master/examples/backup-mongodb-data",target:"_blank",rel:"noopener noreferrer"}},[a._v("weseek/growi-docker-compose"),s("OutboundLink")],1),a._v(" の "),s("a",{attrs:{href:"https://github.com/weseek/growi-docker-compose/tree/master/examples/backup-mongodb-data",target:"_blank",rel:"noopener noreferrer"}},[a._v("Example"),s("OutboundLink")],1),a._v(" を参考に、以下の手順を行います")])]),a._v(" "),s("ol",[s("li",[s("p",[a._v("clone")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/weseek/growi-docker-compose.git growi\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" growi\n")])])])]),a._v(" "),s("li",[s("p",[s("code",[a._v("docker-compose.override.yml")]),a._v(" をルートディレクトリにコピー")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" examples/backup-mongodb-data/docker-compose.override.yml "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])])])])]),a._v(" "),s("ol",{attrs:{start:"3"}},[s("li",[s("p",[s("code",[a._v("docker-compose.override.yml")]),a._v(" を編集し、"),s("code",[a._v("CRON_EXPRESSION")]),a._v(", "),s("code",[a._v("AWS_ACCESS_KEY_ID")]),a._v(", "),s("code",[a._v("AWS_SECRET_ACCESS_KEY")]),a._v(", "),s("code",[a._v("S3_TARGET_BUCKET_URL")]),a._v("へ環境に合わせた値を入力します\n")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[a._v("(略)\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environment")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" CRONMODE=true\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" CRON_EXPRESSION=0 4 * * *\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" AWS_ACCESS_KEY_ID=$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("Your IAM Access Key ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" AWS_SECRET_ACCESS_KEY=$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("Your IAM Secret Access Key"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" S3_TARGET_BUCKET_URL=s3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("Your Bucket Name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("/\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("...")]),a._v("\n(略)\n")])])])]),a._v(" "),s("li",[s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker-compose")]),a._v(" up\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"google-cloud-platform-による管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#google-cloud-platform-による管理"}},[a._v("#")]),a._v(" Google Cloud Platform による管理")]),a._v(" "),s("ul",[s("li",[a._v("(執筆者・PR募集)")])])])}),[],!1,null,null,null);t.default=r.exports}}]);