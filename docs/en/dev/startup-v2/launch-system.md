# Launch System

## First Time

Perform the following steps in a terminal inside your GROWI-Dev devcontainer.

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

### Launch Front-end and Back-end Server

In 2 separate terminals, run the front end client and back end server.

1. Use `yarn build` to:
   - Build client assets and launch webpack-dev-server.
   - Detect changes in client-side files and auto-rebuild the client assets.
2. Use `yarn server` to:
   1. Launch the Express server.
   2. Detect changes in server-side files and auto-restart the Express server.

Either process can be terminated with `Ctrl-C`.


## Additional Launches

Each time the application is launched, repeat the steps under [First Time](#first-time).

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
|**`build`**|Same as `build:dev:watch`|
|`build:dev`|Build client assets without monitoring for file changes|
|`build:dev:watch`|Monitor for file changes and rebuild the client assets|
|`build:prod`|Build client assets for production|
|**`server`**|Same as `server:dev:watch`|
|`server:dev`|Launch the server|
|`server:dev:watch`|Monitor for file changes and restart the server|
|`server:prod`|Launch the production server|
|`start`|Run `build:prod` and `server:prod`|
