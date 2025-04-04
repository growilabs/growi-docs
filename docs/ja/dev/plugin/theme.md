# テーマプラグインを開発する

テーマプラグインは、GROWI の外観をカスタマイズするための SCSS スタイルを提供するプラグインです。SCSS で開発し Vite でトランスパイルする方法を推奨しています。

プラグイン開発の基本的な流れについては、 [プラグイン開発の基本](/ja/dev/plugin/development.md) も併せてご参照ください。

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

### 実際のプラグインの構造例

- [growi-plugin-theme-vivid-internet](https://github.com/growilabs/growi-plugin-theme-vivid-internet)

## 開発手順

### 1. package.json を作成する

package.json を作成し、`growiPlugin` ディレクティブを記載します。

このチュートリアルでは、まず `name`, `manifestKey`, `schemeType` の3つのプロパティを設定します。プレビュー表示用の色設定（`lightBg`, `darkBg`, `lightSidebar` など）はサンプルの値をそのまま使用して進めても問題ありません。これらの値は実際のテーマ開発が進んだ段階で、必要に応じて調整できます。

各プロパティの詳細は [テーマプラグインで設定すべきプロパティの詳細](/ja/dev/plugin/theme.html#テーマプラグインで設定すべきプロパティの詳細) をご参照ください。

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
        "schemeType": "light",      // テーマのスキームタイプ（light/dark/both）
        "lightBg": "#ffffff",       // 以下はすべて管理画面のプレビュー表示用の設定（実際の見た目には影響しない）
        "darkBg": "#121212",
        "lightSidebar": "#f5f5f5",
        "darkSidebar": "#333333",
        "lightIcon": "#4a4a4a",
        "darkIcon": "#e0e0e0", 
        "createBtn": "#00acee"
      }
    ]
  }
}
```

### 2. ライブラリをインストールする

```
$ pnpm install
```

### 3. SCSS ファイルを作成する

`src/styles/style.scss` を作成します。まずはこのファイルを作成するだけにとどめ、実際のスタイルの実装内容については [スタイルを実装する](/ja/dev/plugin/theme.html#_7-スタイルを実装する) で詳しく説明します。

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

### 5. テストの追加（オプション）

プラグインの設定が正しいかどうかを確認するためのテストを追加できます。テストを実装するには、`test/index.spec.ts` を作成します。

以下は [growi-plugin-theme-vivid-internet](https://github.com/growilabs/growi-plugin-theme-vivid-internet/blob/main/test/index.spec.ts) を参考にしたテストの例です。

```typescript
import * as path from 'node:path';

// @growi/pluginkit パッケージからテーマプラグイン検証用の関数をインポート
import { validateThemePluginGrowiDirective } from '@growi/pluginkit/dist/v4/server';

