# GROWI MCP Server

## What is GROWI MCP?

### Overview

GROWI MCP is an official GROWI tool that leverages the Model Context Protocol (MCP) to integrate GROWI with Claude Desktop and other applications. MCP is an open standard protocol developed by Anthropic for connecting AI assistants with various tools and data sources.

By using GROWI MCP, you can perform GROWI operations such as page creation, editing, and searching simply by interacting with MCP clients like Claude Desktop.  
This significantly streamlines information gathering and document creation workflows, making Wiki management more flexible and efficient.

### Key Features

- **Page Management**: Create, update, delete, and duplicate pages
- **Search Functionality**: Advanced search and page information retrieval
- **Tag Management**: Add, update, and search tags
- **Sharing Features**: Create and manage share links
- **Version Control**: View and manage revisions

<ContextualBlock context="help-growi-cloud">

::: warning
As of November 2025, GROWI MCP is under development and all features are available on all GROWI instances.

In the future, as we improve the MCP functionality itself, features available for GROWI instances managed on GROWI.cloud may be restricted according to your subscription plan.
:::

</ContextualBlock>

## 4 Ways to Use GROWI MCP

By utilizing GROWI MCP, your daily Wiki operations become more convenient.  
Here are four specific use cases.

<iframe width="560" height="315"
  src="https://www.youtube.com/embed/UIXIJRKf43c"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowfullscreen>
</iframe>

<https://youtu.be/UIXIJRKf43c>

### ① Streamlining Information Gathering

You can delegate to AI the task of collecting information from multiple sources and organizing it in GROWI.

For example, simply instruct "Research the latest frontend technologies and summarize them on a page called /tech/frontend-trends," and the AI will perform web searches, organize the collected information, and automatically create a GROWI page.  
This is particularly powerful for research reports, market analyses, technology trend summaries, and other situations requiring research.

Additionally, you can search for information related to specific topics across existing pages within your organization and reorganize it from a new perspective.  
The task of consolidating scattered information in one place can be easily accomplished through conversation.

### ② Automatic Page Generation

You can automate the creation of standardized documents and template-based pages.

For documents you create repeatedly, simply instruct "Create a standard set of project pages under /projects/new-project," and the necessary page structure will be generated together.

You can also load external data (CSV, API responses, etc.) and automatically generate list pages and detail pages based on it.  
Mass page creation tasks that would take time manually can be completed in a short time.

### ③ Updating Existing Pages

You can streamline the updating and maintenance of information accumulated in GROWI.

Instructions like "Add new member information to the /team/members page" or "Update old technical information with the latest" allow you to appropriately update existing pages.  
Batch updates across multiple pages and unification to specific formats can also be executed through conversation.

You can also retrieve the latest external information and reflect it in existing pages.  
For example, you can automate tasks like retrieving product release notes from the official site and adding them to the product information page in GROWI.

### ④ Wiki Organization

Support for reviewing and organizing Wiki structure.

Instructions like "List old project pages under the /projects directory" or "Find pages without tags and suggest appropriate tags" allow you to efficiently proceed with Wiki maintenance tasks.

You can work with AI to perform tasks that maintain Wiki quality, such as checking for duplicate pages, verifying broken links, and unifying naming conventions.  
This is a particularly effective use case for GROWI instances with large numbers of pages.

## MCP Configuration Method (Claude Desktop)

This section explains how to configure GROWI MCP for use with Claude Desktop.

### Configuration Steps

#### 1. Obtain a GROWI Access Token

1. Log in to GROWI and open "User Settings" from the user menu in the lower left.
2. Navigate to the "Access token settings" section in "API Settings".
3. Press the "New" button and configure the expiration date, description, and permissions.
    - For testing purposes, we recommend creating a token with broad permissions and a short expiration period.
    - When actually operating, create a token with permissions narrowed down appropriately.
4. Click the "Create token" button, copy the created token, and save it in a secure location.

::: warning
Access tokens are confidential information. Do not share them with third parties.
:::

#### 2. Configure MCP in Claude Desktop

1. Launch the Claude Desktop app.
2. Open the settings screen.
   - macOS: `Cmd + ,`
   - Windows: `Ctrl + ,`
3. Select the "Developer" tab.
4. Click "Edit Config" to open the configuration file.

#### 3. Edit the Configuration File

Edit the configuration file (`claude_desktop_config.json`). Perform one of the following configurations depending on the number of GROWI instances you use.

##### For Using a Single GROWI

