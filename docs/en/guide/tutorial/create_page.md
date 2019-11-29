# create page

## After installation

After installation,
when you visit the GROWI URL it will be a screen to set the administrator ID.

After logging in to GROWI, the following screen will appear.

Start the tutorial here.

## Create new page

GROWI is a system for creating wiki pages.

Let's start with creating a new page.

Click the “Create” button
at the top right of the screen to display the page creation modal.

There are multiple buttons. Enter the tutorial and page name in the image position.

Click the create button.

Moves to the page edit screen.

Copy the contents of the following markdown description
and paste it into the GROWI editing screen.

```
# First page
## Header1
* List1
* List2
## Header2
1. Number list
2. Number list
```

When pasting,
a preview reflecting the contents in real time as shown below is displayed
on the right side of the screen.


Let's actually enter characters on the edit screen
and check the reflection on the preview screen on the right.

After editing, click the "Create" button.

Click to create an article,
and the page can be referenced as shown in the image below.

You can switch to “Edit” tab and “View” tab to edit mode and view mode.

Let's edit the created page.


## Headline and hierarchy

You can add headline to the pages using a pound sign.
A space is required immediately after the `#`.

Each time you increase the number of pound signs by two or three, it will be hierarchized.

When you create a headline,
an index is automatically created on the right side of the page.

## Documents and hierarchy

You can write a text document on the page. The document can be hierarchized.

Let's use paragraphs using either hyphens or asterisks.

```
# Learn how to use GROWI
On this page, you will learn how to use GROWI by following the GROWI Docs tutorial.

## Creating and editing pages
Create and edit pages.

## Using headline and text
Learn how to use headline and text.

### Header
When you create a headline, an index is created on the right side of the page.

### Documents
Write the text on the page as Documents. The sentence can be a paragraph.

You can create a paragraph with any of the following symbols and spaces.
- hyphen`-`
- asterisk`*`
    - Further hierarchies
        - It is further hierarchized
    - Move back one level
```

When you start the next line of the first paragraph,
type two spaces or press the Tab key to indent and write the text.

You can check that the document is hierarchized as paragraphs on the preview screen.

Organize the content of the document by layering the text.

It is also a point of creating a wiki that is easy to read if the text becomes longer,
and that it is hierarchized actively.


## Create a link to a web page

- Create a link to a web page

  The input field for the link is inserted with the button at the top of the edit screen.
  You can create a link by connecting `[]` brackets and `()` brackets.

  Create a title in `[]` and a page URL in `()`.

  ```
  []()
  [GROWI Docs](https://docs.growi.org/)
  ```
## Insert an image

- The image insertion field is inserted with the image browse button.
You can insert an image by connecting the excursion
with the `[]` bracket and the `()` bracket.


``` 
### Insert an image
  ![]()
  ![growi](https://growi.org/assets/images/logo.png)
```


- Using the Attach function at the bottom of the edit screen.




  The Attach function allows you to upload files and save them to AWS or GCS.

  To upload files with the Attache function,
  settings are required on the management screen.

  Click [here](/en/admin-guide/management-cookbook/attachment.html#mongodb-gridfs-%E3%81%B8%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)
  for how to set.


## Use emoji

In GROWI, you can use emoji.


- How to use

```
## use emoji　:beginner:
```

As mentioned above, you can enclose specific emojis in `:`.

Please refer [here](/en/guide/features/emoji.html) for the list of target emoji.

## Useful text usage

GROWI makes it easy to read texts using a number of techniques when editing text.


- Emphasis
- Highlighted red background inversion
- Horizon
- Strikethrough
- Paragraph emphasis

Let's paste the following Mackdown description into the article and check the preview.


```
### Useful text usage
Here are some useful ways to write various sentences and paragraphs.
- Emphasis
  Surround the point you want to **emphasize** with two asterisks.
  
    ```
    **Emphasis**
    ```
  
  
- Highlighted red background inversion
  Enclose the point you want to emphasize with `backticks`.
  
    ```
    `backticks`
    ```
  
- Horizon
  
  Write three consecutive hyphens to create a horizontal line.
  
  ---
  
- Strikethrough
  
  In the sentence,
  ~~ I want to erase ~~ I enclose the part that I want to strike out with two tildes.

  
- Paragraph emphasis
  The background can be reversed and coordinated as a paragraph.
  Surround with three back quotes.
```


## テーブルを作成する

半角パイプライン`|` を2つ続けて入力し、Enter キーを押すと、テーブルが作成されます。

また、編集画面のバーにあるテーブルボタンをクリックする事でも、テーブルが作成できます。



作成したテーブルを、View モードの画面から編集する事も出来ます。


View モードでテーブルにカーソルを当てると、下記のようにアイコンが表示されます。


クリックすると、下記のようにテーブルを編集することが出来ます。


## ページ一覧を出力する

GROWI では、作成したページを一覧出力する便利な機能があります。

詳細は[こちら](/en/guide/tips/hierarchical.html)に記載されています。

簡単な使い方だけ覚えましょう。

トップページへ移動し、下記のように lsx を記載しましょう。

```
$lsx()
```


すると、編集中の記事の配下のページ一覧が出力されます。

一覧出力してみると、ページを移動して階層をもっとカスタマイズしたくなります。

階層の修正やページの移動については[こちら](/en/guide/features/page_operation.html)を参照して下さい。

さまざまな階層を整理して、GROWI での情報共有がもっと手軽になるように自由に編集できます。

ここまでチュートリアルに沿って進めたら、どんどんページを作成して Wiki を育てていきましょう。