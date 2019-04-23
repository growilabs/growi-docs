---
sidebar: 'auto'
---

# GROWI Commons Libraries

## `pathUtils`

An utility object provides functions working with GROWI page path.

```javascript
// import
import { pathUtils } from 'growi-commons`;
// require
const { pathUtils } = require('growi-commons);
```

### `pathUtils.encodePagePath`

Encode specified `path` with [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).

- Params
  - `path`: [[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)]
- Returns: [[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)]

```javascript
(TBD: Example)
```

### `pathUtils.encodePagesPath`

Encode specified `path` with [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).

- Params
  - `pages`: [Page] An array of Page models
- Returns: [Page[]] Array of Page models that each of `path` have been encoded

```javascript
(TBD: Example)
```

### `pathUtils.hasHeadingSlash`
### `pathUtils.hasTrailingSlash`
### `pathUtils.addHeadingSlash`
### `pathUtils.addTrailingSlash`
### `pathUtils.removeTrailingSlash`

### `pathUtils.normalizePath`

A short-hand method to add heading slash and remove trailing slash.


## customTagUtils

```javascript
// import
import { customTagUtils } from 'growi-commons`;
// require
const { customTagUtils } = require('growi-commons);
```

### `customTagUtils.findTagAndReplace`

- Params
  - `tagPattern`: [[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)]
  - `html`: [[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)]
- Returns: [[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]
  - `html`: [[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)]
  - `tagContextMap`: [[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]
    - `${domId}`: [[TagContext](#customTagUtils.TagContext)] TagContext instance  
      `${domId}` is the id of the replaced DOM

### `customTagUtils.TagContext`

(TBD)

### `customTagUtils.ArgsParser`

(TBD)

### `customTagUtils.OptionParser`

(TBD)


## BasicInterceptor

```javascript
// import
import { BasicInterceptor } from 'growi-commons`;
// require
const { BasicInterceptor } = require('growi-commons);
```

(TBD)


## LocalStorageManager

```javascript
// import
import { LocalStorageManager } from 'growi-commons`;
// require
const { LocalStorageManager } = require('growi-commons);

// get the singleton instance
const localStorageManager = LocalStorageManager.getInstance();
```

(TBD)
