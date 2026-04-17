# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VuePress v1 documentation site for [GROWI](https://growi.org/), an open-source wiki/knowledge management system. The repository serves **two separate sites** from the same codebase:

- **docs.growi.org** -- Technical documentation for self-hosted GROWI
- **help.growi.cloud** -- Help documentation for the hosted GROWI.cloud service

Each site has its own VuePress config, theme, and enhanceApp file. Build scripts copy the appropriate config into `docs/.vuepress/config.js` before running VuePress.

## Requirements

- Node.js >= 22
- pnpm (packageManager: pnpm@10.11.0)

## Common Commands

```bash
pnpm install                    # Install dependencies
pnpm start                      # Dev server for docs.growi.org (localhost:8080)
pnpm help-growi-cloud:dev       # Dev server for help.growi.cloud
pnpm lint                       # Run textlint on all Markdown files
pnpm api:dev                    # Watch & rebuild API docs (requires ../growi sibling repo)
pnpm docs-growi-org:build       # Production build for docs.growi.org
pnpm help-growi-cloud:build     # Production build for help.growi.cloud
```

There is no test suite (`pnpm test` is a no-op). The primary code quality check is `pnpm lint` (textlint), which runs in CI on pull requests.

## Architecture

### Dual-site setup

The build scripts swap in the correct files before invoking VuePress:

| Site | Config | Theme | enhanceApp |
|---|---|---|---|
| docs.growi.org | `config-docs-growi-org.js` | Default VuePress theme | `enhance-docs-growi-org.js` |
| help.growi.cloud | `config-help-growi-cloud.js` | `help-growi-cloud-theme/` (custom, Bootstrap 5) | `enhance-help-growi-cloud.js` |

These files live under `docs/.vuepress/`. The generated `config.js`, `enhanceApp.js`, and `theme/` directory are transient -- never edit them directly.

### Content structure (i18n)

Documentation is bilingual (English and Japanese) under `docs/`:

```
docs/en/   -- English content
docs/ja/   -- Japanese content
```

Both languages mirror the same section hierarchy: `guide/`, `admin-guide/`, `dev/`, `cloud/`, `api/`.

### API documentation

API docs are generated from the main GROWI repository using Swagger/OpenAPI -> ReDoc:
- During development, the GROWI source is expected at `../growi` (sibling directory)
- In CI, it's downloaded to `tmp/growi`
- Output: `redoc/apiv3.html`, `redoc/apiv1.html` (also copied to `docs/.vuepress/public/`)

## Linting Rules

**Textlint** (`pnpm lint`) enforces prose quality with `textlint-rule-preset-weseek`:
- Max sentence length: 160 characters (English sentences are exempted from this limit)
- Japanese-specific rules: max continuous kanji length, no mixed period styles
- Use `<!-- textlint-disable -->` / `<!-- textlint-enable -->` comments to suppress rules in specific sections

**Markdownlint** is configured (`.markdownlint.json`) with line length 160 and several relaxed rules (MD002, MD012, MD014, MD026, MD033, MD041 disabled).

## Deployment

- Push to `master` triggers GitHub Actions deployment to GitHub Pages (docs.growi.org)
- help.growi.cloud is built via Docker (Dockerfile) and served by nginx
