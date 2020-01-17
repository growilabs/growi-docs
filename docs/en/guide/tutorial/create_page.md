# Create page

## After installation

After installation,
when you visit the GROWI URL it will be a screen to set the administrator ID.

After logging in to GROWI, the following screen will appear.

![start](./images/install.png)

Start the tutorial here.

## Create new page

GROWI is a system for creating wiki pages.

Let's start with creating a new page.

![create](./images/create.png)

Click the “New” button
at the top right of the screen to display the page creation modal.

![create](./images/create_page1.png)

There are multiple buttons. Enter the tutorial and page name in the image position.

Click the create button.

![create](./images/create_page2.png)

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

![create](./images/tutorial_page1.png)


Let's actually enter characters on the edit screen
and check the reflection on the preview screen on the right.

After editing, click the "Create" button.

Click to create an article,
and the page can be referenced as shown in the image below.

![create](./images/tutorial_page2.png)

You can switch to “Edit” tab and “View” tab to edit mode and view mode.

Let's edit the created page.


## Headline and hierarchy

You can add headline to the pages using a pound sign.
A space is required immediately after the `#`.

Each time you increase the number of pound signs by two or three, it will be hierarchized.

![create](./images/tutorial_page2.png)

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

![create](./images/edit_text.png)

You can check that the document is hierarchized as paragraphs on the preview screen.

Organize the content of the document by layering the text.

![create](./images/view_text.png)

It is also a point of creating a wiki that is easy to read if the text becomes longer,
and that it is hierarchized actively.


## Create a link to a web page

- Create a link to a web page

  The input field for the link is inserted with the button at the top of the edit screen.
  You can create a link by connecting `[]` brackets and `()` brackets.

  Create a title in `[]` and a page URL in `()`.

  ```
  []()
  [GROWI Docs](https://docs.growi.org/)
  ```

![create](./images/add_link.png)

## Insert an image

- The image insertion field is inserted with the image browse button.
You can insert an image by connecting the excursion
with the `[]` bracket and the `()` bracket.


``` 
### Insert an image
  ![]()
  ![growi](https://growi.org/assets/images/logo.png)
```

![create](./images/add_image.png)

- Using the Attach function at the bottom of the edit screen.

![attach](./images/attach.png)


  The Attach function allows you to upload files and save them to AWS or GCS.

  To upload files with the Attache function,
  settings are required on the management screen.

  Click [here](/en/admin-guide/management-cookbook/attachment.html#mongodb-gridfs-%E3%81%B8%E3%81%AE%E3%82%A2%E3%83%83%E3%83%97%E3%83%AD%E3%83%BC%E3%83%89)
  for how to set.


## Use emoji

In GROWI, you can use emoji.


- How to use

```
## use emoji　:beginner:
```

![emoji](./images/emoji.png)

As mentioned above, you can enclose specific emojis in `:`.

Please refer [here](/en/guide/features/emoji.html) for the list of target emoji.

## Useful text usage

GROWI makes it easy to read texts using a number of techniques when editing text.


- Emphasis
- Highlighted red background inversion
- Horizon
- Strikethrough
- Paragraph emphasis

Let's paste the following Mackdown description into the article and check the preview.


```
### Useful text usage
Here are some useful ways to write various sentences and paragraphs.
- Emphasis
  Surround the point you want to **emphasize** with two asterisks.
  
    ```
    **Emphasis**
    ```
  
  
- Highlighted red background inversion
  Enclose the point you want to emphasize with `backticks`.
  
    ```
    `backticks`
    ```
  
- Horizon
  
  Write three consecutive hyphens to create a horizontal line.
  
  ---
  
- Strikethrough
  
  In the sentence,
  ~~ I want to erase ~~ I enclose the part that I want to strike out with two tildes.

  
- Paragraph emphasis
  The background can be reversed and coordinated as a paragraph.
  Surround with three back quotes.
```

![emoji](./images/emoji.png)

## create table

Enter two or more pipelines `|` and press Enter to create the table.

You can also create a table by clicking the table button in the edit screen bar.

![emoji](./images/edit_table1.png)

![emoji](./images/edit_table2.png)

You can edit the created table from the View mode screen.

When you place the cursor on the table in View mode, the following icons are displayed.

![emoji](./images/edit_table3.png)

Click to edit the table as shown below.

![emoji](./images/edit_table4.png)

## Output page list

GROWI has a convenient function to output a list of created pages.

Details can be found here [here](/en/guide/tips/hierarchical.html).

Learn only simple usage.

Go to the top page and add lsx as shown below.

```
$lsx()
```

Then, the subordinate page list is output.

![emoji](./images/lsx_sample.png)

If you try to output the page list,
you will want to move the page and customize the hierarchy more.

Please refer to [here](/en/guide/features/page_operation.html)
for information on modifying the hierarchy and moving pages.

Organize the various hierarchies and edit them
to make sharing information on GROWI easier.

Now that you have followed the tutorial,
you can create more pages and grow your wiki.
