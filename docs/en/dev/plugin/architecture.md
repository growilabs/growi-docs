# Architecture

(TBD)

## Entry Point

When GROWI detects[^detect] plug-in packages, it parses [metadata](./metadata.md) of each plugins, and then collects and stores methods that serve as the entry point for client side and server side.

[^detect]: The detection timing for the client side is when the client is built by webpack and for the server side is when the server starts.

### Calling on The Client Side

- When the browser initializes the GROWI client, it calls entry point methods of plugins.
  - At this time, one argument is passed.
    1. [AppContainer](https://github.com/weseek/growi/blob/master/src/client/js/services/AppContainer.js) instance that comes from [unstated](https://github.com/jamiebuilds/unstated) Container.

### Calling on The Server Side

- When the server starts, it calls entry point methods of plugins.
  - At this time, two arguments are passed.
    1. [Crowi](https://github.com/weseek/growi/blob/master/src/server/crowi/index.js) instance.
    1. [Application](https://expressjs.com/ja/4x/api.html#app) instance that comes from [Express](https://expressjs.com).
