# React フックを使う

このページでは、GROWI プラグイン開発における React フックの使用方法について説明します。

## 公式ユーティリティを使用する方法 (推奨)

 [@growi/pluginkit](https://github.com/weseek/growi/tree/master/packages/pluginkit) パッケージの `growiReact` 関数を使用します。

```typescript
// プラグインのコードで
import React from 'react';
import { growiReact } from '@growi/pluginkit';

// GROWIのReactインスタンスを取得
const growiReactInstance = growiReact(React);

// これでフックが使用可能に
const { useState, useEffect, useCallback } = growiReactInstance;
```

## 自前で実装する方法

```typescript
// src/utils/react-hooks.ts
import * as React from 'react';

export const getReactHooks = (): typeof React => {
  const reactSource =
    process.env.NODE_ENV === 'production' && window.GrowiFacade.react  ? window.GrowiFacade.react  : React;
  return { ...reactSource };
};
```

## React インスタンスの切り替えの仕組み

- 本番環境 (`process.env.NODE_ENV === 'production'`) かつ `window.GrowiFacade.react` が存在する場合は、GROWI の React インスタンスを使用します。
- そうでない場合（開発環境など）は、通常の React インポートを使用します。
- これにより、プラグインを単体で開発する際には通常の React を使い、GROWI 上で実行する際には GROWI の React インスタンスを使用できます。
