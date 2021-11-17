# (Deprecated) Launch

::: warning
This page introduces how to construct a development environment with Node.js running on host OS, which has been deprecated.

To develop in a better environment, use [Getting Started v2](/en/dev/startup-v2/dev-env.html) applying "Dev in Container".
:::

## First Time

### Clone the Repository

``` bash
git clone https://github.com/weseek/growi.git
```

### Confirm Versions

See [Getting Started#Confirm Versions](/en/dev/startup-v1/dev-env.html#confirm-versions)

### Set up Datastore for Development

Execute the following command in Docker environment.

::: tip
For Windows, execute the command in the Linux VM set up in [Getting Started#Set up Dependent Middlewares](/en/dev/startup-v1/dev-env.html#set-up-dependent-middlewares).

Install if there is no docker-compose command.  
[docker docs Install Docker Compose](https://docs.docker.com/compose/install/)
:::

``` bash
git clone https://github.com/weseek/growi-docker-compose.git
cd growi-docker-compose
docker-compose -f docker-compose.dev.yml up
```

The following containers should be launched.

| Product | Port | Desc |
| :--- | :--- | :--- |
| MongoDB | 27017 |  |
| ElasticSearch | 9200 |  |
| [elasticsearch-head](https://github.com/mobz/elasticsearch-head) | 9100 | A web frontend for an Elasticsearch cluster |

### Install Dependencies

``` bash
yarn
```

::: danger
DO NOT USE `npm install`
:::

### Migration

``` bash
npm run migrate
```

### Launch Frontend and Backend Server

1. `yarn build` does the following.
   1. Build clients assets and launch webpack-dev-server.
   2. Detect changes in client-side files and auto-rebuild the client assets.
2. `yarn server` does the following.
   1. Launch Express server.
   2. Detect changes in server-side files and auto-restart the Express server.

Each process can be ended with `Ctrl-C`.

## Second Time On

See [First Time](#first-time), and follow the step below.

1. Confirm Versions
2. Set up Datastore for Development
3. Install Dependencies
4. Migration
5. Launch Frontend and Backend Server

## List of npm Commands

|command|desc|
|--|--|
|`build`|Runs `build:dev:watch`|
|`build:dev`|Builds client assets without watching file changes|
|`build:dev:watch`|Watches file changes and re-builds the client assets|
|`build:prod`|Builds the client assets for production|
|`server`|Runs `server:dev:watch`|
|`server:dev`|Launches the server|
|`server:dev:watch`|Watches file changes and restarts the server|
|`server:prod`|Launches the server for production|
|`start`|Runs `build:prod` and `server:prod`|
