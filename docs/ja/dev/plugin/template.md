# テンプレートプラグインを開発する

テンプレートプラグインは、GROWI のエディタで使用できるテンプレートを提供するプラグインです。

## テンプレートプラグインの基本構造

典型的なテンプレートプラグインは以下のような構造を持っています。

```
growi-plugin-templates-example/
├── package.json             # プラグイン情報と依存関係
└── dist/                    # テンプレートファイルが格納されるディレクトリ
    ├── template1/          # テンプレート1のディレクトリ
    │   ├── en_US/         # 英語版テンプレート
    │   │   ├── meta.json # テンプレート1の英語メタデータ
    │   │   └── template.md # テンプレート1の英語コンテンツ
    │   └── ja_JP/         # 日本語版テンプレート 
    │       ├── meta.json # テンプレート1の日本語メタデータ
    │       └── template.md # テンプレート1の日本語コンテンツ
    └── template2/          # テンプレート2のディレクトリ (同様の構造)
```

## 実際のプラグインの構造例

GROWI公式のテンプレートプラグインの例として以下のリポジトリがあります。

- [growi-plugin-templates-for-office](https://github.com/growilabs/growi-plugin-templates-for-office)
- [growi-plugin-templates-for-designer](https://github.com/growilabs/growi-plugin-templates-for-designer)
- [growi-plugin-templates-for-marketing](https://github.com/growilabs/growi-plugin-templates-for-marketing)

## 開発手順

### 1. package.json を作成する

package.jsonを以下のように編集します。

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
  "devDependencies": {
    "@growi/pluginkit": "^1.1.0" // GROWI プラグイン開発キット
  },
  "growiPlugin": {
    "schemaVersion": "4",
    "types": [
      "template"                 // 複数のプラグインタイプを同時に設定可能
    ],
    "locales": [
      "en_US", "ja_JP"          // サポートする言語(対応言語: "en_US", "ja_JP", "zh_CN", "fr_FR")
    ]
  }
}
```

### 2. テンプレートディレクトリとファイルを作成する

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

### 3. 作ったテンプレートを公開する

テンプレートは Git リポジトリとして公開されている必要があります。

1. 作成したプラグインを GitHub リポジトリにプッシュします。
2. リポジトリの「トピック」に `growi-plugin` を追加してください。
3. トピックを追加することで、[GROWI プラグイン一覧](https://growi.org/plugins)ページに自動的に表示されるようになります。
