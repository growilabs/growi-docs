# Let's start development

::: tip WESEEK Rule
Developers who are not used to Git functionality (branches, reset, rebase) should use a GUI client.
GUI clients make it easy to develop while keeping in mind the tree structure of the Git repository and related considerations.
:::

## First Time

Perform the following steps in a terminal inside your GROWI-Dev devcontainer.

### Install Dependencies

Execute the `bootstrap` script with `turbo`.

``` bash
turbo run bootstrap
```

Alternatively, you can use the `yarn` command. But then you have to run it in the project root.

``` bash
cd ${project root dir}
yarn
```

::: danger
DO NOT USE `npm install`.
:::


### Launch Development Server

Open a terminal, and launch the development server.  
You can exit with `Ctrl-C`.

### Server for developing frontend

1. `cd apps/app`
1. Use `turbo run dev` to:
   - Launch express server and Next.js development server.
   - Run `dev` scripts of dependent sub-packages, followed by the main `dev` script.
   - Detect changes in the `apps/app` directory and auto-restart the server.

### Auto-build for sub-packages

Sub-packages are managed in package `packages/*` which is separate from the main app package (`apps/app`),
and neither change detection nor auto restarting does not work with the `dev` script of the app.
To code on the development server with change detection for sub-packages, open a new terminal and run the following command.

The following example is for watching `packages/core`. You can exit with `Ctrl-C`.

1. `cd packages/core`
1. `turbo run watch`


## Additional Launches

Each time the application is launched, repeat the steps under [First Time](#first-time).

## List of npm Scripts

Here are the main commands used in development.  
Check also the script section of `apps/app/package.json`
to see all commands you can use.

:::tip
Execute the following command under the `apps/app` directory.
:::

|command|desc|
|--|--|
|`dev`|Launch Express server for development.<br>Watch file changes and rebuild automatically.|
|`dev:migrate:create`|Create a new migration file.|
|`dev:migrate:status`|Check which migrations are applied (or not.|
|`dev:migrate:up`|Apply all pending migrations.|
|`dev:migrate:down`|Revert (only) the last applied migration.|
|`dev:migrate`|*[Alias]* Invoke `migrate:up`.|
|`lint`|Run code linting.|
|`test`|Run unit/integration tests.|
|`cy:run`|Run tests with Cypress.|


## Production Build and Execution

::: tip
Execute the following command under the `apps/app` directory.
:::

1. Install dependencies

    ```bash
    turbo run bootstrap
    ```

1. Build for production

    ```bash
    turbo run build
    ```


## Access database with MongoDB for VS Code

<https://marketplace.visualstudio.com/items?itemName=mongodb.mongodb-vscode>

Connection to add: `mongodb://mongo`
