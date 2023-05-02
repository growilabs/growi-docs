# Add a page hierarchy using lsx

You can add a page hierarchy of the current page or of another page using `$lsx()`, as shown below.

![lsx](/assets/images/lsx_gif.gif)

This is useful for parent pages with large child hierarchy structures.

## Add a page hierarchy

By default, the command `$lsx()` will produce the hierarchy of the current page.  You can also add hierarchies of other pages:

By supplying a page name beginning with `/`, you can provide a page path from your wiki's main page.  For example, if you enter `$lsx(/user)`, the hierarchy of the main page's direct child called "user" will be produced.

By beginning your page name with `.`, you can provide a page path from the current page.  For example, `$lsx (./sample)` will provide the hierarchy under the current page's child called "sample".

[//]: <> (TODO: 紹介してるエラーメッセージの例を表そう。)
If the provided page name does not correspond to a page in the wiki, an error message will be displayed.

## Additional features of lsx

`$lsx()` allows you to set many additional options to customize your page hierarchy display.  You can use any combination of them, each separated by a comma, for example:

`$lsx(/page, depth=1, sort=createdAt, reverse=true)`

The options you can set include:

| Parameter name    | Default value    |  Explanation   | Additional details |
| --- | --- | --- | --- |
|  num   |  not set(< growi-plugin-lsx 4.0.0), 50(>= growi-plugin-lsx 4.0.0)   | Specify the number of pages in the hierarchy.| [num option details](./hierarchical.html#num) |
|  depth   |  not set   | Specify the maximum hierarchy depth to display.| [depth option details](./hierarchical.html#depth) |
|  sort   |  path   | Specify the sort order of the hierarchy. | [sort option details](./hierarchical.html#sort) |
|  reverse   |  false   | Reverse the order of the hierarchy.| [reverse option details](./hierarchical.html#reverse) |
|  filter   |  not set   | Filter the hierarchy according to some parameters. | [filter option details](./hierarchical.html#filter) |

Additional details are as follows.

### `num`

- Specify the number of pages to display in the hierarchy.

Example: `$lsx(num=5)`

You can also specify a page range using `num`:

- `$lsx(num=1:10)` will display the 1st to the 10th result.

- `$lsx(num=2:)` will display the 2nd result to the end of the hierarchy (skipping the first result).

- `$lsx(num=5+2)` will display the 5th result, and then the next 2 results (5th, 6th, 7th).

### `depth`

- Specify the maximum depth of the hierarchy

Example: `$lsx(depth=1)`.

By default, the entire hierarchy is displayed with no depth limit.

Ranges can be specified in the same way as `num`.

### `sort`
  
The order of the page list can be specified as follows:

- `$lsx(sort=path)`

  Lexicographic (alphabetical) sort by page name.  This is the default setting.

- `$lsx(sort=createdAt)`

  Sort by page created date in increasing order (oldest page first).

- `$lsx(sort=updatedAt)`

  Sort by page last updated date in increasing order.

### `reverse`

- Reverse the sort order.  Supported values are `true` and `false`.
  Default value is `false`.

Example: `$lsx(sort=updatedAt, reverse=true)`

In this example, the hierarchy will be displayed in order of page last updated date, with the most recently updated page first.

### `filter`

- Filter the hierarchy to display only pages containing a specified text in the title

Example: `$lsx(filter=2019)`

In this example, only pages with `2019` in the page name are displayed in the list.

## GitHub

The `$lsx()` function used in GROWI originated as the
[Pukiwiki lsx plugin](http://ukiya.sakura.ne.jp/index.php?PukiWiki%2F1.4%2F%E3%83%9E%E3%83%8B%E3%83%A5%E3%82%A2%E3%83%AB%2F%E3%83%97%E3%83%A9%E3%82%B0%E3%82%A4%E3%83%B3%2F%E7%8B%AC%E8%87%AA%E3%81%AB%E8%BF%BD%E5%8A%A0%E3%81%97%E3%81%9F%E3%82%82%E3%81%AE%2Flsx)

The GROWI implementation can be found on our
[GitHub](https://github.com/weseek/growi-plugin-lsx)

