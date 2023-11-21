# マークダウン設定

マークダウンの詳細は、以下のページで設定できます。  

- 管理ページ ＞ マークダウン設定(`/admin/markdown` ページへ遷移)
ユーザーユーザー

## Line Break設定

GROWI のデフォルトの Markdown 記法では、単一の改行は`<br>`として扱われません。  
単一の改行が`<br>`として扱われるようにするには、Line Break 設定で ON/OFF を切り替えます。

<img :src="$withBase('/assets/images/ja/markdown_linebreak_1.png')" alt="markdown_linebreak_1.png">

- Line Break 設定が有効の場合
  - ページテキストやコメント中の改行を、HTML内で`<br>`として扱います

<img :src="$withBase('/assets/images/ja/markdown_linebreak_2.png')" alt="markdown_linebreak_2.png">

- Line Break 設定が無効の場合
  - `<br>`を入力するか、半角スペースを2つ入れて改行します

<img :src="$withBase('/assets/images/ja/markdown_linebreak_3.png')" alt="markdown_linebreak_3.png">

## インデント設定

- 管理者は、管理画面で以下の設定ができます。
  - 既定のインデント幅
  - ユーザーによるインデント幅の変更許可（ ON/OFF の切り替え）

<img :src="$withBase('/assets/images/ja/markdown_indent_1.png')" alt="markdown_indent_1.png">

- ユーザーによるインデント幅の変更を許可する設定にしている場合、
ユーザーは、ページ編集画面の下部より、幅を指定することができます。

<img :src="$withBase('/assets/images/ja/markdown_indent_2.png')" alt="markdown_indent_2.png">


## XSS(Cross Site Scripting)対策設定

マークダウンテキスト内の HTML タグの扱いを設定し、悪意のあるプログラムからの攻撃を防ぎます。  
「おすすめ設定」と「カスタムホワイトリスト」のどちらかを選択いただけます。

<img :src="$withBase('/assets/images/ja/markdown_xss_1.png')" alt="markdown_xss_1.png">

