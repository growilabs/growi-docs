# Plugin development basics

This page explains how to develop plugins. For an overview of GROWI plugins, please also refer to [What are GROWI plugins](/en/dev/plugin/overview.md).

## Basic development flow

Let's create a plugin. GROWI plugin development begins with creating a GitHub repository. Let's proceed step by step with hands-on development.

### 1. Create a GitHub repository

The first step in GROWI plugin development is creating a GitHub repository. In GROWI, one Git repository is treated as one plugin. By managing and publishing plugins on GitHub, you can share them with other users.

For detailed information on creating repositories, please also refer to GitHub's official documentation on [Creating a new repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-new-repository).

1. Log in to your GitHub account.
2. Click the "+" icon in the top right and select "New repository."
3. Set the following information for your repository:
   - Repository name: We recommend starting with `growi-plugin-` (e.g., `growi-plugin-example`)
   - Description: Briefly describe the functionality or purpose of the plugin
   - Visibility: Public (if sharing as open source)
   - Initialize with README.md: Check this for convenience
4. Click the "Create repository" button to create the repository.
5. Clone the created repository to your local environment.

```bash
git clone https://github.com/yourusername/growi-plugin-example.git
cd growi-plugin-example
```

### 2. Create package.json

Set up basic plugin information in package.json. By adding the `growiPlugin` directive, you can have the repository recognized as a GROWI plugin.

To support multiple types of plugins, list the corresponding types in the `types` section of the plugin's package.json file. For example, by writing as follows, one plugin can provide multiple functionalities.

```json
{
  "name": "growi-plugin-example",  // Plugin name
  "version": "1.0.0",
  "description": "Example GROWI plugin", // Plugin description
  "devDependencies": {
    "@growi/pluginkit": "^1.1.0" // GROWI plugin development kit
  },
  "growiPlugin": {
    "schemaVersion": "4",
    "types": [ // Multiple plugin types can be set simultaneously
      "script",
      "theme",
      "template"
    ]
  },
  // Other settings...
}
```

### 3. Install libraries

```
$ pnpm install
```

### 4. Implement the plugin

Files to be placed in the dist directory differ depending on the plugin type.

1. **Script plugins**: JavaScript files
   - Recommended to develop in TypeScript and transpile with Vite

2. **Theme plugins**: CSS files
   - Recommended to develop in SCSS and transpile with Vite

3. **Template plugins**: A set of meta.json and Markdown files

For detailed implementation methods for each plugin type, please refer to the following documentation:

- [Script plugins](/en/dev/plugin/script.html)
- Theme plugins (coming soon)
- Template plugins (coming soon)

### 5. Publish the plugin (optional)

Once you've completed plugin development, publish it with the following steps:

1. Push your created plugin to the GitHub repository.
2. Add `growi-plugin` to the repository's "Topics."
3. By adding this topic, your plugin will automatically appear on the [GROWI Plugin List](https://growi.org/plugins) page.

This allows other GROWI users to find and use the plugin you developed.
