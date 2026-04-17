---
name: growi-upgrade-guide
description: Draft GROWI upgrade guide pages (docs/{ja,en}/admin-guide/upgrading/NNx.md) from GitHub release notes, register them in the VuePress sidebar, and apply GROWI-specific conventions (bilingual ja/en pair, section tag prefixes like [新機能]/[改善], and ContextualBlock splits between docs-growi-org and help-growi-cloud). Use this skill whenever the user asks to create or update an upgrade guide, aftermath notes, or "upgrading to vX" documentation for a new GROWI minor/major release — even if they only say "write up v7.6" or similar shorthand.
---

# GROWI Upgrade Guide Authoring

## What this skill is for

This repository hosts the GROWI documentation site. Each time a new minor version of GROWI ships (e.g. v7.6.x), a bilingual pair of files has to be added at:

- `docs/ja/admin-guide/upgrading/NNx.md`
- `docs/en/admin-guide/upgrading/NNx.md`

They follow a consistent structure, use a specific tag vocabulary, and embed `<ContextualBlock>` regions so that the same source file can render different content on **docs.growi.org** (self-hosted) and **help.growi.cloud** (managed service).

Authoring these pages by hand is error-prone — people forget to split self-hosted-only instructions out of the cloud view, or invent inconsistent tag prefixes. This skill turns a GitHub release note into a correctly-structured draft for both languages and registers the new page in the sidebar configs.

## When to invoke

Trigger this skill for any request that amounts to "write the upgrade guide for GROWI vX.Y" — including:

- "v7.6 のアップグレードガイドを書いて"
- "Create an upgrading page for 7.6.x"
- "Add what changed in v7.6 to the docs"
- "新しいバージョンのリリースノートが出たので反映して"

Do **not** invoke for unrelated release-note work in other repos or for `guide/`, `dev/`, `cloud/` pages.

## The workflow

Five sequential phases. Stop and confirm with the user at the end of phase 1 (target version), phase 3 (categorization plan), and phase 4 (Japanese draft). The English version is intentionally deferred to the very end — do not start it until the Japanese is approved.

### Phase 1. Identify the target version (input gathering)

The user often gives only a hint like "v7.6 のアップグレードガイドを書いて" or "新しい RC が出たから書きたい". Before asking them anything, **fetch the release inventory yourself** so you can present concrete options.

#### Important: when an upgrade guide is (and isn't) written

Upgrade guide pages are keyed to a **minor series** (`v7.5.x` → one file `75x.md`), and the trigger for writing or editing one is **always a `.0` release or its RC** — patch (revision) releases like `v7.5.1`, `v7.5.2` do **not** get a new file.

There are two scenarios, and you must decide which one applies before fetching anything else:

| Scenario | Trigger | What you do |
| :--- | :--- | :--- |
| **Initial creation** | `vX.Y.0` or `vX.Y.0-RC.N` is the focus | Create new `<NN>x.md` from the `.0` (or RC) release notes only. Do **not** preemptively include patch contents that don't exist yet |
| **Patch-driven update** | A patch like `vX.Y.1` has shipped *and* contains user/admin-facing items worth documenting | Edit the existing `<NN>x.md` to fold the patch's items in. Existing wording stays; new items get added with a marker like `<!-- v7.5.1 リリースに伴う追記 -->` (see `docs/ja/admin-guide/upgrading/71x.md` for the precedent) |

Most patches are bug fixes that do **not** warrant a guide update. Only update for patches that introduce a behavior change, a new admin-visible feature, or a fix that operators must know about.

#### Fetching the release inventory

Use `gh` against `growilabs/growi` and **include drafts and prereleases** — RC builds typically live as draft releases or prereleases until cut:

```bash
# Lists published, draft, and prerelease entries (drafts are visible only if you have repo write access; otherwise only published + prereleases come back)
gh release list --repo growilabs/growi --limit 30

# Inspect a specific tag — works for drafts too
gh release view v7.6.0-RC.1 --repo growilabs/growi --json tagName,name,body,isDraft,isPrerelease,publishedAt
```

