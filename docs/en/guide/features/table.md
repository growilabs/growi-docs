# Create and edit tables

## Create a table using Handsontable

GROWI allows you to create tables using Handsontable, a JavaScript library that brings spreadsheet-like table management.

<img :src="$withBase('/assets/images/en/table_1.png')" alt="table_1">

### Steps

1. Click the table icon on the toolbar to open the Edit Table dialog box.

  <img :src="$withBase('/assets/images/en/table_2.png')" alt="table_2">

2. Right-click on the table in the dialog to add rows and columns, etc.

  <img :src="$withBase('/assets/images/en/teble_3.png')" alt="teble_3">

3. Click the Done button to insert the table.

## Edit an already existing table in the dialog

### Edit mode

1. Move the cursor to the table in editor.
2. With the cursor over the table, click on the table icon in the toolbar to display the edit screen for an already existing table.

  <img :src="$withBase('/assets/images/en/table_4.png')" alt="table_4">

3. The dialog box will appear and you can edit the table.

### 　View mode

1. Move the cursor to the table in editor.
2. Click the edit button that appears in the upper right corner of the table.

  <img :src="$withBase('/assets/images/en/table_5.png')" alt="table_5">

3. The dialog box will appear and you can edit the table.

## Writing tables in Markdown

- Markdown

```markdown
| Left align            |             Right align |        Center align        |
| :-------------------- | ----------------------: | :------------------------: |
| This column will      |        This column will |      This column will      |
| be aligned to the left| be aligned to the right |       be centered          |
```

- View

<img :src="$withBase('/assets/images/en/table_markdown.png')" alt="table_markdown">

### Writing tables in TSV

- Markdown

````markdown
# No header
``` tsv
10:00 Gather
10:20 Move
```

# With header
``` tsv-h
Time Action
10:00 Gather
10:20 Move
```
````

- View

<img :src="$withBase('/assets/images/en/table_tsv.png')" alt="table_tsv">

<img :src="$withBase('/assets/images/en/table_tsv_with_header.png')" alt="table_tsv_with_header">

## Writing tables in CSV

- Markdown

````markdown
# No header
``` csv
11:00,Meeting
12:00,Lunch
```

# With header
``` csv-h
Time,Action
11:00,Meeting
12:00,Lunch
```
```
````

- View

<img :src="$withBase('/assets/images/en/table_csv.png')" alt="table_csv">

<img :src="$withBase('/assets/images/en/table_csv_with_header.png')" alt="table_csv_with_header">
