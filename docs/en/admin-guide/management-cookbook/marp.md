# Marp Settings

[Marp](https://marp.app/) is a useful tool for creating presentation slides in Markdown.

GROWI disables Marp by default due to the different Markdown rendering engine used by GROWI and Marp.

To enable Marp, it must be operated from the administration page by a user with administrative privileges.

:::warning
To enable Marp uses a different rendering engine than GROWI, which may make it vulnerable to XSS.
:::

## To enable Marp

<img :src="$withBase('/assets/images/marp_setting.png')" alt="marp_setting">

1. Manage → Customize(/admin/customize page transition )

2. Checking the "Enable Marp" checkbox in the "Function" item.

3. Click the Update button in the "Function" section.

