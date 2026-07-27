# GROWI Vault

GROWI Vault is a read-only Git interface that lets you retrieve the pages you are allowed to view as a Git repository.

::: tip
GROWI Vault is available when an administrator enables it on a self-hosted instance. Availability on GROWI.cloud is planned for a later release.
:::

## What you can do

- Retrieve the pages you are allowed to view (public, share-link, group, and only-me) as a tree of Markdown files.
- The retrieved files mirror the page path hierarchy.

## Creating an access token

Cloning requires a GROWI access token. You can create one from "Access token settings" in the "API Settings" tab of "User Settings" (`/me`). The minimum required scope is `read:features:page`.

## How to clone

Clone with your Git client using the access token you created:

```bash
git clone https://x:<access-token>@<your-growi-host>/vault.git
```

If the `Authorization` header is already in use (for example, behind a reverse proxy that uses Basic auth), you can pass the token with the `X-GROWI-ACCESS-TOKEN` header:

```bash
git config http.<URL>.extraHeader "X-GROWI-ACCESS-TOKEN: <access-token>"
```

### Retrieving only a subset of pages

To retrieve only the pages under a specific page path, use Git's sparse checkout. You can check out only the specified path without retrieving the entire repository.

```bash
git clone --filter=blob:none --sparse https://x:<access-token>@<your-growi-host>/vault.git
cd vault
git sparse-checkout set <page-path>
```

For `<page-path>`, specify the path of the pages you want to retrieve (e.g., `/projects/docs`).


## Limitations (current)

GROWI Vault is read-only. The following operations and data are out of scope:

- Writing back with `git push`
- Attachments, comments, likes, bookmarks, and tags
- Revision history from before Vault was enabled
- Drafts and unpublished pages

## For administrators

For how to enable and set up GROWI Vault, see [Setting up GROWI Vault](/en/admin-guide/management-cookbook/setup-vault.html).
