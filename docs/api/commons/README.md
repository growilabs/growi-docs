# GROWI Commons Libraries

## [pathUtils]()

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

## [customTagUtils](plugin/util/custom-tag-utils.html)

An utility object provides functions and classes for custom tags with syntax like `$lsx(/)`.

```javascript
// import
import { customTagUtils } from 'growi-commons`;
// require
const { customTagUtils } = require('growi-commons);
```

### customTagUtils.TagContext

```javascript
const { TagContext } = customTagUtils;
```

### customTagUtils.ArgsParser

```javascript
const { ArgsParser } = customTagUtils;
```

### customTagUtils.OptionParser

```javascript
const { OptionParser } = customTagUtils;
```


## [BasicInterceptor](util/basic-interceptor.html)

```javascript
// import
import { BasicInterceptor } from 'growi-commons`;
// require
const { BasicInterceptor } = require('growi-commons);
```


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
