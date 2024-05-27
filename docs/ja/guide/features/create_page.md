# ページを作成する

## 新しいページを作成する

1. 画面左上の「鉛筆アイコン」をクリックすると、ページの編集画面が表示されます。

    <img :src="$withBase('/assets/images/ja/create.png')" alt="create">

    - 「今日のメモを作成」「テンプレートページの作成/編集」を選択する場合は、鉛筆アイコン右の矢印をクリックすることで選択肢が表示されます。

    <img :src="$withBase('/assets/images/ja/create_page1.png')" alt="create_page1">
<!-- textlint-disable weseek/max-kanji-continuous-len -->
1. 編集画面左上入力欄から、任意のページ名を入力します。
    - ページ名を入力しない場合、自動でページ名が入力されて保存されます。
<!-- textlint-enable weseek/max-kanji-continuous-len -->

    <img :src="$withBase('/assets/images/ja/create_page2.png')" alt="create">

1. 以下の Markdown で記述されたサンプルテキストをコピーして、編集画面へ貼りつけてみましょう。
    - 貼り付けると、画面右側にページのプレビューが表示されます。内容はリアルタイムに反映されます。

    ```
    # 大見出し
    ## 小見出し1
    * リスト1
    * リスト2

    ## 小見出し2
    1. 番号付きリスト
    1. 番号付きリスト
    ```

1. 実際に編集画面で文字を入力し、プレビュー画面に反映されることが確認できれば、「更新」ボタンをクリックして編集内容を保存しましょう。

    <img :src="$withBase('/assets/images/ja/create_page3.png')" alt="create_page3">

1. 「更新」ボタンをクリックするとページが作成され、画像のようにページが参照できるようになります。
    - 画面右上のページツールバーで、閲覧モード、編集モードの切り替えができます。

    <img :src="$withBase('/assets/images/ja/create_page4.png')" alt="create_page4">

### GROWI v6 系以前のバージョンでのページ作成方法

1. 画面右上の「作成」ボタンをクリックすると、ページ作成ダイアログが表示されます。

    <img :src="$withBase('/assets/images/ja/create_page5.png')" alt="create_page5">

    <img :src="$withBase('/assets/images/ja/create_page6.png')" alt="create_page6">

1. 「ページを以下に作成」 の入力欄に`チュートリアル` と入力し、「作成」 ボタンをクリックします。

    <img :src="$withBase('/assets/images/ja/create_page7.png')" alt="create">

1. ページの編集画面が表示されます。
