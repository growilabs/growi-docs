# テンプレートプラグインを開発する

テンプレートプラグインは、GROWI のページ作成時に利用できる定型文や構造化されたフォーマットを提供するプラグインです。

## テンプレートとは

GROWI のテンプレート機能とは、頻繁に作成する同じ構造のページ（会議議事録、週報、マニュアルなど）を効率的に作成するための機能です。テンプレートを使うことで、以下のようなメリットがあります。

- 毎回同じ見出しや構造を手動で入力する手間を省ける
- チーム内でページの構造を統一できる
- 必要な項目の記入漏れを防げる

例えば、ミーティング議事録用のテンプレートには以下のような構造があらかじめ定義されています。

```markdown
# ミーティングタイトル

## 日時
yyyy/mm/dd hh:mm

## 参加者
- 名前1
- 名前2

## 議題
### 議題1
- 内容
- 決定事項

### 議題2
- 内容
- 決定事項
```

## テンプレートプラグインの役割

テンプレートプラグインを開発することで、GROWI ユーザーに対して特定の用途に特化したテンプレート集を提供できます。これにより、 組織固有のフォーマットやワークフローに合わせたテンプレートの共有や、複数の GROWI インスタンスで一貫したドキュメント構造を維持できます。

テンプレートプラグインはシステム管理者によってインストールされ、エンドユーザーはエディタ上でテンプレート選択メニューからこれらのテンプレートを簡単に挿入して利用できます。

テンプレートの使い方については、[ページテンプレートを使ってページの作成を楽にする](/ja/guide/features/template.md) も併せてご参照ください。

## テンプレートの多言語対応

テンプレートプラグインでは、複数の言語に対応したテンプレートを提供できます。GROWI は現在、英語 (en_US)、日本語 (ja_JP)、中国語 (zh_CN)、フランス語 (fr_FR) の4つの言語をサポートしています。

### 言語切り替え機能

テンプレートを挿入する際に表示されるモーダルには、言語を切り替える機能が組み込まれています。ユーザーはこのモーダル内にある言語切り替えボタン（例：「ja_JP」「en_US」など）をクリックすることで、表示されるテンプレートを別の言語バージョンに切り替えることができます。

<img :src="$withBase('/assets/images/ja/select-template.png')" alt="select-template.png" class="border">

### 部分的な多言語対応も可能

テンプレートプラグイン開発時は、GROWI がサポートする全ての言語（4言語）に対応する必要はありません。例えば、日本語 (ja_JP) と英語 (en_US) のみに対応したテンプレートプラグインの開発もできます。

## テンプレートプラグインの基本構造

典型的なテンプレートプラグインは以下のような構造を持っています。

```
growi-plugin-templates-example/
├── package.json             # プラグイン情報と依存関係
└── dist/                    # テンプレートファイルが格納されるディレクトリ
    ├── template1/           # テンプレート1のディレクトリ
    │   ├── en_US/           # 英語版テンプレート
    │   │   ├── meta.json    # テンプレート1の英語メタデータ
    │   │   └── template.md  # テンプレート1の英語コンテンツ
    │   └── ja_JP/           # 日本語版テンプレート 
    │       ├── meta.json    # テンプレート1の日本語メタデータ
    │       └── template.md  # テンプレート1の日本語コンテンツ
    └── template2/           # テンプレート2のディレクトリ (同様の構造)
```

### 実際のプラグインの構造例

GROWI公式のテンプレートプラグインの例として以下のリポジトリがあります。

