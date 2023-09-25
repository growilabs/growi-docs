# Frontmatter を設定する

GROWI では、v6.2.0 以降 Markdown ファイルで YAML Frontmatter を使うことができます。Frontmatter に記載された内容はメタデータとして扱われ、本文には表示されません。

## Frontmatter の書き方

以下のように、ページの先頭に `---` で囲まれたブロックを記載します。

~~~frontmatter
---
marp: true
header: "Frontmatter"
paginate: true
---
~~~

## Frontmatter を使って制御できる機能一覧

- [プレゼンテーション機能](/ja/guide/features/presentation.html)
