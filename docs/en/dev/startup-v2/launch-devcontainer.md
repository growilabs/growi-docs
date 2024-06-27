# Launch devcontainer

::: tip Note
The below documentation details our development environment at WESEEK Inc. It may include some tools that are not necessary for your use case.
:::

## Launch

1. Open Visual Studio Code
1. From the Remote Connection indicator, open the devcontainer repository
    * <img :src="$withBase('/assets/images/vscode-remote-button.png')" alt="indicator">
    * Remote-Containers: Open folder in Container...
    * Select the growilabs/growi repository
        * WSL path for Windows: `\\wsl$\Ubuntu\home\{your account}\Projects\GROWI\growi`
1. For first time users wait 5-10 minutes for the download and building of various docker container images.
1. If there was no error, you should see 5 docker container images in the sidebar
    * <img :src="$withBase('/assets/images/growi-dev-ready.png')" alt="ready">


## Confirmation

To ensure there were no errors in setup, confirm the following information in the GROWI-Dev devcontainer window.


### Git Settings

* In terminal, display your Git settings.  They should look similar to the following.
  * In Windows, check the WSL global settings
  * In Mac, check the local PC global settings

    ```bash
    $ git config -l --show-origin
    file:/home/node/.gitconfig      user.name=Your Name
    file:/home/node/.gitconfig      user.email=yourname@example.com
    file:/home/node/.gitconfig      credential.helper=!f() { /home/node/.vscode-server/bin/a5d1cc28bb5da32ec67e86cc50f84c67cc690321/node /tmp/vscode-remote-containers-c717012556037588bd78c4b869724bf548d49841.js $*; }; f
    file:.git/config        core.repositoryformatversion=0
    file:.git/config        core.filemode=true
    file:.git/config        core.bare=false
    file:.git/config        core.logallrefupdates=true
    file:.git/config        remote.origin.url=https://github.com/growilabs/growi.git
    file:.git/config        remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
    file:.git/config        branch.master.remote=origin
    file:.git/config        branch.master.merge=refs/heads/master
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
