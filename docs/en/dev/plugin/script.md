# Developing script plugins

Script plugins are plugins that provide code developed in JavaScript or TypeScript to extend GROWI's functionality. We recommend developing in TypeScript and transpiling with Vite.

For the basic flow of plugin development, please also refer to [Plugin Development Basics](/en/dev/plugin/development.md).

### Basic structure of script plugins

A typical script plugin has the following structure:

```
growi-plugin-example/
├── client-entry.tsx        # Plugin entry point
├── package.json            # Plugin information and dependencies
├── src/                    # Source code
│   ├── Component.tsx       # React component
│   └── Component.css       # Component styles
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Build configuration
```

### Examples of actual plugin structures

#### Example 1: copy-code-to-clipboard plugin

[growi-plugin-copy-code-to-clipboard](https://github.com/growilabs/growi-plugin-copy-code-to-clipboard) is a simple plugin that adds a copy button to code blocks.

```
growi-plugin-copy-code-to-clipboard/
├── client-entry.ts             # Plugin entry point
├── package.json                # Plugin information and dependencies
├── src/                        # Source code
│   ├── components/             # Components directory
│   │   └── CopyCodeButton.tsx  # Copy button component
│   └── styles/                 # Styles directory
│       └── CopyCodeButton.css  # Button styles
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Build configuration
```

#### Example 2: datatables plugin

[growi-plugin-datatables](https://github.com/growilabs/growi-plugin-datatables) adds DataTable functionality to GROWI tables.

```
growi-plugin-datatables/
├── client-entry.tsx            # Plugin entry point (using JSX)
├── package.json                # Plugin information and dependencies
├── src/                        # Source code
│   ├── CalcMethod.ts           # Calculation method related file
│   ├── DataTable.tsx           # DataTable component
│   ├── DataTable.css           # DataTable component styles
│   ├── DataTableCustom.d.ts    # Type definition file
│   └── mock/                   # Mock data directory
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Build configuration
```

## Development procedure

### 1. Edit package.json

```json
{
  "name": "growi-plugin-example",  // Plugin name
  "version": "1.0.0",
  "description": "Example GROWI plugin", // Plugin description
  "type": "module", // Set as ES module
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
    "@growi/pluginkit": "^1.1.0", // GROWI plugin development kit
    "typescript": "^x.x.x",
    "vite": "^^x.x.x" // Build tool
  },
  "growiPlugin": {
    "schemaVersion": "4",
    "types": [ // Multiple plugin types can be set simultaneously
      "script"
    ]
  },
  // Other settings...
}
```

### 2. Install libraries

```
$ pnpm install
```

### 3. Implement the plugin

To implement a script plugin, you need to implement the following three elements in the main entry point file (client-entry.tsx in this example):

1. **activate function**: Function executed when the plugin is activated
2. **deactivate function**: Function executed when the plugin is deactivated
3. **Plugin registration**: Registration to the `window.pluginActivators` object
    - Register the activate and deactivate functions with the plugin name as the key
    - This allows the GROWI core to find the plugin by searching this object at startup

```typescript
//client-entry.tsx 
const activate = (): void => {
  // Check if GROWI core is available
  if (growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }

  // Process to execute
};

const deactivate = (): void => {
  // Cleanup process (implement as needed)
};

// Registration to the `window.pluginActivators` object
if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators['growi-plugin-my-feature'] = {
  activate,
  deactivate,
};
```

#### Implementing React components

In script plugins, you can customize GROWI's UI using React components. A practical implementation example can be found in [growi-plugin-copy-code-to-clipboard](https://github.com/growilabs/growi-plugin-copy-code-to-clipboard).

### 4. Vite configuration

Configure build settings in the vite.config.ts file.

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

### 5. Build the plugin

```
$ pnpm build
```

This generates built files in the `dist` directory.
