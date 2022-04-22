# ページリンクを記述する

GROWI では、各ページへのリンクの書き方として、以下のように参照形式で記述できます。

- Markdown 標準方式
- GROWI 独自方式
- Pukiwiki like linker方式

## Markdown 標準方式

``[表示テキスト](URL)``でリンクに変換されます。

- 例

```markdown
[Google](https://www.google.co.jp/)
```

[Google](https://www.google.co.jp/)

## GROWI 独自方式

書き方は、`[` と `]` のあいだに、パスを記載します。
`&lt;`の後に配下ページを`/`をつけて記載します。

- 例

```markdown
[/Sandbox]
&lt;/user/admin1>
```

![page_linker1](/assets/images/linker_growi.png)

## Pukiwiki like linker

書き方は、`[[` と `]]` のあいだに、タイトルとパスを記載します。

`タイトル` と `参照ページ` は `>` 記号で区切り `タイトル>参照ページ` のように記述します。

タイトルは省略可能です。参照ページは、記述中のページを基点とした相対リンクで記載できます。

- 例

```markdown
[[./Bootstrap3]]
Bootstrap3のExampleは[[こちら>./Bootstrap3]]
```

![page_linker2](/assets/images/linker_pukiwiki.png)
