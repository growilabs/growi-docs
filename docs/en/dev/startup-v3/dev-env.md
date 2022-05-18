# Creating a Development Environment

::: warning
As of 2022.05, building a development environment on a Mac with M1 is not recommended.
:::

## Preparing Tools

::: tip Note
The below documentation details our development environment at WESEEK Inc. It may include some tools that are not necessary for your use case.
:::


## Install an execution environment for docker and docker-compose

:::: tabs

::: tab "Windows" id="tab-docker-win"

1. Install Ubuntu on WSL2

    ```bash
    > wsl --install
    ```

    * Confirmation

        ```bash
        > wsl -l -v
        NAME      STATE           VERSION
        * Ubuntu    Stopped         2
        ```

    1. Limit memory size due to the issue that WSL 2 consumes massive amounts of RAM ([Microsoft/WSL#4166](https://github.com/microsoft/WSL/issues/4166))
        * Edit or create `C:\Users\YourAccount\.wslconfig`

        ```properties
        [wsl2]
        memory=6GB
        swap=0
        ```

1. [Docker Desktop](https://www.docker.com/products/docker-desktop) をインストール

:::

::: tab "Old Windows 10" id="tab-docker-win10"

1. Set up the environment for use with WSL2
    1. Install the [WSL2 Linux Kernel Package](https://docs.microsoft.com/en-us/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package)
    1. Open PowerShell with administrator privileges and execute the following:

        ```bash
        # Disable Hyper-V
        Disable-WindowsOptionalFeature -Online -FeatureName $("Microsoft-Hyper-V")
        # Enable WSL
        Enable-WindowsOptionalFeature -Online -FeatureName $("VirtualMachinePlatform", "Microsoft-Windows-Subsystem-Linux")
        ```

    1. Install Ubuntu from the Microsoft Store
        * Install the "Ubuntu" package (with no version number in the title)
            * The latest version (20.04 as of this writing) will automatically be installed
        * Set up your user account and log in
        * Confirmation

            ```bash
            > wsl -l -v
            NAME      STATE           VERSION
            * Ubuntu    Stopped         2
            ```

        * If the VERSION says 1, execute `wsl --set-version Ubuntu 2` to change the distribution.
    1. Limit memory size due to the issue that WSL 2 consumes massive amounts of RAM ([Microsoft/WSL#4166](https://github.com/microsoft/WSL/issues/4166))
        * Edit or create `C:\Users\YourAccount\.wslconfig`

        ```properties
        [wsl2]
        memory=6GB
        swap=0
        ```

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)

:::

::: tab "Mac" id="tab-docker-mac"

1. Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
    1. Increase the RAM because of 2 GB runtime memory is set by default.
        * Reference: [Get started with Docker Desktop for Mac | Resources](https://docs.docker.com/docker-for-mac/#resources)

:::

::::


## Git Setup

Devcontainer will automatically inherit settings from Docker.  
These settings must be set up on the host side.

:::: tabs

::: tab "Windows" id="tab-git-configuration-win"

1. In a WSL2 terminal on the docker host machine, execute the following commands

    ```bash
    # name, email settings
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    # If you are using Windows, you will also need to set up a credential helper for WSL to reference the local machines settings
    git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/libexec/git-core/git-credential-manager-core.exe"
    ```

:::

::: tab "Mac" id="tab-git-configuration-mac"

1. Open a terminal and execute the following commands

    ```bash
    # name, email settings
    git config --global user.name "Your Name"
    git config --global user.email "yourname@example.com"
    ```

1. Setup Git Credential Helper (GCM)
    <https://docs.github.com/en/get-started/getting-started-with-git/caching-your-github-credentials-in-git>

:::

::::

## Set up Visual Studio Code

1. Install [Visual Studio Code](https://code.visualstudio.com/download)
2. Install extensions
    * Remote - Development
    * Docker



## GUI Client for MongoDB

1. Install [Robo 3T](https://robomongo.org/download)


## Preparing a Workspace

::: tip Note
The below documentation details our development environment at WESEEK Inc. It may include some tools that are not necessary for your use case.
:::

In order to develop using devcontainer, you need to set up a directory tree as follows:

```
- GROWI
    - growi                   <-- weseek/growi repository
    - growi-docker-compose    <-- weseek/growi-docker-compose repository
```

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
```
