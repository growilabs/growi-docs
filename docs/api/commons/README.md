# GROWI Commons Libraries

## [path-utils](util/path-utils.html)

An utility object provides functions working with GROWI page path.

```javascript
// import
import { pathUtils } from 'growi-commons`;
// require
const { pathUtils } = require('growi-commons);
```

## [custom-tag-utils](plugin/util/custom-tag-utils.html)

An utility object provides functions and classes for custom tags with syntax like `$lsx(/)`.

```javascript
// import
import { customTagUtils } from 'growi-commons`;
// require
const { customTagUtils } = require('growi-commons);
```

### customTagUtils.[TagContext](plugin/model/tag-context.html#TagContext)

TagContext class is provided by a property of `customTagUtils`.

See [tag-context](plugin/model/tag-context.html) module.

```javascript
const { TagContext } = customTagUtils;
```

### customTagUtils.[ArgsParser](plugin/util/args-parser.html#ArgsParser)

ArgsParser class is provided by a property of `customTagUtils`.

See [args-parser](plugin/util/args-parser.html) module.

```javascript
const { ArgsParser } = customTagUtils;
```

### customTagUtils.[OptionParser](plugin/util/option-parser.html#OptionParser)

OptionParser class is provided by a property of `customTagUtils`.

See [option-parser](plugin/util/option-parser.html) module.

```javascript
const { OptionParser } = customTagUtils;
```


## [basic-interceptor](util/basic-interceptor.html)

BasicInterceptor class is provided by [basic-interceptor](util/basic-interceptor.html) module.

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