If you use only a single GROWI instance, configure as follows.

```json
{
  "mcpServers": {
    "growi": {
      "command": "npx",
      "args": ["@growi/mcp-server"],
      "env": {
        "GROWI_APP_NAME_1": "main",
        "GROWI_BASE_URL_1": "https://your-growi-instance.com",
        "GROWI_API_TOKEN_1": "your_growi_api_token"
      }
    }
  }
}
```

##### For Using Multiple GROWI Instances

If you use multiple GROWI instances, configure them with different identification names.

```json
{
  "mcpServers": {
    "growi": {
      "command": "npx",
      "args": ["@growi/mcp-server"],
      "env": {
        "GROWI_DEFAULT_APP_NAME": "staging",

        "GROWI_APP_NAME_1": "production",
        "GROWI_BASE_URL_1": "https://wiki.example.com",
        "GROWI_API_TOKEN_1": "token_for_production",

        "GROWI_APP_NAME_2": "staging",
        "GROWI_BASE_URL_2": "https://wiki-staging.example.com",
        "GROWI_API_TOKEN_2": "token_for_staging",
        
        "GROWI_APP_NAME_3": "development",
        "GROWI_BASE_URL_3": "https://wiki-dev.example.com",
        "GROWI_API_TOKEN_3": "token_for_development"
      }
    }
  }
}
```

**Configuration Item Descriptions:**

| Variable Name | Required | Description | Default Value |
|--------------|----------|-------------|---------------|
| `GROWI_APP_NAME_{N}` | ✅ | GROWI app identification name (N is an integer) | - |
| `GROWI_BASE_URL_{N}` | ✅ | Base URL of the GROWI instance (N is an integer) | - |
| `GROWI_API_TOKEN_{N}` | ✅ | GROWI API access token (N is an integer) | - |
| `GROWI_DEFAULT_APP_NAME` | ❌ | App name to use by default | First configured app |

**Notes for Multiple GROWI Configuration:**

- **GROWI_APP_NAME_{N}**: Assign easy-to-understand identification names to each GROWI instance, such as `growi-production`, `growi-staging`.
- **GROWI_DEFAULT_APP_NAME**: This parameter is optional, but setting it allows you to explicitly specify the target GROWI for operations in Claude. Set the same value as the identification name or a more understandable name. Not required if only a single app is configured.
- **GROWI_API_TOKEN_{N}**: Use different access tokens for each GROWI instance.

::: tip
When multiple GROWI instances are configured, you can switch operation targets by specifying in conversation with Claude, such as "on the production GROWI..." or "on the staging Wiki...".

If you don't explicitly specify an app name (GROWI_APP_NAME_{N}), the GROWI with the app name specified in `GROWI_DEFAULT_APP_NAME` will be the target of operations.
:::

#### 4. Restart Claude Desktop

After saving the configuration, completely quit and restart the Claude Desktop app.

#### 5. Verify Connection

Ask Claude in conversation "Can you connect to GROWI?" to confirm that MCP is working correctly.

If the connection is successful, Claude will respond and GROWI operations will become possible.

If you have configured multiple GROWI instances, you can check all connection statuses by asking "Can you connect to each GROWI?"

### Troubleshooting

#### When Connection Fails

1. **Verify API Token is Configured Correctly**  
   Check that the API token in the configuration file is copied accurately.
2. **Verify GROWI URL is Accurate**  
   Check that the URL includes `https://` and does not have a trailing slash (`/`).
3. **Check Firewall and Proxy Settings**  
   If a firewall or proxy is configured on a corporate network, access to GROWI may be blocked.
4. **Check Claude Desktop Logs**  
   Check logs from `View > Toggle Developer Tools` and review error messages.

#### When Permission Errors Occur

1. **Verify Appropriate Permissions are Granted to Access Token**  
   Check the access token permission settings in GROWI user settings.

#### When Unable to Connect to Specific Instance in Multiple GROWI Configuration

1. **Verify Identification Names are Not Duplicated**  
   Check that the same identification name is not used in the configuration file.
2. **Individually Verify Configuration of Each Instance is Correct**  
   Temporarily leave only the configuration for the problematic instance and perform a connection test.

### Token Management Best Practices

- Treat access tokens as confidential information and do not share them.
- We recommend regularly rotating (regenerating) tokens.
- Delete tokens when they are no longer needed.
- When using in an organization, set appropriate access permission policies.
- When configuring multiple GROWI instances, be careful not to confuse tokens for production and development environments.
