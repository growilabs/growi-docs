# Create links between pages

In GROWI, you can create links between pages.

## How to create page links

You can create a page link by writing the path enclosed
in two square brackets (`[[ ]]`).  You can add a page
link using a relative path or an absolute path.

A relative path is a path beginning with a child page of
the current page.  If you want to reference the parent
page, use two periods `..`.

An absolute path is a path from the wiki's root page `/`.
You can specify an absolute path by beginning your link
with `/`.

You can specify a title for your link by adding the title
followed by a right-arrow `>` at the beginning of your
link.

```markdown
## How to write page links
[[This is title with a relative path>../samplepage]]
[[This is an absolute path>/mypage]]
This link has no title: [[../../GROWI]]
```

![page_linker](./images/page_linker.png)

### GitHub

This functionality is based on the linker library
Pukiwiki.  You can find it on GitHub here:

[GitHub](https://github.com/weseek/growi-plugin-pukiwiki-like-linker)
