# Launch System

## First Time

Perform the following steps in a terminal inside your GROWI-Dev devcontainer.

### Install Dependencies

Execute with npx because lerna　package is not installed.

``` bash
npx lerna bootstrap
```

::: danger
DO NOT USE `npm install` or `yarn`
:::

### Migration

``` bash
cd packages/app
yarn migrate
```

### Launch Front-end and Back-end Server

In 2 separate terminals, run the front end client and back end server.  
Either process can be terminated with `Ctrl-C`.

### Server for developing frontend

1. `cd packages/app`
1. Use `yarn dev:client` to:
   - Build client assets and launch webpack-dev-server.
   - Detect changes in client-side files and auto-rebuild the client assets.

### Server for developing backend

1. `cd packages/app`
1. Use `yarn dev:server` to:
   - Launch the Express server.
   - Detect changes in server-side files and auto-restart the Express server.


## Additional Launches

Each time the application is launched, repeat the steps under [First Time](#first-time).

Section [Install Dependencies](#install-dependencies) can be executed with yarn if the lerna package is installed in node_modules.

``` bash
yarn lerna bootstrap
```

## Production Build and Execution

Execute the following steps from the [First Time](#first-time) section.

1. Install dependencies
1. Build the front end client for production and activate the backend server

    ```bash
    yarn start
    ```

## List of npm Commands

|command|desc|
|--|--|
|`dev:client`|Build client and launch webpack-dev-server for development.<br>Watching file chages and rebuild automatically.|
|`dev:server`|Launch Express server for development.<br>Watching file chages and restart automatically.|
|`test`|Run unit/integration tests.|
|`lint`|Run code linting.|
|`migrate:create`|Create a new migration file.|
|`migrate:status`|Check which migrations are applied (or not.|
|`migrate:up`|Apply all pending migrations.|
|`migrate:down`|Revert (only) the last applied migration.|
|`migrate`|*[Alias]* Invoke `migrate:up`.|
