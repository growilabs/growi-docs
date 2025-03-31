# スクリプトプラグインを開発する

スクリプトプラグインは、GROWI の機能を拡張するための JavaScript または TypeScript で開発されたコードを提供するプラグインです。TypeScript で開発し Vite でトランスパイルする方法を推奨しています。

### スクリプトプラグインの基本構造

典型的なスクリプトプラグインは以下のような構造を持っています。

```
growi-plugin-example/
├── client-entry.tsx        # プラグインのエントリーポイント
├── package.json            # プラグイン情報と依存関係
├── src/                    # ソースコード
│   ├── Component.tsx       # React コンポーネント
│   └── Component.css       # コンポーネント用スタイル
├── tsconfig.json           # TypeScript 設定
└── vite.config.ts          # ビルド設定
```

### 実際のプラグインの構造例

#### 例1: copy-code-to-clipboard プラグイン

[growi-plugin-copy-code-to-clipboard](https://github.com/growilabs/growi-plugin-copy-code-to-clipboard) はコードブロックにコピーボタンを追加するシンプルなプラグインです。

```
growi-plugin-copy-code-to-clipboard/
├── client-entry.ts             # プラグインのエントリーポイント
├── package.json                # プラグイン情報と依存関係
├── src/                        # ソースコード
│   ├── components/             # コンポーネントディレクトリ
│   │   └── CopyCodeButton.tsx  # コピーボタンコンポーネント
│   └── styles/                 # スタイルディレクトリ
│       └── CopyCodeButton.css  # ボタン用スタイル
├── tsconfig.json               # TypeScript 設定
└── vite.config.ts              # ビルド設定
```

#### 例2: datatables プラグイン

[growi-plugin-datatables](https://github.com/growilabs/growi-plugin-datatables) は GROWI のテーブルに DataTable 機能を追加します。

```
growi-plugin-datatables/
├── client-entry.tsx            # プラグインのエントリーポイント（JSX使用）
├── package.json                # プラグイン情報と依存関係
├── src/                        # ソースコード
│   ├── CalcMethod.ts           # 計算メソッド関連ファイル
│   ├── DataTable.tsx           # DataTable コンポーネント
│   ├── DataTable.css           # DataTable コンポーネント用スタイル
│   ├── DataTableCustom.d.ts    # 型定義ファイル
│   └── mock/                   # モックデータディレクトリ
├── tsconfig.json               # TypeScript 設定
└── vite.config.ts              # ビルド設定
```

## 開発手順

### 1. package.json を編集する

```json
{
  "name": "growi-plugin-example",  // プラグイン名
  "version": "1.0.0",
  "description": "Example GROWI plugin", // プラグインの説明
  "type": "module", // ESモジュールとして設定
  "keywords": [
    "growi",
    "growi-plugin"
  ],
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
  },
  "devDependencies": {
    "@growi/pluginkit": "^1.1.0", // GROWI プラグイン開発キット
    "typescript": "^x.x.x",
    "vite": "^^x.x.x" // ビルドツール
  },
  "growiPlugin": {
    "schemaVersion": "4",
    "types": [ // 複数のプラグインタイプを同時に設定可能
      "script"
    ]
  },
  // 他の設定...
}
```

### 2. ライブラリをインストールする

```
$ pnpm install
```

### 3. プラグインを実装する

スクリプトプラグインを実装するには、メインのエントリーポイントとなるファイル (ここでは client-entry.tsx) に次の3つの要素を実装する必要があります。

1. **activate 関数**：プラグインが有効化されたときに実行される関数
2. **deactivate 関数**：プラグインが無効化されたときに実行される関数
3. **プラグインの登録**：`window.pluginActivators` オブジェクトへの登録
    - プラグインの名前をキーとして、activate と deactivate 関数を登録します
    - これにより、GROWI 本体は起動時にこのオブジェクトを検索してプラグインを見つけることができます。

```typescript
//client-entry.tsx 
const activate = (): void => {
  // GROWI本体が利用可能か確認
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  // 実行したい処理
};

const deactivate = (): void => {
  // クリーンアップ処理（必要に応じて実装）
};

// `window.pluginActivators` オブジェクトへの登録
if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators['growi-plugin-my-feature'] = {
  activate,
  deactivate,
};
```

#### React コンポーネントの実装

スクリプトプラグインでは、React コンポーネントを使って GROWI の UI をカスタマイズできます。実際の実装例は [growi-plugin-copy-code-to-clipboard](https://github.com/growilabs/growi-plugin-copy-code-to-clipboard)  で確認できます。

### 4. Vite の設定

vite.config.ts ファイルで、ビルドに関する設定をします。

```typescript
// vite.config.ts
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    rollupOptions: {
      input: ['/client-entry.tsx'],
    },
  },
});
```

### 5. プラグインをビルドする

```
$ pnpm build
```

これにより `dist` ディレクトリにビルド済みのファイルが生成されます。
