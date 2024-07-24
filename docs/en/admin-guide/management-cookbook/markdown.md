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

- Administrators can configure the following settings in the admin panel:
  - Default indent size
  - Disallow change of indent size by users (Toggle ON/OFF)

<img :src="$withBase('/assets/images/en/markdown_indent_1.png')" alt="markdown_indent_1.png">

- If allowing change of indent size by users, users can specify the size in the page editing interface

<img :src="$withBase('/assets/images/en/markdown_indent_2.png')" alt="markdown_indent_2.png">


## Prevent XSS (cross site scripting) setting

Configure how HTML tags in Markdown text are handled to prevent attacks from malicious programs. Choose between "Recommended setting" and "Custom whitelist."

<img :src="$withBase('/assets/images/en/markdown_xss_1.png')" alt="markdown_xss_1.png">

### Recommended setting

- It is a secure setting that allows the use of HTML within the scope that does not interfere with the use of GROWI.
- Users cannot change the setting value.


<img :src="$withBase('/assets/images/en/markdown_xss_2.png')" alt="markdown_xss_2.png">

### Custom whitelist

- Administrators can configure which HTML tags and tag attributes are allowed.
- Tag names:
  - Please enter a comma-separated list of tag names.
- Tag attributes:
  - Please enter the string representation of a JSON object.
  - For each tag name as a key, enter the string representation of a JSON array of tag attributes that you want to allow.
    - You can specify tag attributes to allow for all tags by using `"*"` as the key.

::: danger

#### Bug related to custom whitelist in versions prior to v7.0.11

Versions from GROWI v6.0.0 to v7.0.11 have a bug related to the custom whitelist.

##### Symptoms

- The values entered in the custom whitelist are not reflected correctly.
- Upgrading to v7.0.10 or later exacerbates this issue, causing the inability to render HTML tags correctly in Markdown.

##### Related Fixes

[#8836](https://github.com/weseek/growi/pull/8836), [#8946](https://github.com/weseek/growi/pull/8836)

##### Solution

Upgrade to v7.0.12 or later and perform one of the following:

- Use the recommended settings.
- After selecting the custom whitelist, import the values from the recommended settings for both tag names and tag attributes, and modify the settings based on them.


:::

#### Examples

When left empty, it disables all HTML tags and tag attributes.

<img :src="$withBase('/assets/images/en/markdown_xss_3.png')" alt="markdown_xss_3.png">

For example, even if `<h1>title</h1>` is written in the page body, HTML functionality is disabled, and `h1` is not treated as "Heading 1."

<img :src="$withBase('/assets/images/en/markdown_xss_4.png')" alt="markdown_xss_4.png">

If you add `h1` to the "Tag names" field, the added HTML will function.

<img :src="$withBase('/assets/images/en/markdown_xss_5.png')" alt="markdown_xss_5.png">

Since HTML is functional, `h1` is treated as "Heading 1."

<img :src="$withBase('/assets/images/en/markdown_xss_6.png')" alt="markdown_xss_6.png">
