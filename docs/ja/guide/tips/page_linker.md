# ページリンクを記述する

GROWI では、各ページへのリンクの書き方として、以下の2つの形式で記述できます。

## Markdown 標準方式

``[表示テキスト](URL)``でリンクに変換されます。


### 例1: 内部ページ

#### Markdown

```markdown
[/Sandbox](/5a8b15576cf1e900242e0f43)
```

#### HTML

```html
<a href="/5a8b15576cf1e900242e0f43">/Sandbox</a>
```

### 例2: 外部サイト

#### Markdown

```markdown
[Google](https://www.google.co.jp/)
```

#### HTML

```html
<a href="https://www.google.co.jp/" target="_blank">Google</a>
```



## Pukiwiki like linker

`[[` と `]]` のあいだに、タイトルとパスを記載します。

`タイトル` と `参照ページ` は `>` 記号で区切り `タイトル>参照ページ` のように記述します。

タイトルは省略可能です。参照ページは、記述中のページを基点とした相対リンクで記載できます。

### 例3: 内部ページ

#### Markdown

```markdown
[[/Sandbox]]
```

#### HTML

```html
<a href="/Sandbox">/Sandbox</a>
```

#### Markdown

```markdown
数式のExampleは[[こちら>./Math]]
```

#### HTML

```html
数式のExampleは<a href="/Sandbox/Math">こちら</a>
```

### 例4: 外部サイト

#### Markdown

```markdown
[[Google>https://www.google.co.jp]]
```

#### HTML

```html
<a href="https://www.google.co.jp/" target="_blank">Google</a>
```
