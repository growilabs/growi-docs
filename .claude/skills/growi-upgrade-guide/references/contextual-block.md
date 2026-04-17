# ContextualBlock Rules

The upgrade guide is rendered on **two sites** from the same source file:

- **docs.growi.org** — documentation for self-hosted GROWI operators (they manage their own infra)
- **help.growi.cloud** — help docs for users of the GROWI.cloud managed service (they do not manage infra)

`<ContextualBlock context="docs-growi-org">...</ContextualBlock>` shows content only on docs.growi.org. `<ContextualBlock context="help-growi-cloud">...</ContextualBlock>` shows content only on help.growi.cloud. Content outside any ContextualBlock renders on both sites.

## Decision checklist for each subsection

Before placing content, ask:

1. **Is this about infrastructure the reader controls?** (env vars, Dockerfile, DB, runtime versions, shell commands)
   → Self-hosted only: wrap in `docs-growi-org`
2. **Is this a user-facing feature change inside the GROWI UI?** (new page type, sidebar changes, new AI assistant, keyboard shortcut)
   → Both sites: no wrapper needed
3. **Is the instruction "contact support" or "the platform will handle this for you"?**
   → Cloud only: wrap in `help-growi-cloud`
4. **Is it a post-upgrade verification step?** (cloud users upgrade passively, so they only act afterwards)
   → Usually cloud only in a `## アップグレード後にチェックすべきこと` section wrapped in `help-growi-cloud`
5. **Does it describe taking action *before* upgrading?** (plan a migration, update env vars, change IAM)
   → Self-hosted only for action steps, since cloud operators cannot delay their own upgrade

## Patterns observed in the repo

### Pattern A — admin guidance with a different phrasing per site

The *heading* and the high-level description sit outside any ContextualBlock (both sites see the headline). Each site gets its own procedure wrapped in its own block.

```md
### [仕様変更] 認証機構の有効化・無効化判定ロジックの変更

::: tip
この変更は、認証機構として ID/Pass または SAML を有効化しているシステムのみ影響があります。
:::

認証機構、特に ID/Pass と SAML 方式に関して有効化・無効化を判定するロジックが変更されました。

<ContextualBlock context="docs-growi-org">
システムのアップグレード前に、以下の環境変数をセットしているかどうかを確認してください。
... self-hosted steps with env vars and DB edits ...
</ContextualBlock>

<ContextualBlock context="help-growi-cloud">
システムのアップグレード後、プライベートブラウザ等で `/login` にアクセスし... もし一致していない場合は、[お手数ですがお問合せください](https://growi.cloud/contact)。
</ContextualBlock>
```

### Pattern B — entire subsection only applies to one site

Wrap the whole `###` block.

```md
<ContextualBlock context="docs-growi-org">

### [サポート追加] MongoDB v8 のサポート

GROWI v7.3.0 で MongoDB v8 のサポートが追加されました。
...

</ContextualBlock>
```

Typical for MongoDB/Node/Elasticsearch version support changes, env var deprecations, and Docker-image notes — these make no sense for cloud users.

### Pattern C — post-upgrade checks for cloud only

```md
<ContextualBlock context="help-growi-cloud">

## アップグレード後にチェックすべきこと

- [x] ID/Pass 認証および SAML 認証の有効・無効状態と、期待する有効・無効状態が一致しているか

</ContextualBlock>
```

The `## アップグレード前にチェックすべきこと` section typically appears on both sites but usually with different contents wrapped in their own ContextualBlocks.

## Formatting rules

- Always leave a blank line after the opening `<ContextualBlock ...>` tag and before the closing `</ContextualBlock>` tag. VuePress v1's Markdown parser needs this to treat the inner content as Markdown, not raw HTML.
- Do **not** nest ContextualBlocks. If you need "docs-growi-org minus some subsection", write two separate blocks.
- The `ContextualBlock` component is registered by the enhance-app files; you do not need to import it in Markdown.

## Pre-upgrade checklist split

At the end of the page, `## アップグレード前にチェックすべきこと` usually contains two sibling blocks — one for each site — because the list of things to verify differs between self-hosted and cloud:

```md
## アップグレード前にチェックすべきこと

<ContextualBlock context="docs-growi-org">

- [x] MongoDB 4.4 および 5.0 を利用しているシステムか
- [x] 公式の Docker イメージを使用しているか

</ContextualBlock>

<ContextualBlock context="help-growi-cloud">

- [x] 添付ファイルのアップロード先として 【Owned】AWS を選択しているアプリを運用しているか

</ContextualBlock>
```

If there is nothing site-specific, you can omit the wrappers and just put a shared list (or `なし。` / `None.`).

## Quick reference: where does each common topic go?

| Topic | self-hosted | cloud |
| :--- | :---: | :---: |
| New runtime support (Node/Mongo/ES versions) | yes | — |
| New env var / deprecated env var | yes | — |
| Docker image changes | yes | — |
| New UI feature in the wiki itself | yes | yes |
| New admin-panel setting visible in UI | yes | usually yes |
| DB migration / data backfill | yes | — |
| IAM / cloud-infra permission change | yes | — (cloud handles infra) |
| "Contact support if X" | — | yes |
| Post-upgrade verification of a behavior flip | (often just mentioned) | yes (prominent) |
