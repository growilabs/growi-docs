# growi-docs

[![Deploy](https://github.com/growilabs/growi-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/growilabs/growi-docs/actions/workflows/deploy.yml)

## Requirements

- Node.js v18 or v20
- pnpm >= 9.4 < 10

## How to start

``` bash
pnpm install

# Start dev server (docs-growi-org)
pnpm start

# Or start dev server (help-growi-cloud) 
pnpm help-growi-cloud:dev
```

Then, access to the URL that VuePress will print like below.

``` bash
> VuePress dev server listening at http://localhost:8080/
```

## How to write docs

Add Markdown file to `docs` dir.

For detail, please reference [VuePress Documents](https://vuepress.vuejs.org/).

## How to write API docs

``` bash
pnpm api:dev
```

### Live Server

Launch the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
to watch the modification to the `growi` repository will be applied in realtime.

1. `pnpm api:dev`
1. Right click `redoc/apivX.html` in the file tree and select "Open with Live Server".
