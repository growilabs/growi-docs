# YAML front-matter

From v6.2.0 onwards, GROWI supports YAML front-matter in Markdown files; the content in front-matter is processed as metadata and is not visible in the page.

## How to write front-matter

Add a block surrounded by `---` at the beginning of the page as follows.

~~~frontmatter
---
marp: true
header: "Front-matter"
paginate: true
---
~~~

## Features that can be controlled using front-matter

- [Presentation](/en/guide/features/presentation.html)
