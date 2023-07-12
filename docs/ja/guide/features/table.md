# テーブルを作成/編集する

GROWI は Handsontable を使用してテーブルを作成できます。Handsontable とは、スプレッドシートのような簡単なテーブル操作を実現する JavaScript ライブラリです。

<img :src="$withBase('/assets/images/table.png')" alt="">

## テーブルを作成する

1. ツールバーのテーブルアイコンをクリックすると、テーブル編集ダイアログが表示されます。

  <img :src="$withBase('/assets/images/table_button.png')" alt="">

2. ダイアログ内のテーブル上で右クリックすると、行や列の追加などの操作ができます。

  <img :src="$withBase('/assets/images/insert_columns.png')" alt="">

3. Done ボタンを押すと、テーブルが挿入されます。

## すでに存在するテーブルをダイアログ上で編集する

### 編集モードの場合

1. テーブルにカーソルを合わせます。
2. カーソルの横にテーブルアイコンが表示されているのを確認し、ツールバーのテーブルアイコンをクリックします。

  <img :src="$withBase('/assets/images/edit_exists_table.png')" alt="">

3. ダイアログが表示され、テーブルを編集できます。

### 　View モードの場合

1. テーブルにカーソルを合わせます。
2. テーブルの右上に表示される編集ボタンをクリックします。

  <img :src="$withBase('/assets/images/edit_exists_table_view.png')" alt="">

3. ダイアログが表示され、テーブルを編集できます。
