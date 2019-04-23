---
sidebar: 'auto'
---

# GROWI Commons Libraries

## pathUtils

An utility object provides functions working with GROWI page path.

```javascript
// import
import { pathUtils } from 'growi-commons`;
// require
const { pathUtils } = require('growi-commons);
```

### pathUtils.encodePagePath(path)

Encode specified `path` with [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).

- Params
  - `path`: [[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)]
- Returns: [[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)]

```javascript
(TBD: Example)
```

### pathUtils.encodePagesPath(pages)

Encode specified `path` with [encodeURIComponent](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent).

- Params
  - `pages`: [Page[]] An array of Page models
- Returns: [Page[]] Array of Page models that each of `path` have been encoded

```javascript
(TBD: Example)
```

### pathUtils.hasHeadingSlash(path)

```javascript
(TBD: Example)
```

### pathUtils.hasTrailingSlash(path)

```javascript
(TBD: Example)
```

### pathUtils.addHeadingSlash(path)

```javascript
(TBD: Example)
```

### pathUtils.addTrailingSlash(path)

```javascript
(TBD: Example)
```

### pathUtils.removeTrailingSlash(path)

```javascript
(TBD: Example)
```

### pathUtils.normalizePath(path)

A short-hand method to add heading slash and remove trailing slash.

```javascript
(TBD: Example)
```

## customTagUtils

An utility object provides functions and classes for custom tags with syntax like `$lsx(/)`.

```javascript
// import
import { customTagUtils } from 'growi-commons`;
// require
const { customTagUtils } = require('growi-commons);
```

### customTagUtils.findTagAndReplace(tagPattern, html[, *replace*])

Find tag syntax from html and replace with dom;

- Params
  - `tagPattern`: [[RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)]
  - `html`: [[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)]
  - `replace`: [[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)]
    - Params
      - tagContext [[TagContext](#customtagutils-tagcontext)] TagContext instance
- Returns: [[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]
  - `html`: [[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)]
  - `tagContextMap`: [[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)]
    - `${domId}`: [[TagContext](#customtagutils-tagcontext)] TagContext instance  
      `${domId}` is the id of the replaced DOM

```javascript
(TBD: Example)
```

### customTagUtils.TagContext

(TBD)

### customTagUtils.ArgsParser

(TBD)

### customTagUtils.OptionParser

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
