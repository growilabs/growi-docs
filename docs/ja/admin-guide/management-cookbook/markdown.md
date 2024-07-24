# マークダウン設定

マークダウンの詳細は、以下のページで設定できます。  

- 管理ページ ＞ マークダウン設定(`/admin/markdown` ページへ遷移)

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
ユーザーは、ページ編集画面の左下にある「エディタ設定」からインデントを選択することで、幅を指定できます。

<img :src="$withBase('/assets/images/ja/markdown_indent_2.png')" alt="markdown_indent_2.png">


## XSS(Cross Site Scripting)対策設定

マークダウンテキスト内の HTML タグの扱いを設定し、悪意のあるプログラムからの攻撃を防ぎます。  
「おすすめ設定」と「カスタムホワイトリスト」のどちらかを選択できます。

<img :src="$withBase('/assets/images/ja/markdown_xss_1.png')" alt="markdown_xss_1.png">

### おすすめ設定

- GROWI の利用には支障のない範囲で HTML を利用できるセキュアな設定です
- ユーザーは設定値を変更できません

<img :src="$withBase('/assets/images/ja/markdown_xss_2.png')" alt="markdown_xss_2.png">

### カスタムホワイトリスト

- どのような HTML タグ、タグ属性を許可するかを管理者自身で設定できます
- タグ名
  - カンマ区切りのタグ名のリストを入力してください
- タグ属性
  - JSON Object の string 表現を入力してください
  - JSON Object のキーにはタグ名、値には許可したいタグ属性の JSON Array の string 表現を入力してください
    - `"*"` をキーとすることで全てのタグに対して許可するタグ属性を指定できます


#### 設定例

空にすると全ての HTML タグおよびタグ属性を無効化します。

<img :src="$withBase('/assets/images/ja/markdown_xss_3.png')" alt="markdown_xss_3.png">

たとえば、ページ本文に `<h1>title</h1>` のように記述しても、HTML が機能していないため、 `h1` が「見出し 1 」として扱われません。

<img :src="$withBase('/assets/images/ja/markdown_xss_4.png')" alt="markdown_xss_4.png">

もし、「タグ名」欄に `h1` を追加した場合は、追加した HTML が機能します。

<img :src="$withBase('/assets/images/ja/markdown_xss_5.png')" alt="markdown_xss_5.png">

HTML が機能しているため、 `h1` が「見出し 1 」として扱われます。

<img :src="$withBase('/assets/images/ja/markdown_xss_6.png')" alt="markdown_xss_6.png">
