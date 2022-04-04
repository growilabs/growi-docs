# Security Settings

[[toc]]

## Page Deletion Permission

Specify the page deletion permission according to the four types of deletion methods.

- Send a page to the trash (Only the page).
- Send a page to the trash (Including the descendant pages).
- Permanently delete a page (Only the page).
- Permanently delete a page (Including the descendant pages).

You can select the setting from the following options for "Only the page" and "Including the descendant pages".

- Only the page

  - Choose from: `Anyone can perform the action`, `Only administrators can perform the action`, `Administrators and page authors can perform the action`.

- Including the descendant pages
  - Choose from: `Same as "Only the page"`, `Only administrators can perform the action`, `Administrators and page authors can perform the action`.

If you select the `Same as "Only the page"` option for "Including the descendant pages", the same type of deletion process settings apply. Also, "Including the descendant pages" are always forced to have more restrictive settings than "Only the page".

::: tip
The option that was set as "Permanently delete a page" in v4.5 or earlier is inherited as "Permanently delete a page (Only the page)" in v5.0 or later.
:::
