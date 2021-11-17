# Preparing a Workspace

::: tip Note
The below documentation details our development environment at WESEEK Inc.  It may include some tools that are not necessary for your use case.
:::

In order to develop using devcontainer, you need to set up a directory tree as follows:

```
- GROWI
    - growi                   <-- weseek/growi repository
    - growi-docker-compose    <-- weseek/growi-docker-compose repository
```

## Procedures

* If you are using Windows, use WSL to execute the following commands; on Mac use the included terminal

::: warning
**Check before starting**
`git config -l --global` should show autoCRLF set to false
:::

```bash
mkdir -p ~/Projects/GROWI
cd ~/Projects/GROWI
git clone https://github.com/weseek/growi.git
git clone https://github.com/weseek/growi-docker-compose.git
# Create an empty directory for plugin development
mkdir node_modules
```

## Register in the SourceTree repository list

* Register the repository cloned above
  * Path for WSL (Windows users): `\\wsl$\Ubuntu\home\{your account}\Projects\GROWI\growi`


