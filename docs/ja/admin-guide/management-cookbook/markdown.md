# マークダウン設定

マークダウンの詳細は、以下のページで設定できます。  

- 管理ページ ＞ マークダウン設定(`/admin/markdown` ページへ遷移)

## Line Break設定

GROWI のデフォルトの Markdown 記法では、単一の改行は`<br>`として扱われません。  
単一の改行が`<br>`として扱われるようにするには、Line Break 設定で ON/OFF を切り替えます。

<img :src="$withBase('/assets/images/ja/markdown_1.png')" alt="markdown_1.png">

## インデント設定

以下の設定ができます。

- 既定のインデント幅
- ユーザーによるインデント幅の変更許可（ ON/OFF の切り替え）

<img :src="$withBase('/assets/images/ja/markdown_2.png')" alt="markdown_2.png">

## XSS(Cross Site Scripting)対策設定

マークダウンテキスト内の HTML タグの扱いを設定し、悪意のあるプログラムからの攻撃を防ぎます。　　
「おすすめ設定」と「カスタムホワイトリスト」のどちらかを選択いただけます。

<img :src="$withBase('/assets/images/ja/markdown_3.png')" alt="markdown_3.png">

