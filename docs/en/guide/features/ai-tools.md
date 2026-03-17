# Using AI Tools (Skills)

## What are AI Tools?

AI Tools (Skills) are extensions provided by GROWI MCP Server.
By installing skills in your MCP client (such as Claude Desktop),
you can use advanced workflows integrated with GROWI.

To use AI Tools, you need to connect to GROWI MCP via UTCP Code-Mode.

::: warning
You need to complete the UTCP Code-Mode configuration beforehand.
For setup instructions, see the "Connecting via UTCP Code-Mode" section
in [GROWI MCP Server](/en/guide/features/mcp-server.html).
:::

## Installing Skills

Once you have confirmed the GROWI MCP connection via UTCP,
install skills using one of the methods below for your MCP client.

### Claude Desktop (Cowork)

1. Go to **Customize** > **Personal Plugins** (click the + icon).
1. Click **Browse Plugins** > select the **Personal** tab.
1. Click the + icon next to **Local Upload**.
1. Select **Add marketplace from GitHub**.
1. Enter the following URL and click **Sync**.

```text
https://github.com/growilabs/growi-mcp-server
```

### Claude Code

Add this repository as a plugin marketplace, then install the plugin.

```bash
/plugin marketplace add growilabs/growi-mcp-server
/plugin install mcp-client-skills
```

### Gemini CLI

Install as a Gemini CLI extension (includes both MCP tools and skills).

```bash
gemini extensions install https://github.com/growilabs/growi-mcp-server
```

Update with:

```bash
gemini extensions update growi-mcp-server
```

### Skills.sh (Vercel)

Works with [many agents](https://skills.sh/) including Claude Code and Gemini CLI.

```bash
npx skills add growilabs/growi-mcp-server
```

Update with:

```bash
npx skills update
```

### Manual Installation

Download skills directly from the repository and place them
in your agent's skills directory.

1. Copy the desired skill directory from `skills/` in the [growi-mcp-server](https://github.com/growilabs/growi-mcp-server) repository.
1. Place it in your agent's skills directory:
   - Claude Code: `.claude/skills/<skill-name>/SKILL.md`
   - Gemini CLI: `.gemini/skills/<skill-name>/SKILL.md`
   - Other agents: `.agents/skills/<skill-name>/SKILL.md`

## Smart Save

### What is Smart Save?

Smart Save is a feature that automatically suggests destination directories
when saving content to GROWI using AI.

Simply tell your MCP client "Save this to GROWI," and it will analyze the content,
search for related pages and appropriate categories,
and present destination candidates.
It interactively guides you through the entire workflow,
from selecting a destination to deciding on a page name
and confirming visibility settings.

### Basic Usage

Give instructions like the following in your MCP client
to start the Smart Save workflow.

```text
Save this content to GROWI
```

```text
Summarize the research results and save them to the wiki
```

### Workflow

1. **Destination suggestions** — AI analyzes the content and presents destination candidates such as the memo area or near related pages. You can also specify a path manually.
1. **Page name confirmation** — A page name is suggested based on the content.
1. **Visibility confirmation** — Select the visibility level appropriate for the destination.
1. **Save** — After confirmation, the page is created.