- [growi-plugin-templates-for-office](https://github.com/growilabs/growi-plugin-templates-for-office)
- [growi-plugin-templates-for-designer](https://github.com/growilabs/growi-plugin-templates-for-designer)
- [growi-plugin-templates-for-marketing](https://github.com/growilabs/growi-plugin-templates-for-marketing)

## 開発手順

プラグイン開発の基本的な流れについては、[プラグイン開発の基本](/ja/dev/plugin/development.md) も併せてご参照ください。

### 1. package.json を作成する

package.json を作成し、`growiPlugin` ディレクティブを記載します。

```json
{
  "name": "growi-plugin-templates-example",
  "version": "1.0.0",
  "description": "Example GROWI template plugin",
  "license": "MIT",
  "keywords": [
    "growi",
    "growi-plugin"
  ],
  "type": "module",
  "growiPlugin": {
    "schemaVersion": "4",
    "types": [
      "template"       // 複数のプラグインタイプを同時に設定可能
    ],
    "locales": [
      "en_US", "ja_JP" // サポートする言語(対応言語: "en_US", "ja_JP", "zh_CN", "fr_FR")
    ]
  }
}
```

### 2. テストの追加（オプション）

プラグインの設定が正しいかどうかを確認するためのテストを追加できます。テストを実装するには、`test/index.spec.ts` を作成します。

以下は [GROWI のプリセットテンプレート](https://github.com/weseek/growi/blob/master/packages/preset-templates/test/index.test.ts) を参考にしたテストの例です。

```typescript
import path from 'node:path';

import { scanAllTemplates, validateTemplatePluginGrowiDirective, validateAllTemplateLocales } from '@growi/pluginkit/dist/v4/server';

// プロジェクトのルートディレクトリのパスを取得
const projectDirRoot = path.resolve(__dirname, '../');

// pluginkit のバリデーション関数を使用してテンプレートプラグイン設定を検証
// validateTemplatePluginGrowiDirective は package.json の growiPlugin 設定を自動的に読み込んで検証します

it('Validation for package.json should be passed', () => {

  // when
  const caller = () => validateTemplatePluginGrowiDirective(projectDirRoot);

  // then
  expect(caller).not.toThrow();
});

it('Validation for package.json should be return data', () => {

  // when
  const data = validateTemplatePluginGrowiDirective(projectDirRoot);

  // then
  expect(data).not.toBeNull();
});

it('Scanning the templates ends up with no errors', async() => {
  // when
  const results = await scanAllTemplates(projectDirRoot);

  // then
  expect(results).not.toBeNull();
});

it('Scanning the templates ends up with no errors with opts.data', async() => {

  // setup
  const data = validateTemplatePluginGrowiDirective(projectDirRoot);

  // when
  const results = await scanAllTemplates(projectDirRoot, { data });

  // then
  expect(results).not.toBeNull();
});

it('Validation templates returns true', () => {
  // when
  const result = validateAllTemplateLocales(projectDirRoot);

  // then
  expect(result).toBeTruthy();
});
```

このテストを実行するには、package.json にテスト用のスクリプトを追加し、ライブラリをインストールします。

```json
// package.json
"scripts": {
  "test": "vitest run"
},
"devDependencies": {
  "@growi/pluginkit": "^1.1.0", // GROWI プラグイン開発キット
  "typescript": "^x.x.x",
  "vitest": "^x.x.x"
}
```

```
$ pnpm install
$ pnpm test
```

`pnpm test` コマンドでテストを実行することで、package.json のプラグイン設定が正しいかどうかを自動的に検証できます。

### 3. テンプレートディレクトリとファイルを作成する

dist ディレクトリを作成し、その配下にテンプレートごとのディレクトリを作成します。
各テンプレートディレクトリ内に言語ごとのディレクトリを作成し、それぞれに `meta.json` と `template.md` ファイルを配置します。

#### meta.json の作成

各言語ディレクトリに `meta.json` ファイルを作成します。各言語ごとに異なるタイトルを設定できます。これは、テンプレートの一覧表示時に使われます。

例 `dist/example-template/en_US/meta.json`:

```json
{
  "title": "Example Template"
}
```

#### テンプレートファイルの作成

各言語ディレクトリに `template.md` ファイルを作成します。

例 `dist/example-template/en_US/template.md`:

```markdown
# Example Template

## Overview
This is an example template created for GROWI.

## Details
Add your content here...

## Conclusion
Summary of your document.
```

### 4. 作ったテンプレートを公開する

テンプレートは Git リポジトリとして公開されている必要があります。

1. 作成したプラグインを GitHub リポジトリにプッシュします。
2. リポジトリの「トピック」に `growi-plugin` を追加してください。
3. トピックを追加することで、[GROWI プラグイン一覧](https://growi.org/plugins)ページに自動的に表示されるようになります。
