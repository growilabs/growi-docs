# Render a page list using the lsx

lsx can render a list of pages that exist under a specific page.

For example, if you write  `$lsx()` on a page, you can render a list of pages under that page as shown in the image.

This is useful when you want to list shortcuts to multiple pages.

<img :src="$withBase('/assets/images/en/lsx.png')" alt="lsx">

## Render a page list under the specified page

There are two ways to specify a page: absolute path from the root page or relative path from the page being edited.

If you specify a page that does not exist, an error message like `$lsx(/sample) has no contents` will be displayed.

- `$lsx(/user)` render a page list of the main page's direct child called "user".
- `$lsx (./sample)` render a page list under the current page's child called "sample".

## Setting options

The lsx has many option settings. To set multiple options, separate each one with a comma as follows: `$lsx(/page, depth=1, sort=createdAt, reverse=true)`.

### List of options

| Parameter name  | Default value  |  Explanation | Additional details |
| --- | --- | --- | --- |
|  num   |  50   | Specify the number of pages| [num option details](./lsx.html#num-オプション) |
|  depth   |  not set  | Specify the maximum depth| [depth option details](./lsx.html#depth-オプション) |
|  sort   |  path   | Specify page sort order| [sort option details](./lsx.html#sort-オプション) |
|  reverse   |  false   | Reverse the order of pages| [reverse option details](./lsx.html#reverse-オプション) |
|  filter   |  not set   | Filter pages | [filter option details](./lsx.html#filter-オプション) |

### num

You can specify the number of pages to render. The default value is 50.

- `$lsx(num=N)` : Renders N pages, where N is a natural number.
- You can use `:` or `+` to control the pages to render.
  - `$lsx(num=1:10)` : Render pages 1st through 10th.
  - `$lsx(num=2:)` : Render pages from the 2nd to the last.
  - `$lsx(num=5+2)` : Render pages from the 5th to the next 2 (5th,6th,7th).

### depth

You can specify the maximum depth of the hierarchy to render. By default, all existing pages are rendered.

- `$lsx(depth=N)` : Render pages down N levels starting from the current page or the specified page.
- You can use `:` or `+` o control the pages to be render.
  - `$lsx(depth=2:3)` : Render pages 2 to 3 levels down.
  - `$lsx(depth=2:)` : Render pages from the 2 level to the lowest level.
  - `$lsx(depth=1+2)` : Render pages from 1 level down to the next 2 levels (1,2,3 levels).

### sort
  
The order of the page list can be specified as follows:

- `$lsx(sort=path)` (default) : Render pages in order of page name (ascending order of page name character code).
- `$lsx(sort=createdAt)` : Render in ascending order of creation date (oldest first).
- `$lsx(sort=updatedAt)` : Render in ascending order of last modified date (oldest first).

### reverse

Reverse the render order.

- `$lsx(sort=updatedAt, reverse=true)` : Render in descending order of last modified date (oldest first).

### filter

You can filter the render pages by the string contained in the page name. Filter's match type is partial match.

- `$lsx(filter=2023)` : Only pages with `2023` in the page name will be render.

## GitHub

The `$lsx()` function used in GROWI originated as the [Pukiwiki lsx plugin](http://ukiya.sakura.ne.jp/index.php?PukiWiki%2F1.4%2F%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%2F%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%2F%E7%8B%AC%E8%87%AA%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%82%82%E3%81%AE%2Flsx)

The GROWI implementation can be found on our [GitHub](https://github.com/weseek/growi-plugin-lsx)
