# ページを作成する

[[toc]]

## はじめに

<ContextualBlock context="docs-growi-org">

GROWI のインストール後、初めて GROWI へアクセスすると、User ID やパスワードなどを設定する初回セットアップ画面が表示されます。

<img :src="$withBase('/assets/images/installer.png')" alt="start">

必要な項目を入力し、Create ボタンを押すと以下の画面が表示されます。

<img :src="$withBase('/assets/images/home.png')" alt="start">

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

GROWI へログインすると以下の画面が表示されます。

<img :src="$withBase('/assets/images/home.png')" alt="start">

</ContextualBlock>

管理者設定については[管理者ガイド](/ja/admin-guide/management-cookbook/app-settings.html)をご参照ください。

## 新しいページを作成する

GROWI は、wiki ページを作成するシステムです。まずは新しいページを作成しましょう。

1. 画面右上の「作成」ボタンをクリックすると、ページ作成ダイアログが表示されます。

    <img :src="$withBase('/assets/images/create.png')" alt="create">

    <img :src="$withBase('/assets/images/create_page1.png')" alt="create">
1. `Create page under below(「ページを以下に作成」)` の入力欄に`tutorial` と入力し、「Create」 ボタンをクリックします。

    <img :src="$withBase('/assets/images/create_page2.png')" alt="create">
1. ページの編集画面が表示されます。

    <img :src="$withBase('/assets/images/create_page3.png')" alt="create">
1. 以下のマークダウン記述の内容をコピーして、編集画面へ貼りつけてみましょう。
    - 貼り付けると、画面右側にページのプレビューが表示されます。内容はリアルタイムに反映されます。

    ```
    # First page
    ## Header1
    * List1
    * List2
    ## Header2
    1. Number list
    2. Number list
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

見出しを作成すると、ページ右側に目次が自動的に作成されるので、積極的に活用しましょう。

<img :src="$withBase('/assets/images/toc.png')" alt="page">

## 箇条書きリストを使って階層化する

`-` や `*` を使って文章を箇条書きで記述できます。

この箇条書きリストは階層化できます。深い階層にしたい行の先頭に、半角スペースを2つまたは Tab キーを入力してください。

以下のマークダウン記述の内容をコピーして、編集画面へ貼りつけてみましょう。

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

階層化されたページがプレビュー画面で確認できます。

見出しや箇条書きリストを利用することで、文章を整理できます。文章が長くなったら、積極的に階層化するのも読みやすい wiki 作成のポイントです。

## リンクを挿入する

### ツールバーのリンク挿入機能を使う

1. 編集モードで、ツールバーのリンクアイコンをクリックします。

     <img   :src="$withBase('/assets/images/add_link.png')" alt="add_link">
1. リンク編集ダイアログが表示されます。リンク先とラベルを入力し、「Done」ボタンを押します。

    <img :src="$withBase('/assets/images/edit_link.png')" alt="edit_link">
1. リンクが挿入されます。プレビューで確認してみましょう。

    <img :src="$withBase('/assets/images/link.png')" alt="link">

### マークダウンで記述する

- 以下のように編集画面に記述します。

  ```
  [Label](URL)
  ```

## 画像を挿入する

### Attach 機能を使う

以下の方法で、画像を挿入できます。

- ツールバーのファイル添付アイコンをクリックし、挿入したい画像を選択する
- 挿入したい画像をドラックアンドドロップする
- 挿入したい画像をコピーアンドペーストする

<img :src="$withBase('/assets/images/attach.png')" alt="attach">

::: tip
Attach 機能では、ファイルをアップロードし、AWS や GCS へ保存できます。Attache 機能でファイルをアップロードするには管理画面で設定が必要です。

設定方法は[こちら](/ja/admin-guide/admin-cookbook/attachment.html)をご参照ください。
:::

::: tip
ページを新規作成する画面で画像を添付すると、自動的にページが保存され、公開範囲が **自分のみ** に変更されます。
公開範囲については[こちら](/ja/guide/features/authority.html#%E3%83%9A%E3%83%BC%E3%82%B8%E3%81%AB%E5%AF%BE%E3%81%99%E3%82%8B%E9%96%B2%E8%A6%A7%E3%83%BB%E7%B7%A8%E9%9B%86%E6%A8%A9%E9%99%90%E3%81%AE%E8%A8%AD%E5%AE%9A%E6%96%B9%E6%B3%95)をご参照ください。
:::

### マークダウンで記述する

- 画像アイコンから以下のような画像挿入テンプレートを挿入できます。

  <img :src="$withBase('/assets/images/add_image.png')" alt="image">

- 記述例

  ```
  ![growi](https://growi.org/assets/images/logo.png)
  ```

## 絵文字(emoji) を使う

[こちら](/ja/guide/features/emoji.html)をご参照ください。

## 便利な文字装飾の使い方

GROWI では、ページの編集時に多数のテクニックで文章を読みやすくできます。

- 強調
- 強調太字
- 強調赤字背景反転
- 水平線
- 取り消し線
- 段落強調

それぞれ、以下のマークダウン記述をそのまま編集画面へ貼り付けて、プレビューを確認してみましょう。

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

  段落として背景反転して協調できます。
  バッククオート3つで囲います。

```

## テーブルを作成する

[こちら](/ja/guide/features/table.html)をご参照ください。

## ページ一覧を表示する

GROWI では、作成したページの一覧を表示する便利な機能があります。

詳細は[こちら](/ja/guide/tips/hierarchical.html)をご参照ください。

簡単な使い方だけ覚えましょう。

トップページへ移動し、下記のように lsx を記載しましょう。

```

$lsx()

```

<img :src="$withBase('/assets/images/lsx_sample.png')" alt="lsx">

すると、編集中の記事の配下のページ一覧が出力されます。

一覧出力してみると、ページを移動して階層をもっとカスタマイズしたくなります。

階層の修正やページの移動については[こちら](/ja/guide/features/page_operation.html)をご参照ください。

ここまでチュートリアルに沿って進めたら、どんどんページを作成して Wiki を育てていきましょう。
