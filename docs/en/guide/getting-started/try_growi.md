# Try GROWI on the demo site

This guide will walkthrough how to quickly create a page, create a child page, and navigate between parent and child pages.

[[toc]]

## Setup

[Proceed to the demo site](https://demo.growi.org/) and log in with the account credentials provided.

## Create a page

Create a page by clicking the Create button in the upper right corner of the screen.

<img :src="$withBase('/assets/images/create_page_button.png')" alt="">

[//]: <> (TODO: Create This Pageと言う名はよくなくて英語サイト完成したら変わってください。)
Choose a title for your page by typing it in the box titled Create This Page, then click Create.

[//]: <> (TODO: 下のイメージはホワイトスペース多くて、レンダーされたページは綺麗ではありません)
<img :src="$withBase('/assets/images/create_page_dialog.png')" alt="">

Paste the following content in the body of the page:

```markdown
# FirstPage
## Header 1

* List 1
* List 2

## Header 2

1. Number List 1
2. Number List 2
```

A preview reflecting the contents is displayed on the right side of the screen, updating in real time.

<img :src="$withBase('/assets/images/begin_create_page.png')" alt="Create Button">

Press the Create button at the bottom right of the screen to finish creating the page.

<img :src="$withBase('/assets/images/save_button.png')" alt="Create Dialog">

::: tip
You can also save the page with **Ctrl + S**.
:::

## Create a child page

As before, click the Create button in the upper right corner of the screen to create a new page.

Use the name `/[PARENT_PAGE]/NestedPage` for your new page, replacing `[PARENT_PAGE]` with the name you created in the previous section.  For example, if you named the previous page `/MyPage`, then this page would be named `/MyPage/NestedPage`.

<img :src="$withBase('/assets/images/create_nest_page_dialog.png')" alt="">

Paste the following content in the body of the new page:

```markdown
# Nested Page
## Nested Page Header 1

* List 1
* List 2

## Nested Page Header 2

1. Number List 1
2. Number List 2
```

When you’re done, press the Create button at the bottom right of the screen to save the page.

<img :src="$withBase('/assets/images/save_button.png')" alt="">

## View parent page

You can easily navigate to the parent page from its child page by clicking the name of the parent page at the top of the child page.

<img :src="$withBase('/assets/images/title_click.png')" alt="">

## View a list of child pages

A list of child pages is displayed at the bottom of each parent page.

![](/assets
/images/page_list.png)
