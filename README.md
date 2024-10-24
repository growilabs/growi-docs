# growi-docs

[![Deploy](https://github.com/growilabs/growi-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/growilabs/growi-docs/actions/workflows/deploy.yml)

## Requirements

- Node.js v14 or v16
- Yarn v1.22

## How to start

``` bash
yarn

# Start dev server (docs-growi-org)
yarn start

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

## How to write API docs

``` bash
yarn api:dev
```

### Live Server

Launch the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
to watch the modification to the `growi` repository will be applied in realtime.

1. `yarn api:dev`
1. Right click `redoc/apivX.html` in the file tree and select "Open with Live Server".
