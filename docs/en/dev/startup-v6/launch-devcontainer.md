# Launch devcontainer

::: tip Note
The below documentation details our development environment at WESEEK Inc. It may include some tools that are not necessary for your use case.
:::

## Launch

1. Open Visual Studio Code
1. From the Command Palette, open the devcontainer repository
    * Open the Command Palette: `Ctrl+Shift+P` or `<F1>`
    * `Dev Containers: Open folder in Container...`
    * Select the weseek/growi repository
        * WSL path for Windows: `\\wsl$\Ubuntu\home\{your account}\Projects\GROWI\growi`
            * Replace `{your account}` with your own account name
1. For first time users wait 5-10 minutes for the download and building of various docker container images.
1. If there was no error, you should see docker containers in Remote Explorer in the sidebar
    * <img :src="$withBase('/assets/images/growi-dev-ready.png')" alt="ready">


## Confirmation

To ensure there were no errors in setup, confirm the following information in the GROWI-Dev devcontainer window.


### Git Settings

* In terminal, display your Git settings.  They should look similar to the following.
  * In Windows, check the WSL global settings
  * In Mac, check the local PC global settings

    ```bash
    node ➜ /workspace/growi-docs (master) $ git config -l --show-origin
    file:/home/node/.gitconfig      user.name=Your Name
    file:/home/node/.gitconfig      user.email=yourname@example.com
    file:/home/node/.gitconfig      core.autocrlf=false
    file:/home/node/.gitconfig      credential.helper=!f() { /home/node/.vscode-server/bin/a5d1cc28bb5da32ec67e86cc50f84c67cc690321/node /tmp/vscode-remote-containers-c717012556037588bd78c4b869724bf548d49841.js $*; }; f
    ...
    ```

  * It is normal for the `credential.helper` setting to look like a script as shown above
  


## Troubleshooting

### Remote WSL connestion failure

#### Symptom of the problem

```
sh: 1: /scripts/wslServer.sh: not found
```

#### Resolution

1. Uninstall VSCode
1. Delete `C:\Users\${YourAccount}\.vscode`
1. Reinstall VSCode
