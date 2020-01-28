# Architecture

![architecture](./images/architecuture.png)

## Entry Point

When GROWI detects[^detect] a plug-in package, GROWI parse each plugin's [metadata](./metadata.md) then remember method as entry points each client side and server side.

[^detect]: The detection timing is at the time of client build by webpack on the client side, On the server side, when the server starts.

### Calling on The Client Side

- When the browser initializes the GROWI client, Call the plugin entry point method.
  - At this time, one argument is passed
    1. [AppContainer](https://github.com/weseek/growi/blob/master/src/client/js/services/AppContainer.js) instance by  [unstated](https://github.com/jamiebuilds/unstated) Container.

### Calling on The Server Side

- When the server starts, Call the plugin entry point method.
  - At this time, two arguments is passed
    1. [Crowi](https://github.com/weseek/growi/blob/master/src/server/crowi/index.js) instance
    1. [Application](https://expressjs.com/ja/4x/api.html#app) instance by [Express](https://expressjs.com)
