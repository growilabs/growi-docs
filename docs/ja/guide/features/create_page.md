# ページを作成する

## 新しいページを作成する

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

1. 実際に編集画面で文字を入力し、プレビュー画面に反映されることを確認します。

    <img :src="$withBase('/assets/images/tutorial_page1.png')" alt="page">
1. 編集が終わったら、「Create」ボタンをクリックします。
    - クリックすると、ページが作成され、画像のようにページが参照できるようになります。
    - 画面右上のページツールバーで、閲覧モード、編集モード、[HackMD](/ja/guide/features/hackmd.html)モードに切り替えることができます。

    <img :src="$withBase('/assets/images/tutorial_page2.png')" alt="page">
