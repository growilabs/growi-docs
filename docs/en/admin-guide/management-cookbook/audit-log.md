# Audit Log

Actions taken by users, such as login, logout, and create page, can be viewed and searched from the administration screen.

<img :src="$withBase('/assets/images/en/audit-log.png')" alt="audit-log">

<ContextualBlock context="docs-growi-org">

## Setup

[Audit Log Setup](/en/admin-guide/admin-cookbook/audit-log-setup.html)

</ContextualBlock>

## Information displayed in table

- Username
- Time the action was performed
- Action
<ContextualBlock context="docs-growi-org"><li>[IP Address](/en/admin-guide/admin-cookbook/trust-proxy.html)</li></ContextualBlock>
<ContextualBlock context="help-growi-cloud"><li>IP Address</li></ContextualBlock>
- URL

## Search

You can search the Audit Log by user name, date, or action name.

### Username

You can search by username. Search results are categorized into three types.

- Active User
  - Active User
- Inactive User
  - Inactive (unauthorized, invited, or suspended) user
- Active Snapshot User
  - Username at the time the action was taken, including deleted users

### Date

You can search for a specific date or range of dates.

### Action

You can narrow down the search to a specific action.