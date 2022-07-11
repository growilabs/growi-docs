# Debugging

::: warning
This page is written for development on the `support/apply-nextjs-2` branch.
:::

This documentation explains how you can debug frontend and backend code using Browser DevTools or VS Code debugger.

[[toc]]

## Debugging with Browser DevTools

You can debug client-side code by using DevTools in your browser.

### Chrome

1. Start development server `yarn dev`.
1. [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
    - You can debug client-side code by using [Sources panel](https://developer.chrome.com/docs/devtools/javascript/sources/).
    - If you open a TypeScript file by `Ctrl + P`, you should choose files under `webpack://_N_E/`.

![Chrome source panel](/assets/images/debugging-chrome-source-panel.png)

### Firefox

1. Start development server `yarn dev`.
1. [Firefox DevTools](https://developer.mozilla.org/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)
    - You can debug client-side code by using [JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/).
    - If you open a TypeScript file by `Ctrl + P`, a original source file is a file of the name with a random suffix such as `?xxxx`.
        - Or you can select a file under the `Webpack` folder from the source file tree in the left column.

![Firefox debugger panel](/assets/images/debugging-firefox-debugger-panel.png)

## Debugging with VS Code

VS Code supports debugging of both client-side and server-side code.

### Client-side code

You can debug in the same way as in [Debugging with Browser DevTools](#debugging-with-browser-devtools).
Breakpoints can be set for source code being edited on VS Code.

- Chrome
    1. Start development server `yarn dev`.
    1. Choose [**Debug: Chrome**] from the **Run and Debug** panel.

    ![VSCode Chrome debugger](/assets/images/debugging-vscode-chrome-debugger.png)

- Firefox
    1. Start development server `yarn dev`.
    1. Choose [**Debug: Firefox**] from the **Run and Debug** panel.

    ![VSCode Firefox debugger](/assets/images/debugging-vscode-firefox-debugger.png)

### Server-side code

The VS Code debugger can be attached to the development server in two ways.

- Use [Debug: Attach Debugger to Server]
    - **Features: Fast and flexible, attach/detach at any time during development**
    - Follow the steps below:
        1. Start development server `yarn dev` first.
            - Verify that the `9229` port forwarding is listed in the Ports panel.

            ![Portforwarding](/assets/images/debugging-portforwarding.png)

        1. Choose [**Debug: Attach Debugger to Server**] from the **Run and Debug** panel.

        ![VSCode Attach Debugger to Server debugger](/assets/images/debugging-vscode-attach-debugger-to-server-debugger.png)

- Use [Debug: Server]
    - **Feature: You can set breakpoints for the server startup process**
    - Follow the steps below:
        1. Select [**Debug: Server**] from the **Run and Debug** panel.

        ![VSCode Server debugger](/assets/images/debugging-vscode-server-debugger.png)

If the debugger attached successfully, the status bar of VS Code turns orange color. In this state, you can debug by setting breakpoints in any server-side code.

::: tip Handling Unbound Breakpoints
If you set a breakpoint but still get an Unbound breakpoint, check the following.

- Verify that it is imported/required from Express code.
- Among the files under `packages/app/src/pages`, the file with the extension `*.page.ts` is [Pages Component of Next.js](https://nextjs.org/docs/basic-features/pages).
Since these files have not yet been compiled immediately after the development server is started, breakpoints cannot be set. Please compile a page component by accessing the relevant page from your browser.
- If you are experiencing instability with your breakpoints being enabled or disabled (unbound breakpoints), consider setting the `--nolazy` option to your Node.js process.    
Reference: [Breakpoint validation](https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_breakpoint-validation)
:::
