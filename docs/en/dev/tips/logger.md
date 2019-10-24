# Logger

::: tip
GROWI uses [Bunyan](https://github.com/trentm/node-bunyan) and [browser-bunyan](https://github.com/philmander/browser-bunyan).
Older code uses [debug](https://www.npmjs.com/package/debug) for logging, but `debug()` can be replaced with Bunyan's `logger.debug()`.
:::

[[toc]]

## Log Levels

See [Bunyan#Levels](https://github.com/trentm/node-bunyan#levels) for more about log levels.

By default, log levels are set as below.

* Development
  * `info`
* Production
  * `info`

## Log Method

See [Bunyan#Log Method API](https://github.com/trentm/node-bunyan#log-method-api).

## Edit Log Setting

There are 2 ways to edit the log setting.

### Edit Log Setting for Indivisual Environments

* Development
  * `config/logger/config.dev.js`
* Production
  * `config/logger/config.prod.js`

#### Format
* Format as `${namespace}: '${level}',`.  
    e.g.
    ```javascript{4,5}
    module.exports = {
      default: 'info',

      'growi:crowi': 'debug',
      'growi:routes:login-passport': 'debug',
    }
    ```
* The default log level can be set with `default` key.

### Edit Log Setting with Environmental Variables

::: warning
Enviroment variables override the setting files.
:::

#### Format

* `${LEVEL}=${namespace1},${namespace2}, ...`

e.g.
```bash
DEBUG=growi:crowi,growi:routes:login-passport
WARN=growi:crowi:express-init
```
