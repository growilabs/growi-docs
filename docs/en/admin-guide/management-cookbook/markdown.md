# Markdown Settings

Markdown settings can be configured on the following page.

- Admin Page > Markdown Settings (Navigate to the `/admin/markdown` page)

## Line break setting

In GROWI's default Markdown syntax, a single line break is not treated as `<br>`.  
To treat a single line break as `<br>`, switch the Line break setting ON/OFF.

<img :src="$withBase('/assets/images/en/markdown_linebreak_1.png')" alt="markdown_linebreak_1.png">

- When Line break setting is enabled
  - Line breaks in page text and comments are treated as `<br>` in HTML

<img :src="$withBase('/assets/images/en/markdown_linebreak_2.png')" alt="markdown_linebreak_2.png">

- When Line break setting is disabled
  - Use `<br>` or insert two spaces at the end of a line to create a line break

<img :src="$withBase('/assets/images/en/markdown_linebreak_3.png')" alt="markdown_linebreak_3.png">

## Indent setting

Administrators can configure the following settings in the admin panel:

- Default indent size
- Disallow change of indent size by users (Toggle ON/OFF)

<img :src="$withBase('/assets/images/en/markdown_indent_1.png')" alt="markdown_indent_1.png">

- If allowing change of indent size by users, users can specify the size in the page editing interface

<img :src="$withBase('/assets/images/en/markdown_indent_2.png')" alt="markdown_indent_2.png">

## Prevent XSS (cross site scripting) setting

Configure how HTML tags in Markdown text are handled to prevent attacks from malicious programs.
Choose between "Recommended setting" and "Custom whitelist."

<img :src="$withBase('/assets/images/en/markdown_xss_1.png')" alt="markdown__xss_1.png">

- If "Recommended setting" is selected

Users cannot modify the content.

<img :src="$withBase('/assets/images/en/markdown_xss_2.png')" alt="markdown__xss_2.png">

- If "Custom whitelist" is selected

Leaving the "Tag names" field empty and updating will disable HTML functionality.

<img :src="$withBase('/assets/images/en/markdown_xss_3.png')" alt="markdown__xss_3.png">

For example, even if `<h1>title</h1>` is written in the page body, HTML functionality is disabled, and `h1` is not treated as "Heading 1."

<img :src="$withBase('/assets/images/en/markdown_xss_4.png')" alt="markdown__xss_4.png">

If you add `h1` to the "Tag names" field, the added HTML will function.

<img :src="$withBase('/assets/images/en/markdown_xss_5.png')" alt="markdown__xss_5.png">

Since HTML is functional, `h1` is treated as "Heading 1."

<img :src="$withBase('/assets/images/en/markdown_xss_6.png')" alt="markdown__xss_6.png">
