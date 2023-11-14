# Plugins

You can customize GROWI by Plugins.

Please check [GROWI plugin site](https://growi.org/plugins) for publicly available plugins.

[[toc]]

## How to install plugins

1. Go to [GROWI plugin site](https://growi.org/plugins).
1. Copy the URL of the GitHub repository that you want to install.
<img :src="$withBase('/assets/images/en/plugin-1.png')" alt="copy_botton">
1. Go to "Plugins" in the administration menu.
<img :src="$withBase('/assets/images/en/plugin-2.png')" alt="plugin_section">
1. Input the URL of GitHub repository.
<img :src="$withBase('/assets/images/en/plugin-3.png')" alt="install_url">
1. Click on the "Install" button.
<img :src="$withBase('/assets/images/en/plugin-4.png')" alt="install_button">
1. The plugin would be added in Plugin Card. You can activate/deactivate plugins with the ON/OFF switch.
<img :src="$withBase('/assets/images/en/plugin-5.png')" alt="plugin_card">

## Plugin Installer

- Specify the URL of the GitHub repository to install the plugin.
- You can also select a branch of the repository.

::: warning

If a plugin is already installed, reinstalling it from the same repository will overwrite the existing plugin.
Also, even if the branches are different, if the repositories are the same, the plugin will be overwritten.
:::

## Plugin Card

- You can check installed plugins on Plugin Card.
- You can activate/deactivate or delete plugins.
