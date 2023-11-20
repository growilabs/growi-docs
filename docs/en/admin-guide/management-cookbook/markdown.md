# Markdown Settings

You can configure the details of Markdown on the following page.

- Admin Page > Markdown Settings (Navigate to the `/admin/markdown` page)

## Line Break Settings

In GROWI's default Markdown syntax, a single line break is not treated as `<br>`.  
To treat a single line break as `<br>`, switch the Line Break setting ON/OFF.

<img :src="$withBase('/assets/images/en/markdown_1.png')" alt="markdown_1.png">

## Indentation Settings

The following settings are available:

- Default indentation width
- Allowing users to change the indentation width (Toggle ON/OFF)

<img :src="$withBase('/assets/images/en/markdown_2.png')" alt="markdown_2.png">

## XSS (Cross Site Scripting) Countermeasure Settings

Configure the handling of HTML tags in Markdown text to prevent attacks from malicious programs.  
You can choose either "Recommended Settings" or "Custom Whitelist".

<img :src="$withBase('/assets/images/en/markdown_3.png')" alt="markdown_3.png">
