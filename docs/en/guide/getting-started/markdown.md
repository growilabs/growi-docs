# Introduction to Markdown

GROWI supports Markdown for writing pages.

## Add a header

Add a `#` (hash) character at the beginning of a line to make it a header. A space is required immediately after the `#`.  When a page has at least one header, a table of contents is automatically displayed in the sidebar on the right side of the page.

Subheaders can also be created by adding additional hashes after the first.

**Example:**

```markdown
# Header 1

## Header 2

### Header 3
```

## Add a list

A `-` (dash) or `*` (asterisk) at the beginning of a line is recognized as a bulleted list. If you write `1.`, it will be a numbered list. You can indent bullets by inserting four spaces at the beginning of the line.

As with headers, a dash, asterisk, or number must also be followed by a space.

**Example:**

```markdown
1. Number List A
2. Number List B
3. Number List C

- List
    - nested
        - more nested
```

## Decorate text

You can use Markdown's text decoration techniques to make your text more readable. Some of these can be inserted using the toolbar at the top of the editing screen.

Copy and paste the following sample text into the page and check the preview.

```

  # Decorate text

  ## Bold

    ```
    **Bold**
    ```

  **Bold**

  ## Italic

    ```
    *Italic*
    ```

  *Italic*

  ## Strikethrough

    ```
    ~~Strikethrough~~
    ```

  ~~Strikethrough~~

  ## Inline code

    ```
    `Inline code`
    ```
  `Inline code`

  ## Quotation

    ```
    >Quotation
    >>Quotation
    ```

  >Quotation
  >>Quotation

  ## Horizontal line

    ```
    ***
    ---
    ```

  ***
  ---
    
  ## Code block

    ```
    Code block
    ```

```
