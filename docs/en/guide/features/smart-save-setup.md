# Using Smart Save

## What is Smart Save?

Smart Save is a feature that automatically suggests destination directories when saving content to GROWI using AI.

Simply tell Claude Desktop "Save this to GROWI," and it will analyze the content, search for related pages and appropriate categories, and present destination candidates.
It interactively guides you through the entire workflow, from selecting a destination to deciding on a page name and confirming visibility settings.

To use Smart Save, you need to configure a connection to GROWI MCP via UTCP Code-Mode and install the Smart Save skill.

::: tip
UTCP (Universal Tool Calling Protocol) is an intermediate layer for efficiently utilizing MCP servers. It reduces token consumption by combining multiple tool calls into a single request.
:::

## Setting Up UTCP Code-Mode (Claude Desktop)

This section explains how to configure Smart Save for use with Claude Desktop.

::: warning
You need to obtain a GROWI access token beforehand.
For instructions on obtaining an access token, see [GROWI MCP Server](/en/guide/features/mcp-server.html).
:::

### Setup Steps

#### 1. Create the UTCP Configuration File

Create `.utcp_config.json` in your home directory.

**Windows:** `C:\Users\<username>\.utcp_config.json`

**macOS/Linux:** `~/.utcp_config.json`

```json
{
  "manual_call_templates": [
    {
      "name": "growi",
      "call_template_type": "mcp",
      "config": {
        "mcpServers": {
          "growi": {
            "transport": "stdio",
            "command": "npx",
            "args": ["-y", "@growi/mcp-server"],
            "env": {
              "GROWI_API_TOKEN_1": "<API token>",
              "GROWI_APP_NAME_1": "<app name>",
              "GROWI_BASE_URL_1": "<GROWI URL>",
              "GROWI_DEFAULT_APP_NAME": "<default app name>"
            }
          }
        }
      }
    }
  ]
}
```

::: tip
If you want to place `.utcp_config.json` in a different location such as within a repository, you can specify the full path using the `UTCP_CONFIG_FILE` environment variable in the Claude Desktop configuration described below. Since the file contains API tokens, adding it to `.gitignore` is recommended.
:::

##### Configuration Parameters

| Variable | Required | Description |
|----------|----------|-------------|
| `GROWI_API_TOKEN_1` | ✅ | Access token issued by GROWI |
| `GROWI_APP_NAME_1` | ✅ | Identifier name for the GROWI app (any name) |
| `GROWI_BASE_URL_1` | ✅ | Base URL of the GROWI instance (e.g., `https://wiki.example.com`) |
| `GROWI_DEFAULT_APP_NAME` | ❌ | Default app name to use (can be omitted for single app setups) |

##### Using Multiple GROWI Instances

To use multiple GROWI instances, add entries with incrementing numbers (`_2`, `_3`, ...) in the `env` section.

```json
"env": {
  "GROWI_DEFAULT_APP_NAME": "production",

  "GROWI_APP_NAME_1": "production",
  "GROWI_BASE_URL_1": "https://wiki.example.com",
  "GROWI_API_TOKEN_1": "token_for_production",

  "GROWI_APP_NAME_2": "staging",
  "GROWI_BASE_URL_2": "https://wiki-staging.example.com",
  "GROWI_API_TOKEN_2": "token_for_staging"
}
```

#### 2. Configure UTCP in Claude Desktop

1. Launch the Claude Desktop app.
1. Open the settings.
   - macOS: `Cmd + ,`
   - Windows: `Ctrl + ,`
1. Select the "Developer" tab.
1. Click "Edit Config" to open the configuration file.

#### 3. Edit the Configuration File

Add UTCP Code-Mode as an MCP server in the configuration file (`claude_desktop_config.json`).

```json
{
  "mcpServers": {
    "code-mode": {
      "command": "npx",
      "args": ["-y", "@utcp/code-mode-mcp"],
      "env": {
        "UTCP_CONFIG_FILE": "<full path to .utcp_config.json>"
      }
    }
  }
}
```

**Example for Windows:**

```json
{
  "mcpServers": {
    "code-mode": {
      "command": "npx",
      "args": ["-y", "@utcp/code-mode-mcp"],
      "env": {
        "UTCP_CONFIG_FILE": "C:/Users/tomoyuki-t/.utcp_config.json"
      }
    }
  }
}
```

::: warning
Even if `.utcp_config.json` is placed in the home directory, the full path must be specified.
:::

#### 4. Restart Claude Desktop

After saving the configuration file, fully quit and restart the Claude Desktop app.

#### 5. Verify the Connection

Ask Claude "Can you connect to GROWI?" to verify that MCP is working correctly via UTCP.

If the connection is successful, Claude will respond and GROWI operations will become available.

## Installing the Smart Save Skill

Once you have confirmed the GROWI MCP connection via UTCP, install the Smart Save skill as a plugin.

1. Go to **Customize** > **Personal Plugins** (click the + icon).
1. Click **Browse Plugins** > select the **Personal** tab.
1. Click the + icon next to **Local Upload**.
1. Select **Add marketplace from GitHub**.
1. Enter the following URL and click **Sync**.

```
https://github.com/growilabs/growi-mcp-server
```

## Using Smart Save

### Basic Usage

Give instructions like the following in Claude Desktop to start the Smart Save workflow.

```
Save this content to GROWI
```

```
Summarize the research results and save them to the wiki
```

### Workflow

1. **Destination suggestions** — AI analyzes the content and presents destination candidates such as the memo area or near related pages. You can also specify a path manually.
1. **Page name confirmation** — A page name is suggested based on the content.
1. **Visibility confirmation** — Select the visibility level appropriate for the destination.
1. **Save** — After confirmation, the page is created.

### Troubleshooting

#### Warning Messages on Startup

```
MCP code-mode: Unexpected token 'M', "[McpCommuni"... is not valid JSON
```

This warning is caused by UTCP internal logs being output to stdout. The tools function normally, so you can continue using them as-is.

#### Tools Not Found

1. Verify that the path to `.utcp_config.json` is correct.
1. Verify that the GROWI URL includes `https://`.
1. Verify that the URL does not end with a trailing slash (`/`).
1. Restart Claude Desktop.
