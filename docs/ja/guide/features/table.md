# テーブルを作成/編集する

## Handsontable(ハンズオンテーブル) を使用してテーブルを作成する

GROWI は Handsontable を使用してテーブルを作成できます。Handsontable とは、スプレッドシートのような簡単なテーブル操作を実現する JavaScript ライブラリです。

<img :src="$withBase('/assets/images/ja/table_1.png')" alt="">

### 手順

1. ツールバーのテーブルアイコンをクリックすると、テーブル編集ダイアログが表示されます。

  <img :src="$withBase('/assets/images/ja/table_2.png')" alt="">

2. ダイアログ内のテーブル上で右クリックすると、行や列の追加などの操作ができます。

  <img :src="$withBase('/assets/images/ja/teble_3.png')" alt="">

3. Done ボタンを押すと、テーブルが挿入されます。

## すでに存在するテーブルをダイアログ上で編集する

### 編集モードの場合

1. テーブルにカーソルを合わせます。
2. テーブルにカーソルを合わせた状態で、ツールバーのテーブルアイコンをクリックすると、既に存在しているテーブルの編集画面が表示されます。

  <img :src="$withBase('/assets/images/ja/table_4.png')" alt="">

3. ダイアログが表示され、テーブルを編集できます。

### 　View モードの場合

1. テーブルにカーソルを合わせます。
2. テーブルの右上に表示される編集ボタンをクリックします。

  <img :src="$withBase('/assets/images/ja/table_5.png')" alt="">

3. ダイアログが表示され、テーブルを編集できます。

## Markdown でテーブルを書く

- Markdown

```markdown
| 左揃え               |               右揃え |        中央揃え        |
| :------------------- | -------------------: | :--------------------: |
| この列は             |             この列は |        この列は        |
| 左揃えで表示されます | 右揃えで表示されます | 中央揃えで表示されます |
```

- View

<img :src="$withBase('/assets/images/ja/table_markdown.png')" alt="table_markdown">

### TSV でテーブルを書く

- Markdown

````markdown
# ヘッダーなし
``` tsv
10:00 集合
10:20 移動
```

# ヘッダーあり
``` tsv-h
時間 行動
10:00 集合
10:20 移動
```
````

- View

<img :src="$withBase('/assets/images/ja/table_tsv.png')" alt="table_tsv">

<img :src="$withBase('/assets/images/ja/table_tsv_with_header.png')" alt="table_tsv_with_header">

## CSV でテーブルを書く

- Markdown

````markdown
# ヘッダーなし
``` csv
11:00,MTG
12:00,昼食
```

# ヘッダーあり
``` csv-h
時間,行動
11:00,MTG
12:00,昼食
```
````

- View

<img :src="$withBase('/assets/images/ja/table_csv.png')" alt="table_csv">

<img :src="$withBase('/assets/images/ja/table_csv_with_header.png')" alt="table_csv_with_header">