describe('package.json', () => {
  test('should pass validation', () => {
    // プロジェクトのルートディレクトリパスを取得
    const projectDirRoot = path.resolve(__dirname, '..');
    
    // pluginkit のバリデーション関数を使用してテーマプラグイン設定を検証
    // この関数は package.json の growiPlugin 設定を自動的に読み込んで検証します
    const result = validateThemePluginGrowiDirective(projectDirRoot);

    // 検証結果からテーマ設定が少なくとも1つ存在することを確認
    // これにより package.json の growiPlugin.themes が正しく設定されていることを確認できます
    expect(result.themes.length).toBeGreaterThan(0);
  });
});
```

このテストを実行するには、package.json にテスト用のスクリプトを追加します。

```json
"scripts": {
  "build": "vite build",
  "test": "vitest run"
},
"devDependencies": {
  // 既存の依存関係に加えて
  "vitest": "^x.x.x"
}
```

`pnpm test` コマンドでテストを実行することで、package.json のプラグイン設定が正しいかどうかを自動的に検証できます。

### 6. プラグインをビルドする

```
$ pnpm build
```

これにより `dist` ディレクトリにビルドされたファイルが生成されます。以上でテーマプラグインのビルドが完了し、GROWI 上で使用できる状態になりました。

### 7. スタイルを実装する

先ほど作成した `src/styles/style.scss` にテーマのスタイルを実装していきます。

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

## テーマカスタマイズのポイント

### 1. 色彩設計

GROWIのテーマでは、以下の色の設定が重要です。

- `$primary`: メインとなる色（ボタンやアクティブな要素など）
- `$highlight`: 強調表示や選択項目の色
- `$secondary`: 二次的な要素の色

### 2. カラーパレット生成

`generate-color-palette` mixin を使用すると、基本色から派生する色のバリエーションを自動生成できます。これにより一貫性のあるデザインが実現できます。

```scss
@include generate-color-palette($color-id, $color-value, $shade-color, $tint-color, $shade-color-ratio, $tint-color-ratio, $prefix);
```

<img :src="$withBase('/assets/images/ja/generate-color-palette.png')" alt="generate-color-palette.png" class="border">

#### パラメータ

<!-- textlint-disable weseek/max-kanji-continuous-len -->

| パラメータ | 説明 | デフォルト値 |
|------------|------|-------------|
| `$color-id` (必須) | 生成される変数の識別子（例: 'primary'） | なし |
| `$color-value` (必須) | 基本色の値（例: #4285f4） | なし |
| `$shade-color` | 暗い色を作成するときに混合する色 | black |
| `$tint-color` | 明るい色を作成するときに混合する色 | white |
| `$shade-color-ratio` | 暗い色を作成するときの基本混合割合 | 20% |
| `$tint-color-ratio` | 明るい色を作成するときの基本混合割合 | 20% |
| `$prefix` | 生成されるCSS変数のプレフィックス | 'grw-' |

<!-- textlint-enable weseek/max-kanji-continuous-len -->

#### 生成される変数

この mixin を実行すると、以下のような CSS 変数が生成されます。

- 基本色: `--{$prefix}{$color-id}-500`
- 暗い色のバリエーション: `--{$prefix}{$color-id}-600` から `--{$prefix}{$color-id}-900`
- 明るい色のバリエーション: `--{$prefix}{$color-id}-400` から `--{$prefix}{$color-id}-100`
- RGB形式の値: `--{$prefix}{$color-id}-{number}-rgb`

#### 使用例

```scss
@include generate-color-palette('primary', $primary, darken($primary, 20%), lighten($primary, 20%), 12.5%, 12.5%);
```

この例では以下の CSS 変数が生成されます。

- `--grw-primary-500`: 基本色（`$primary`）
- 暗い色のバリエーション:
  - `--grw-primary-600`: 基本色に darken($primary, 20%) を 12.5% 混合
  - `--grw-primary-700`: 基本色に darken($primary, 20%) を 25% 混合
  - `--grw-primary-800`: 基本色に darken($primary, 20%) を 37.5% 混合
  - `--grw-primary-900`: 基本色に darken($primary, 20%) を 50% 混合
- 明るい色のバリエーション:
  - `--grw-primary-400`: 基本色に lighten($primary, 20%) を 12.5% 混合
  - `--grw-primary-300`: 基本色に lighten($primary, 20%) を 25% 混合
  - `--grw-primary-200`: 基本色に lighten($primary, 20%) を 37.5% 混合
  - `--grw-primary-100`: 基本色に lighten($primary, 20%) を 50% 混合

詳細な実装については、[_color-palette.scss](https://github.com/weseek/growi/blob/4edec2a6fe4ffe356e669c2edc9551abe045b6e1/packages/core-styles/scss/bootstrap/theming/utils/_color-palette.scss#L3) を参照してください。

### 3. レスポンシブデザイン

モバイルからデスクトップまで様々なデバイスサイズに対応するよう、レスポンシブなデザインを心がけましょう。Bootstrap のグリッドシステムとブレイクポイントを活用できます。

### 4. ライト/ダークモード対応

package.jsonの `schemeType` 設定に応じて、ライトモードとダークモードの両方に対応するスタイルを考慮しましょう。

## テーマプラグインで設定すべきプロパティの詳細

package.jsonの `growiPlugin.themes` 配列の各アイテムには、以下のプロパティを設定する必要があります。これらはすべて必須項目です。

1. **`name`**:
   - テーマの識別名
   - 文字列型
   - 例: `"my-theme"`
   - テーマの選択時に使用される識別子

2. **`manifestKey`**:
   - スタイルファイルへのパス
   - 文字列型
   - 例: `"src/styles/style.scss"`
   - 実際の CSS ファイルのビルド元となる SCSS ファイルを指定

3. **`schemeType`**:
   - テーマのスキームタイプ
   - 文字列型
   - 有効な値: `"light"`, `"dark"`, `"both"`

4. **`lightBg`**:
   - 管理画面でテーマを選ぶ際に表示されるテーマプレビューボックスのライトモード時の背景色
   - 16進カラーコード（文字列型）

5. **`darkBg`**:
   - 管理画面でテーマを選ぶ際に表示されるテーマプレビューボックスのダークモード時の背景色
   - 16進カラーコード（文字列型）

6. **`lightSidebar`**:
   - 管理画面でテーマを選ぶ際に表示されるテーマプレビューボックスのライトモード時のサイドバー色
   - 16進カラーコード（文字列型）

7. **`darkSidebar`**:
   - 管理画面でテーマを選ぶ際に表示されるテーマプレビューボックスのダークモード時のサイドバー色
   - 16進カラーコード（文字列型）

8. **`lightIcon`**:
   - 管理画面でテーマを選ぶ際に表示されるテーマプレビューボックスのライトモード時のアイコン色
   - 16進カラーコード（文字列型）

9. **`darkIcon`**:
   - 管理画面でテーマを選ぶ際に表示されるテーマプレビューボックスのダークモード時のアイコン色
   - 16進カラーコード（文字列型）

10. **`createBtn`**:
    - 管理画面でテーマを選ぶ際に表示されるテーマプレビューボックスの作成ボタンの色
    - 16進カラーコード（文字列型）

<!-- textlint-disable weseek/max-comma -->
`lightBg`, `darkBg`, `lightSidebar`, `darkSidebar`, `lightIcon`, `darkIcon`, `createBtn` の各プロパティは、管理画面のテーマ選択 UI におけるテーマのプレビュー表示の見た目のみに使用され、アプリケーションの実際の外観には影響しません。実際のアプリケーションのスタイルは `manifestKey` で指定されたスタイルファイルによって定義されます。
<!-- textlint-enable weseek/max-comma -->

<img :src="$withBase('/assets/images/ja/customize-theme.png')" alt="customize-theme.png" class="border">
