# Using React hooks

Use the `growiReact` function from the [@growi/pluginkit](https://github.com/weseek/growi/tree/master/packages/pluginkit) package.

```typescript
// In your plugin code
import React from 'react';
import { growiReact } from '@growi/pluginkit';

// Get GROWI's React instance
const growiReactInstance = growiReact(React);

// Now hooks can be used
const { useState, useEffect, useCallback } = growiReactInstance;
```

:::tip
**How React instance switching works**

- If it's a production environment (`process.env.NODE_ENV === 'production'`) and `window.GrowiFacade.react` exists, GROWI's React instance is used.
- Otherwise (like in development environments), use regular React import.
- This allows you to use regular React when developing the plugin individually, and GROWI's React instance when running on GROWI.

:::
