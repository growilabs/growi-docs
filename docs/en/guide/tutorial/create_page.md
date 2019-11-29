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

段落として文書が階層化されるのがプレビュー画面で確認できます。

本文の階層化で、文書の内容を整理しましょう。


文章が長くなったら、積極的に階層化するのも読みやすい wiki 作成のポイントです。

## Web ページへのリンクを作成

- Wiki ページへのリンクを作成

  編集画面上部のボタンで、リンク用の入力欄が挿入されます。 `[]` 括弧と `()` 括弧をつなげるとリンクが作成出来ます。

  `[]` の中にタイトルを、`()` の中にページ URL を作成します。

  ```
  入力欄
  []()
  [GROWI Docs](https://docs.growi.org/)
  ```



- 手書きで文字とリンクを作成

  手書きで `[]` と `()` 記号を組み合わせてリンクを作成することも出来ます。

```
  [タイトル](http://growi.org)
```

## 画像を挿入する

- 画像参照ボタンで画像挿入欄が挿入されます。エクス蔵メーションと `[]` 括弧と `()` 括弧をつなげると画像挿入が出来ます。

``` 
### 画像の挿入
  ![]()
  ![growi](https://growi.org/assets/images/logo.png)
```


- 編集画面下部の Attach 機能を利用する



  Attach 機能では、ファイルをアップロードし、AWS や GCS へ保存する事が出来ます。
  Attache 機能でファイルをアップロードするには管理画面で設定が必要です。

  設定方法については[こちら](/en/admin-guide/management-cookbook/attachment.html#mongodb-gridfs-%E3%81%B8%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)をご覧ください。


## 絵文字(emoji) を使う

GROWI では、絵文字を利用することが出来ます。

- 使い方

```
## 絵文字を使う　:beginner:
```


上記のように、特定の絵文字を `:` で囲い利用することが出来ます。

対象の絵文字一覧は[こちら](/en/guide/features/emoji.html)を参照してください。

## 便利な本文の使い方

GROWI では、本文の編集時に多数のテクニックで文章を読みやすくすることが出来ます。

- 強調
- 強調太字
- 強調赤字背景反転
- 水平線
- 取り消し線
- 段落強調

それぞれ、以下の Mackdown 記述をそのまま記事へ貼り付けて、実際にプレビューを確認してみましょう。


```
### 便利な本文の使い方
いろいろな文章や段落の便利な書き方を紹介します。
- 強調
  **強調** したい箇所を半角アスタリスク2つで囲います。
  
    ```
    **強調**
    ```
  
  
- 強調赤字背景反転
  `強調` したい箇所をバッククォートで囲います。
  
    ```
    `強調`
    ```
  
- 水平線
  
  半角ハイフンを3つ連続して書くと、水平線となります。
  
  ---
  
- 取り消し線
  
  文章の中で~~消したい~~取り消し線を付けたい箇所を半角チルダ2つで囲います。
  
- 段落強調
  段落として背景反転して協調させる事が出来ます。
  バッククオート3つで囲います。
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