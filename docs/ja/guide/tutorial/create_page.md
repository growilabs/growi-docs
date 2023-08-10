# ページを作成する

[[toc]]

## はじめに

GROWI のインストール後、初めて GROWI へアクセスすると、User ID やパスワードなどを設定する初回セットアップ画面が表示されます。

<img :src="$withBase('/assets/images/installer.png')" alt="start">

必要な項目を入力し、「Create」 ボタンを押すと以下の画面が表示されます。

<img :src="$withBase('/assets/images/home.png')" alt="start">

管理者設定については、管理者ガイドの[アプリ設定](/ja/admin-guide/management-cookbook/app-settings.html)をご参照ください。

## 新しいページを作成する

まずは新しいページを作成しましょう。

1. 画面右上の「New」ボタンをクリックすると、ページ作成ダイアログが表示されます。

    <img :src="$withBase('/assets/images/create.png')" alt="create">

    <img :src="$withBase('/assets/images/create_page1.png')" alt="create">
1. `Create page under below(「ページを以下に作成」)` の入力欄に`tutorial` と入力し、「Create」 ボタンをクリックします。

    <img :src="$withBase('/assets/images/create_page2.png')" alt="create">
1. ページの編集画面が表示されます。

    <img :src="$withBase('/assets/images/create_page3.png')" alt="create">
1. 以下の Markdown で記述されたサンプルテキストをコピーして、編集画面へ貼りつけてみましょう。
    - 貼り付けると、画面右側にページのプレビューが表示されます。内容はリアルタイムに反映されます。

    ```
    # First page
    ## Header1
    * List1
    * List2
    ## Header2
    1. Number list
    1. Number list
    ```

1. 実際に編集画面で文字を入力し、プレビュー画面に反映されることを確認しましょう。

    <img :src="$withBase('/assets/images/tutorial_page1.png')" alt="page">
1. 編集が終わったら、「Create」ボタンをクリックします。
    - クリックすると、ページが作成され、画像のようにページが参照できるようになります。
    - 画面右上のページツールバーで、閲覧モード、編集モード、[HackMD](/ja/guide/features/hackmd.html)モードに切り替えることができます。

    <img :src="$withBase('/assets/images/tutorial_page2.png')" alt="page">


作成したページをもっと編集してみましょう。

## 見出しをつけて階層化する

`#` (半角シャープ) を使ってページに見出しをつけることができます。

`#` を1つ増やすごとに、深い階層の見出しを記述できます。

<img :src="$withBase('/assets/images/header.png')" alt="page">

見出しを記述すると、ページ右側に目次が自動で作成されます。積極的に活用しましょう。

<img :src="$withBase('/assets/images/toc.png')" alt="page">

## 箇条書きリストを使って階層化する

`-` や `*` を使って文章を箇条書きで記述できます。

この箇条書きリストは階層化できます。深い階層にしたい行の先頭に、半角スペースを2つまたは Tab キーを入力してください。

以下の Markdown で記述されたサンプルテキストをコピーして、編集画面へ貼りつけてみましょう。

```

# First page
## Header1
* List1
  * List1-1
    * List1-1-1
* List2
  * List2-1
## Header2
- List3
  - List3-1

```

<img :src="$withBase('/assets/images/list.png')" alt="text">

このように、見出しや箇条書きリストを利用することで、文章を整理できます。積極的に利用し、読みやすいドキュメントを作成しましょう。

## リンクを挿入する

### ツールバーのリンク挿入機能を使う

1. 編集モードで、ツールバーのリンクアイコンをクリックします。

     <img   :src="$withBase('/assets/images/add_link.png')" alt="add_link">
1. リンク編集ダイアログが表示されます。リンク先: `https://docs.growi.org/`、ラベル: `GROWI Docs` と入力し、「Done」ボタンを押します。

    <img :src="$withBase('/assets/images/edit_link.png')" alt="edit_link">
1. リンクが挿入されます。プレビューで確認してみましょう。

    <img :src="$withBase('/assets/images/link.png')" alt="link">

### Markdown で記述する

- 以下のように編集画面に記述します。

  ```
  [Label](URL or page path)
  ```

## 画像などのファイルを挿入する

### ファイルをアップロードする

以下の3種類の方法で、ファイルを挿入できます。

- ツールバーのファイル添付アイコンをクリックし、挿入したいファイルを選択する
- 挿入したいファイルをドラックアンドドロップする
- 挿入したいファイルをコピーアンドペーストする

<img :src="$withBase('/assets/images/attach.png')" alt="attach">

::: tip
AWS や GCS へファイルをアップロードするには管理画面で設定が必要です。

設定方法は[こちら](/ja/admin-guide/admin-cookbook/attachment.html)をご参照ください。
:::

::: tip
ページを新規作成する画面でファイルを挿入すると、自動的にページが保存され、公開範囲が **自分のみ** に変更されます。
公開範囲については[こちら](/ja/guide/features/authority.html)をご参照ください。
:::

### Markdown で記述する

- 画像アイコンから以下のような画像挿入テンプレートを挿入できます。

  <img :src="$withBase('/assets/images/add_image.png')" alt="image">

- 記述例

  ```
  ![growi](https://growi.org/assets/images/logo.png)
  ```

## 絵文字(emoji) を使う

[こちら](/ja/guide/features/emoji.html)をご参照ください。

## テキストを装飾する

Markdown のテキスト装飾記法を使い、文章を読みやすくできます。いくつかの記法は、編集画面上部のツールバーを使って挿入できます。

以下のサンプルテキストをコピーして編集画面へ貼りつけ、プレビューを確認してみましょう。

```

  # テキストを装飾する

  ## 太字

    ```
    **太字**
    ```

  **太字**

  ## 斜体

    ```
    *斜体*
    ```

  *斜体*

  ## 取り消し線

    ```
    ~~取り消し線~~
    ```

  ~~取り消し線~~

  ## インラインコード

    ```
    `インラインコード`
    ```
  `インラインコード`

  ## 引用

    ```
    >引用
    >>引用
    ```

  >引用
  >>引用

  ## 水平線

    ```
    ***
    ---
    ```

  ***
  ---
    
  ## コードブロック

    ```
    コードブロック
    ```

```

## テーブルを作成する

[こちら](/ja/guide/features/table.html)をご参照ください。

## ページ一覧を表示する

GROWI には、作成したページの一覧を表示する便利な機能があります。

詳細は[こちら](/ja/guide/tips/hierarchical.html)をご参照ください。

簡単な使い方だけ覚えましょう。

トップページへ移動し、下記のように `lsx` を記載しましょう。

```
$lsx()
```

<img :src="$withBase('/assets/images/lsx_sample.png')" alt="lsx">

編集中のページの配下のページリストが出力されます。

一覧を出力してみると、ページを移動してもっとドキュメントを整理したくなります。

ページの移動については[こちら](/ja/guide/features/page_operation.html)をご参照ください。

ここまでチュートリアルに沿って進めたら、どんどんページを作成して Wiki を育てていきましょう。
