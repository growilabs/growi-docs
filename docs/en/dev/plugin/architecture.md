# Architecture

![architecture](./images/architecuture.png)

## Entry Point

When GROWI detects[^detect] a plug-in package, GROWI parses each [metadata](./metadata.md) of plugins then remember the entry point methods each client side and server side.

[^detect]: The detection timing is as follows.  
On the client side, at the time of client build by webpack.  
On the server side, at the time of the server starts.

### Calling on The Client Side

- When the browser initializes the GROWI client, it calls entry point methods of plugins.
  - At this time, one argument is passed.
    1. [AppContainer](https://github.com/weseek/growi/blob/master/src/client/js/services/AppContainer.js) comes from [unstated](https://github.com/jamiebuilds/unstated) Container.

### Calling on The Server Side

- When the server starts, Call the plugin entry point method.
  - At this time, two arguments is passed.
    1. [Crowi](https://github.com/weseek/growi/blob/master/src/server/crowi/index.js) instance.
    1. [Application](https://expressjs.com/ja/4x/api.html#app) comes from [Express](https://expressjs.com).
