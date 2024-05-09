# リンクを挿入する

## ツールバーのリンク挿入機能を使う

1. 編集モードで、左下にあるツールバーの「＋」ボタンをクリックし、「Link」を選択します。

     <img   :src="$withBase('/assets/images/add_link.png')" alt="add_link">
1. リンク編集ダイアログが表示されます。リンク先: `https://docs.growi.org/`、ラベル: `GROWI Docs` と入力し、「完了」ボタンを押します。

    <img :src="$withBase('/assets/images/edit_link.png')" alt="edit_link">
1. リンクが挿入されます。プレビューで確認してみましょう。

    <img :src="$withBase('/assets/images/link.png')" alt="link">

## Markdown で記述する

- 以下のように編集画面に記述します。

  ```
  [Label](URL or page path)
  ```
