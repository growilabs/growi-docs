# テーマプラグインを開発する

テーマプラグインは、GROWI の外観をカスタマイズするための SCSS スタイルを提供するプラグインです。

## テーマプラグインの基本構造

典型的なテーマプラグインは以下のような構造を持っています。

```
growi-plugin-theme-example/
├── package.json             # プラグイン情報と依存関係
├── src/                     # ソースコード
│   └── styles/              # スタイルディレクトリ
│       └── style.scss       # メインのスタイルファイル
├── tsconfig.json            # TypeScript設定（必要な場合）
└── vite.config.ts           # ビルド設定
```

## 実際のプラグインの構造例

- [growi-plugin-theme-vivid-internet](https://github.com/growilabs/growi-plugin-theme-vivid-internet)

## 開発手順

### 1. package.json を作成する

package.jsonを以下のように編集します。

```json
{
  "name": "growi-plugin-theme-example", // プラグイン名
  "version": "1.0.0",
  "description": "Example GROWI theme plugin", // プラグインの説明
  "license": "MIT",
  "keywords": [
    "growi",
    "growi-plugin"
  ],
  "main": "dist/libs/index.js",
  "files": ["dist"],
  "scripts": {
    "build": "vite build"
  },
  "devDependencies": {
    "@growi/core-styles": "^1.0.0", // GROWIコアスタイル
    "@growi/pluginkit": "^1.1.0",   // GROWIプラグイン開発キット
    "bootstrap": "^x.x.x",
    "sass": "^x.x.x",               // Sass/SCSSコンパイラ
    "vite": "^x.x.x"                // ビルドツール
  },
  "growiPlugin": {
    "schemaVersion": "4",
    "types": ["theme"],             // 複数のプラグインタイプを同時に設定可能
    "themes": [
      {
      "name": "my-theme",         // テーマ名
        "manifestKey": "src/styles/style.scss",  // スタイルのエントリーポイント
        "schemeType": "light",      // テーマのスキームタイプ（light/dark）
        "lightBg": "#ffffff",       // ライトモードの背景色
        "darkBg": "#121212",        // ダークモードの背景色
        "lightSidebar": "#f5f5f5",  // ライトモードのサイドバー色
        "darkSidebar": "#333333",   // ダークモードのサイドバー色
        "lightIcon": "#4a4a4a",     // ライトモードのアイコン色
        "darkIcon": "#e0e0e0",      // ダークモードのアイコン色
        "createBtn": "#00acee"      // 作成ボタンの色
      }
    ]
  }
}
```

#### テーマプラグインで設定すべきプロパティの詳細

package.jsonの`growiPlugin.themes`配列の各アイテムには、以下のプロパティを設定する必要があります。これらはすべて必須項目です。

1. **`name`**:
   - テーマの識別名
   - 文字列型
   - 例: `"my-theme"`

2. **`manifestKey`**:
   - スタイルファイルへのパス
   - 文字列型
   - 例: `"src/styles/style.scss"`

3. **`schemeType`**:
   - テーマのスキームタイプ
   - 文字列型
   - 有効な値: `"light"`, `"dark"`, `"both"`

4. **`lightBg`**:
   - ライトモード時の背景色
   - 16進カラーコード（文字列型）
   - 例: `"#ffffff"`

5. **`darkBg`**:
   - ダークモード時の背景色
   - 16進カラーコード（文字列型）
   - 例: `"#121212"`

6. **`lightSidebar`**:
   - ライトモード時のサイドバー色
   - 16進カラーコード（文字列型）
   - 例: `"#f5f5f5"`

7. **`darkSidebar`**:
   - ダークモード時のサイドバー色
   - 16進カラーコード（文字列型）
   - 例: `"#333333"`

8. **`lightIcon`**:
   - ライトモード時のアイコン色
   - 16進カラーコード（文字列型）
   - 例: `"#4a4a4a"`

9. **`darkIcon`**:
   - ダークモード時のアイコン色
   - 16進カラーコード（文字列型）
   - 例: `"#e0e0e0"`

10. **`createBtn`**:
    - 作成ボタンの色
    - 16進カラーコード（文字列型）
    - 例: `"#00acee"`

### 2. ライブラリをインストールする

```
$ pnpm install
```

### 3. テーマスタイルを実装する

テーマプラグインのメインとなるのはSCSSファイルです。`src/styles/style.scss` にテーマスタイルを実装します。

公式のテーマプラグイン例として以下のリポジトリが参考になります。

- [growi-plugin-theme-vivid-internet](https://github.com/growilabs/growi-plugin-theme-vivid-internet/blob/main/src/styles/style.scss)

基本的なSCSSの構造は次のようになります。

```scss
:root[data-bs-theme] {
  // GROWIコアスタイルをインポート
  @import '@growi/core-styles/scss/bootstrap/init-stage-1';
  @import '@growi/core-styles/scss/bootstrap/theming/variables';
  @import '@growi/core-styles/scss/bootstrap/theming/utils/color-palette';

  // カスタムカラーを定義
  $primary: #0066cc;
  $highlight: #ff6600;
  $secondary: #666666;

  // カラーパレットを生成
  @include generate-color-palette('primary', $primary, darken($primary, 20%), lighten($primary, 20%), 12.5%, 12.5%);
  @include generate-color-palette('highlight', $highlight, darken($highlight, 20%), lighten($highlight, 20%), 25%, 25%);

  // 基本的なスタイル変数を設定
  $body-color: #333333;
  $body-bg: #ffffff;
  // 他の設定...

  // 必要な Bootstrap の変数と GROWI のスタイルをインポート
  @import 'bootstrap/scss/variables';
  @import 'bootstrap/scss/variables-dark';
  @import '@growi/core-styles/scss/bootstrap/init-stage-2';
  @import '@growi/core-styles/scss/bootstrap/theming/apply-light';

  // GROWIの特定の要素をカスタマイズ
  --grw-sidebar-nav-btn-color: var(--grw-highlight-500);

  // 追加のカスタムスタイル
  // ...
}
```

### 4. Vite の設定

vite.config.ts ファイルで、ビルドに関する設定をします。

```typescript
// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    manifest: true,
    rollupOptions: {
      input: ['/src/styles/style.scss'],
    },
  },
});
```

### 5. プラグインをビルドする

```
$ pnpm build
```

これにより `dist` ディレクトリにビルドされたファイルが生成されます。

## テーマカスタマイズのポイント

### 1. 色彩設計

GROWIのテーマでは、以下の色の設定が重要です。

- `$primary`: メインとなる色（ボタンやアクティブな要素など）
- `$highlight`: 強調表示や選択項目の色
- `$secondary`: 二次的な要素の色

### 2. カラーパレット生成

`generate-color-palette` ミックスインを使用して、基本色から派生する色のバリエーションを自動生成できます。これにより一貫性のあるデザインが実現できます。

```scss
@include generate-color-palette('primary', $base-color, $darker-variant, $lighter-variant, $darken-percentage, $lighten-percentage);
```

### 3. レスポンシブデザイン

モバイルからデスクトップまで様々なデバイスサイズに対応するよう、レスポンシブなデザインを心がけましょう。Bootstrapのグリッドシステムとブレイクポイントを活用できます。

### 4. ダークモード対応

package.jsonの `schemeType` 設定に応じて、ライトモードとダークモードの両方に対応するスタイルを考慮しましょう。
