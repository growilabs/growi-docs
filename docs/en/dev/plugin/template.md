# Developing template plugins

Template plugins provide standardized text and structured formats that can be used when creating pages in GROWI.

## What are templates

GROWI's template feature helps efficiently create pages with the same structure (meeting minutes, weekly reports, manuals, etc.) that are frequently created. Using templates provides the following benefits:

- Saves the effort of manually entering the same headings and structures each time
- Standardizes page structures within a team
- Prevents omission of necessary items

For example, a template for meeting minutes might have the following predefined structure:

```markdown
# Meeting title

## Date and time
yyyy/mm/dd hh:mm

## Participants
- Name 1
- Name 2

## Agenda
### Item 1
- Content
- Decisions

### Item 2
- Content
- Decisions
```

## Role of template plugins

By developing template plugins, you can provide GROWI users with a collection of templates specialized for specific purposes. This allows for sharing templates tailored to your organization's specific formats and workflows, and maintaining consistent document structures across multiple GROWI instances.

Template plugins are installed by system administrators, and end users can easily insert and use these templates from the template selection menu in the editor.

For more information on how to use templates, please also refer to [Creating and Using Page Templates](/en/guide/features/template.md).

## Multilingual support for templates

Template plugins can provide templates in multiple languages. GROWI currently supports 4 languages: English (en_US), Japanese (ja_JP), Chinese (zh_CN), and French (fr_FR).

### Language switching function

The modal dialog that appears when inserting a template includes a language switching feature. Users can switch to a different language version of the template by clicking on the language switch buttons (e.g., "ja_JP", "en_US", etc.) in this modal.

<img :src="$withBase('/assets/images/en/select-template.png')" alt="select-template.png" class="border">

### Partial multilingual support is possible

When developing template plugins, you don't need to support all the languages that GROWI supports (4 languages). For example, you can develop a template plugin that only supports Japanese (ja_JP) and English (en_US).

## Basic structure of template plugins

A typical template plugin has the following structure:

```
growi-plugin-templates-example/
├── package.json            # Plugin information and dependencies
└── dist/                   # Directory containing template files
    ├── template1/          # Directory for template 1
    │   ├── en_US/          # English version of the template
    │   │   ├── meta.json   # English metadata for template 1
    │   │   └── template.md # English content for template 1
    │   └── ja_JP/          # Japanese version of the template 
    │       ├── meta.json   # Japanese metadata for template 1
    │       └── template.md # Japanese content for template 1
    └── template2/          # Directory for template 2 (same structure)
```

### Examples of actual plugin structures

The following repositories are examples of official GROWI template plugins:

- [growi-plugin-templates-for-office](https://github.com/growilabs/growi-plugin-templates-for-office)
- [growi-plugin-templates-for-designer](https://github.com/growilabs/growi-plugin-templates-for-designer)
- [growi-plugin-templates-for-marketing](https://github.com/growilabs/growi-plugin-templates-for-marketing)

## Development process

For the basic workflow of plugin development, please also refer to [Plugin development basics](/en/dev/plugin/development.md).

### 1. Create package.json

Create a package.json file and include the `growiPlugin` directive.

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
      "template"       // Multiple plugin types can be set simultaneously
    ],
    "locales": [
      "en_US", "ja_JP" // Supported languages (available languages: "en_US", "ja_JP", "zh_CN", "fr_FR")
    ]
  }
}
```

### 2. Add tests (optional)

You can add tests to verify that your plugin configuration is correct. To implement tests, create `test/index.spec.ts`.

Here's an example of a test based on [GROWI's preset templates](https://github.com/growilabs/growi/blob/master/packages/preset-templates/test/index.test.ts):

```typescript
import path from 'node:path';

import { scanAllTemplates, validateTemplatePluginGrowiDirective, validateAllTemplateLocales } from '@growi/pluginkit/dist/v4/server';

// Get the path to the project root directory
const projectDirRoot = path.resolve(__dirname, '../');

// Use the pluginkit validation functions to verify the template plugin configuration
// validateTemplatePluginGrowiDirective automatically reads and validates the growiPlugin configuration in package.json

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

To run this test, add a test script to package.json and install the necessary libraries:

```json
// package.json
"scripts": {
  "test": "vitest run"
},
"devDependencies": {
  "@growi/pluginkit": "^1.1.0", // GROWI plugin development kit
  "typescript": "^x.x.x",
  "vitest": "^x.x.x"
}
```

```
$ pnpm install
$ pnpm test
```

Running the `pnpm test` command will automatically validate that your plugin configuration in package.json is correct.

### 3. Create template directories and files

Create a dist directory, and within it, create directories for each template.
Within each template directory, create directories for each language, and place `meta.json` and `template.md` files in each of them.

#### Create meta.json

Create a `meta.json` file in each language directory. You can set different titles for each language. This is used when displaying the template list.

Example `dist/example-template/en_US/meta.json`:

```json
{
  "title": "Example Template"
}
```

#### Create template files

Create a `template.md` file in each language directory.

Example `dist/example-template/en_US/template.md`:

```markdown
# Example Template

## Overview
This is an example template created for GROWI.

## Details
Add your content here...

## Conclusion
Summary of your document.
```

### 4. Publish your templates

Templates need to be published as a Git repository.

1. Push your created plugin to a GitHub repository.
2. Add `growi-plugin` to the repository's "topics".
3. By adding this topic, your plugin will automatically be displayed on the [GROWI plugins list](https://growi.org/plugins) page.
