# Let's start development

::: tip WESEEK Rule
Developers who are not used to Git functionality (branches, reset, rebase) should use a GUI client.
GUI clients make it easy to develop while keeping in mind the tree structure of the Git repository and related considerations.
:::

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


### Launch Development Server

Open a terminal, run the development server.  
You can exit with `Ctrl-C`.

### Server for developing frontend

1. `cd packages/app`
1. Use `yarn dev` to:
   - Launch express server and Next.js development server.
   - Detect changes in source files and auto-restart the server.

### Auto-build preset themes

Preset theme source (scss) is managed in package `packages/preset-themes` which is separate from the main app package (`packages/app`),
and is built only once when you run `yarn dev`.
To modify the look and feel of a preset theme while coding on the development server with change detection, open a new terminal and run the following command:
You can exit with `Ctrl-C`.

1. `cd packages/preset-themes`
1. `yarn dev`


## Additional Launches

Each time the application is launched, repeat the steps under [First Time](#first-time).

Section [Install Dependencies](#install-dependencies) can be executed with yarn if the lerna package is installed in node_modules.

``` bash
yarn lerna bootstrap
```

## List of npm Commands

Here are the main commands used in development.  
Check also the script section of `packages/app/package.json`
to see all commands you can use.

:::tip
Execute the following command under the `packages / app` directory.
:::

|command|desc|
|--|--|
|`dev`|Launch Express server for development.<br>Watching file chages and rebuild automatically.|
|`test`|Run unit/integration tests.|
|`lint`|Run code linting.|
|`migrate:create`|Create a new migration file.|
|`migrate:status`|Check which migrations are applied (or not.|
|`migrate:up`|Apply all pending migrations.|
|`migrate:down`|Revert (only) the last applied migration.|
|`migrate`|*[Alias]* Invoke `migrate:up`.|


## Production Build and Execution

::: tip
Execute the following command under the root directory of the repository.
:::

1. Install dependencies

    ```bash
    npx lerna bootstrap
    ```

1. Build for production

    ```bash
    yarn lerna run build
    ```
