# Launch

## First Time

GROWI-Dev devcontainer 内のターミナルで作業します。

### Install Dependencies

``` bash
yarn
```

::: danger
DO NOT USE `npm install`
:::

### Migration

``` bash
yarn migrate
```

### Lauch Front-end and Back-end Server

新たに2つのターミナルを作成し、それぞれフロントエンドビルドのサーバー、バックエンドのサーバーを起動します。

1. `yarn build` does the following.
   1. Build clients assets and launch webpack-dev-server.
   2. Detect changes in client-side files and auto-rebuild the client assets.
2. `yarn server` does the following.
   1. Launch Express server.
   2. Detect changes in server-side files and auto-restart the Express server.

Each process can be ended with `Ctrl-C`.


## Second Time On

毎回、上記の [初回起動](#初回起動) のセクションを全て実行してください。


## production 用の成果物をビルドして起動

See [First Time](#first-time), and follow the step below.

1. Install Dependencies
1. production 用にフロントエンドをビルドし、バックエンドサーバーを起動

    ```bash
    yarn start
    ```

## List of npm Commands

|command|desc|
|--|--|
|**`build`**|Runs `build:dev:watch`|
|`build:dev`|Builds client assets without watching file changes|
|`build:dev:watch`|Watches file changes and re-builds the client assets|
|`build:prod`|Builds the client assets for production|
|**`server`**|Runs `server:dev:watch`|
|`server:dev`|Launches the server|
|`server:dev:watch`|Watches file changes and restarts the server|
|`server:prod`|Launches the server for production|
|`start`|Runs `build:prod` and `server:prod`|
