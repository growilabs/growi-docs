# Markdown Settings

Markdown settings can be configured on the following page.

- Admin Page > Markdown Settings (Navigate to the `/admin/markdown` page)

## Line Break Settings

In GROWI's default Markdown syntax, a single line break is not treated as `<br>`.  
To treat a single line break as `<br>`, switch the Line Break setting ON/OFF.

<img :src="$withBase('/assets/images/en/markdown_1.png')" alt="markdown_1.png">

- When Line Break setting is enabled
  - Line breaks in page text and comments are treated as `<br>` in HTML

<img :src="$withBase('/assets/images/en/markdown_2.png')" alt="markdown_2.png">

- When Line Break setting is disabled
  - Use `<br>` or insert two spaces at the end of a line to create a line break

<img :src="$withBase('/assets/images/en/markdown_3.png')" alt="markdown_3.png">

## Indent Settings

Administrators can configure the following settings in the admin panel:

- Default indent width
- Allowing users to change the indent width (Toggle ON/OFF)

<img :src="$withBase('/assets/images/en/markdown_indent_1.png')" alt="markdown_indent_1.png">

- If allowing users to change indent width, users can specify the width in the page editing interface

<img :src="$withBase('/assets/images/en/markdown_indent_2.png')" alt="markdown_indent_2.png">

## XSS (Cross Site Scripting) Prevention Settings

Configure how HTML tags in Markdown text are handled to prevent attacks from malicious programs.
Choose between "Recommended Settings" and "Custom Whitelist."

<img :src="$withBase('/assets/images/en/markdown_xss_1.png')" alt="markdown__xss_1.png">

- If "Recommended Settings" is selected

Users cannot modify the content.

<img :src="$withBase('/assets/images/en/markdown_xss_2.png')" alt="markdown__xss_2.png">

- If "Custom Whitelist" is selected

Leaving the "Tag Name" field empty and updating will disable HTML functionality.

<img :src="$withBase('/assets/images/en/markdown_xss_3.png')" alt="markdown__xss_3.png">

For example, even if <h1>title</h1> is written in the page body, HTML functionality is disabled, and h1 is not treated as "Heading 1."

<img :src="$withBase('/assets/images/en/markdown_xss_4.png')" alt="markdown__xss_4.png">

If you add h1 to the "Tag Name" field, the added HTML will function.

<img :src="$withBase('/assets/images/en/markdown_xss_5.png')" alt="markdown__xss_5.png">

Since HTML is functional, h1 is treated as "Heading 1."

<img :src="$withBase('/assets/images/en/markdown_xss_6.png')" alt="markdown__xss_6.png">
