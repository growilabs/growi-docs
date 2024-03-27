# ページを作成する

## 新しいページを作成する

1. 画面左上の「鉛筆アイコン」をクリックすると、ページの編集画面が表示されます。
    - 「今日のメモを作成」「テンプレートページの作成/編集」を選択する場合は、鉛筆アイコン右の矢印をクリックすることで選択肢が表示されます。

    <img :src="$withBase('/assets/images/ja/create.png')" alt="create">

    <img :src="$withBase('/assets/images/ja/create_page1.png')" alt="create">

1. 編集画面の左上に「Untitled-1」のように自動でページ名が入力されているので、任意のページ名に変更します。
    - ページ名を変更しない場合、自動で入力されたページ名でページが保存されます。

    <img :src="$withBase('/assets/images/ja/create_page2.png')" alt="create">

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

    <img :src="$withBase('/assets/images/ja/create_page3.png')" alt="create">

1. 編集が終わったら、「更新」ボタンをクリックします。
    - クリックすると、ページが作成され、画像のようにページが参照できるようになります。
    - 画面右上のページツールバーで、閲覧モード、編集モードを切り替えることができます。

    <img :src="$withBase('/assets/images/ja/create_page4.png')" alt="create">

### GROWI v6 系以前のバージョンでのページ作成方法

1. 画面右上の「New」ボタンをクリックすると、ページ作成ダイアログが表示されます。

    <img :src="$withBase('/assets/images/ja/create_page5.png')" alt="create">

    <img :src="$withBase('/assets/images/ja/create_page6.png')" alt="create">

1. `Create page under below(「ページを以下に作成」)` の入力欄に`tutorial` と入力し、「Create」 ボタンをクリックします。

    <img :src="$withBase('/assets/images/ja/create_page7.png')" alt="create">

1. ページの編集画面が表示されます。

