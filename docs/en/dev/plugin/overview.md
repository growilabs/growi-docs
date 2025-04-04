# What are GROWI plugins

GROWI plugins are mechanisms to extend GROWI's functionality. Through plugin development, you can add custom features or modify existing ones without changing GROWI's core system. This page provides basic information for plugin developers.

In GROWI, one Git repository is treated as one plugin. Currently, only GitHub repositories are supported, but there are plans to support other Git hosting services in the future.

## Benefits of plugins

1. **Modularity**: Develop features as independent modules
2. **Reusability**: Use developed plugins across multiple GROWI instances
3. **Maintainability**: Update and maintain independently from the core system
4. **Sharing**: Share with the community for other users to benefit

## Types of plugins

GROWI supports the following three types of plugins.

These plugin types are not mutually exclusive; a single Git repository can provide multiple types of plugin functionality. For example, it's possible to implement a script plugin that also provides theme plugin functionality. For details, refer to [Plugin Development Basics](/en/dev/plugin/development.html).

### 1. Script plugins

Plugins that extend GROWI's functionality using client-side JavaScript. Mainly customizes frontend display and behavior. For details, see [Developing script Plugins](/en/dev/plugin/script.html).

**Example uses**:

- Customize Markdown rendering
- Add or modify UI components
- Integrate with external APIs
- Add data visualization features

### 2. Template plugins

Plugins that provide page templates for use in GROWI. For details, see [Developing template plugins](/en/dev/plugin/template.html).

**Example uses**:

- Meeting minutes templates
- Project plan templates
- Checklist templates
- Weekly and monthly report templates

### 3. Theme plugins

Plugins that customize GROWI's appearance. For details, see [Developing theme plugins](/en/dev/plugin/theme.html).

**Example uses**:

- Custom color schemes
- Layout changes
- Font and style customization

## How to install plugins

For information on how to install GROWI plugins, please refer to [Plugins](/en/admin-guide/management-cookbook/plugins.html).

## Related information

### Official packages

- [@growi/pluginkit](https://github.com/weseek/growi/tree/master/packages/pluginkit): Official utilities for GROWI plugin development (React hooks can be easily used from version 1.1.0 onwards)

### Official plugins

- [GROWI Plugin List](https://growi.org/plugins)