If `gh` is unavailable, fall back to `curl https://api.github.com/repos/growilabs/growi/releases?per_page=30` (drafts require auth and won't appear) or `WebFetch` against `https://github.com/growilabs/growi/releases`.

#### Presenting options to the user

Present a short menu prioritized by what's actionable. Group entries so the user can see at a glance which are new-guide candidates vs. patch-update candidates:

> 直近のリリース状況です。どのアップグレードガイドを書きますか?
>
> **新規作成 (`.0` または RC)**
> - **v7.6.0-RC.2** (Draft, 2026-04-10) — 未公開の RC。新規 `76x.md` の作成対象
> - **v7.5.0** (Published, 2026-03-15) — 既に `75x.md` 作成済みなら不要
>
> **既存ガイドの追記 (`.1` 以降のパッチ、要判断)**
> - **v7.5.3** (Published, 2026-04-02) — 内容次第で `75x.md` に追記
> - **v7.5.1** (Published, 2026-03-22) — 内容次第で `75x.md` に追記

Wait for the user to confirm a target. Then:

- Convert to filename stem: `v7.6` → `76x.md`, `v8.0` → `80x.md`
- Check whether `docs/ja/admin-guide/upgrading/<NN>x.md` already exists.
  - **For an initial-creation request**: if the file exists, double-check with the user — they may actually want a patch-driven update instead
  - **For a patch-driven update**: read both ja and en versions first and preserve their wording verbatim where possible
- **Fetch only the relevant release body / bodies**:
  - Initial creation → just `vX.Y.0` (and its RC if that's the latest available)
  - Patch update → just the specific patch tag(s) the user wants folded in (not every patch in the series — the existing file already covers earlier patches)

### Phase 2. Create minimal scaffolding (files + sidebar config)

Before deciding any content, create empty-but-valid files and wire them into the sidebar. This makes the page navigable on the dev server immediately and surfaces config mistakes early.

**(a) Skeleton Markdown files** — write both `docs/ja/admin-guide/upgrading/NNx.md` and `docs/en/admin-guide/upgrading/NNx.md` containing only:

- The `# h1` title (`# GROWI vX.Y.x へのアップグレード` / `# Upgrading to GROWI vX.Y.x`)
- A one-line placeholder overview (e.g. `<!-- TODO: 概要 -->` / `<!-- TODO: overview -->`)
- `## 目次` / `## Table of Contents` with `[[toc]]`
- Empty `## 利用者向け` / `## 管理者向け` and `## アップグレード前にチェックすべきこと` / `## Things to Check Before Upgrading` headings as placeholders

Use [references/template.md](references/template.md) as the source for exact heading vocabulary. Do **not** fill in any change content yet.

**(b) Sidebar config registration** — edit both:

- `docs/.vuepress/config-docs-growi-org.js`
- `docs/.vuepress/config-help-growi-cloud.js`

Each file has separate `ja` and `en` arrays listing `'/<lang>/admin-guide/upgrading/NNx.md'`. Prepend the new entry so the newest version appears at the top. Locate the insertion point with Grep (e.g. search for the current-top entry like `upgrading/75x.md`) and insert above it. Update **all four arrays** (2 files × 2 languages).

After this phase, the user can navigate to the new (still-empty) page in the dev server. Move on without confirming — there is nothing to review yet.

### Phase 3. Triage release-note content and propose a plan

Now go through every bullet aggregated in phase 1 and decide what makes the cut. **Bias toward fewer, higher-signal items.** Real-world `74x.md`-style guides typically include only ~30–50% of release-note bullets — past authors aggressively omit small improvements and bug fixes. If your draft includes nearly every release-note item, you are over-including.

For each item that *does* make the cut, decide:

**(a) Include or omit** — apply these rules in order:

- **Drop**: internal refactors (state-management swaps, lint configs, CI), test-only changes, doc-only changes, dependency bumps with no observable effect
- **Drop by default**: bug fixes — even if they appear in the release note. Only include a fix if (i) operators must take action, (ii) the bug had widespread visible impact users will recognize ("oh, *that* finally got fixed"), or (iii) the fix changes a behavior people had built workarounds around. A typical fix like "non-image files were incorrectly subject to the upload limit" is *not* worth a section
- **Drop minor improvements** that don't materially change the workflow (e.g. "anchor links now support `target` attribute" is too small unless it's part of a larger story)
- **Merge related items**: if 2–3 release-note bullets describe facets of the same feature area (e.g. "empty page operation improvements" + "create page from edit shortcut on empty page" + "page controls on empty pages"), combine them into one `###` section with a unified narrative — do not list them separately. Past guides do this often
- **Keep**: new user-facing features that change what the product can do, runtime/dependency support changes, removed features (`[廃止]`), things requiring operator action (`[要対応]`), and headline performance improvements
- **Keep aftercare items** for prior-version migrations only if operators must verify something. Otherwise omit; the migration runs automatically

When in doubt, omit and ask the user during the plan-review step rather than defensively including.

**(b) Audience section**
- **Top-level (no subsection)** — cross-cutting removals/changes that affect both end-users and admins (e.g. `[廃止] esa.io インポート機能`)
- **`## 利用者向け`** — visible behavior change for wiki users (new feature, improvement, UI change)
- **`## 管理者向け`** — operational change (IAM, env vars, runtime support, DB)

**(c) Tag prefix** — see [references/tag-conventions.md](references/tag-conventions.md). Pick the single best fit from `[新機能]`, `[改善]`, `[仕様変更]`, `[廃止]`, `[サポート追加]`, `[要対応]`, `[廃止を伴う仕様変更]`. If the change requires operator action to avoid breakage, prefer `[要対応]`.

**(d) ContextualBlock placement** — apply [references/contextual-block.md](references/contextual-block.md) rules, but **default to no wrapper**. ContextualBlock is for items whose audience or applicable steps differ between self-hosted and cloud. If a feature/change is meaningful to both audiences in the same wording, leave it unwrapped — many real guides (e.g. `74x.md`) use no ContextualBlock at all. Wrap only when:

- The content references infra the cloud user does not control (env vars, Docker, runtime versions, DB) → `docs-growi-org`
- The content tells the cloud user to verify something post-upgrade or contact support → `help-growi-cloud`

A signal you are over-wrapping: every section has a ContextualBlock. That is almost never correct.

**(e) Ordering** — within `## 管理者向け`, important breaking changes (`[要対応]`, `[廃止]`) go first, then `[仕様変更]`, then `[サポート追加]`, then `[新機能]`, then `[改善]`. Within `## 利用者向け`, lead with `[新機能]` then `[改善]`.

**Present the plan to the user before writing any content.** A compact table works well:

```
| Item | Section | Tag | Site | Notes |
|---|---|---|---|---|
| OIDC groups scope | 管理者向け | [要対応] | both | needs IdP config |
| MongoDB 6 EOL | 管理者向け | [廃止] | docs-growi-org | self-hosted only |
| Comment thread UI | 利用者向け | [新機能] | both | headline feature |
| (omitted) test refactor | — | — | — | internal only |
```

Wait for the user to approve / adjust the plan. This is the highest-leverage confirmation point — getting categorization wrong wastes the writing effort.

### Phase 4. Write the Japanese version only

After the plan is approved, fill in **only `docs/ja/admin-guide/upgrading/NNx.md`**. Leave the English file as the empty scaffold from phase 2 — do not touch it yet.

Follow [references/template.md](references/template.md) and these invariants:

- Open with a 1–3 sentence overview paragraph summarizing the headline change of the series. **Do not just paraphrase the release-note section headers** — past authors often frame the overview around a coherent theme (e.g. "v7.4 はパフォーマンス改善が中心") that may aggregate or reframe what the release note literally says. If the release note alone doesn't suggest a clear headline, ask the user what the series is "about" before writing it
- Use the exact heading vocabulary (`## 目次`, `## 利用者向け`, `## 管理者向け`, `## アップグレード前にチェックすべきこと`)
- Each subsection under `## 利用者向け` / `## 管理者向け` opens with a `### [タグ] 見出し` line
- Wrap site-specific content in `<ContextualBlock context="docs-growi-org">` / `<ContextualBlock context="help-growi-cloud">` per the phase-3 plan, with blank lines after the opening tag and before the closing tag (VuePress v1 requires this)
- For pre-upgrade checks, use `- [x]` style items the reader verifies. If nothing to check, write `なし。` rather than leaving the section empty
- Use VuePress containers for admonitions: `::: tip`, `::: warning`, `::: danger`
- Link to related docs with site-relative paths: `/ja/guide/...html`
- Use 半角スペース around inline English/code in Japanese text (`IAM ポリシー`, not `IAMポリシー`)

Run `pnpm lint` and fix any textlint violations before showing the result. Common fixes:

- Split any sentence longer than 160 chars (the rule is enforced on Japanese; English is exempt but keep it tight anyway)
- For unavoidable long Japanese runs, wrap with `<!-- textlint-disable weseek/max-kanji-continuous-len -->` / `<!-- textlint-enable weseek/max-kanji-continuous-len -->`

Show the user the rendered Japanese page (or the diff) and **wait for explicit approval**. Iterate on phrasing, ContextualBlock boundaries, and tags until they say it's good.

### Phase 5. Translate to English

Only after the Japanese is approved, write `docs/en/admin-guide/upgrading/NNx.md`.

- Mirror the section order and ContextualBlock structure exactly — the file is rendered on both sites and the navigation depends on parallel structure
- Use the heading vocabulary table in [references/template.md](references/template.md) (e.g. `## For Users`, `## For Administrators`, `## Things to Check Before Upgrading`)
- Translate the **meaning**, not the words. Natural English phrasing wins over literal parallelism. Technical terms and proper nouns (env var names, version strings, product names) stay verbatim
- Re-run `pnpm lint` (the English content is exempt from the sentence-length rule but other rules still apply)

## House style notes

- Use **半角スペース** around inline code/English in Japanese: `IAM ポリシー`, not `IAMポリシー`. Follow what surrounding ja files already do.
- For version tables, use GitHub-Flavored Markdown with `:---:` alignment (see `73x.md` MongoDB/Elasticsearch table)
- Cloud-specific phrasing: do not tell cloud users to restart servers, change env vars, or edit DBs — the managed platform does that. Frame cloud-side instructions as *verification* and *contact support if mismatched*
- Self-hosted phrasing is procedural — lists of concrete shell/admin-panel steps are fine

## Files in this skill

- [references/tag-conventions.md](references/tag-conventions.md) — when to use which `[xxx]` prefix
- [references/contextual-block.md](references/contextual-block.md) — rules for docs-growi-org vs help-growi-cloud splits
- [references/template.md](references/template.md) — the canonical ja/en skeleton to start from
