# growi-docs

[![Deploy](https://github.com/growilabs/growi-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/growilabs/growi-docs/actions/workflows/deploy.yml)

## Requirements

- Node.js 12.x
- npm 6.x
- Yarn 1.12 or above

## How to start

``` bash
yarn

# Start dev server (docs-growi-org)
yarn docs-growi-org:dev

# Or start dev server (help-growi-cloud) 
yarn help-growi-cloud:dev
```

Then, access to the URL that VuePress will print like below.

``` bash
> VuePress dev server listening at http://localhost:8080/
```

## How to write docs

Add Markdown file to `docs` dir.

For detail, please reference [VuePress Documents](https://vuepress.vuejs.org/).
