# Audit Log

Actions taken by users, such as login, logout, and create page, can be viewed and searched from the administration screen.

![audit-log](/assets/images/audit-log.png)

## Information displayed in table

- Username
- Time the action was performed
- Action
- IP Address
- URL

## Enabling the Audit Log

To enable the Audit Log, set the environment variable `AUDIT_LOG_ENABLED` to `true` From the moment you set it to `true`, log collection, display and search will be enabled.

## Search

You can search the audit log by user name, date, or action name.

### Username

You can search by username. Search results are categorized into three types.

- Active User
  - Active User
- Inactive User
  - Inactive (unauthorized, invited, or suspended) user
- Active Snapshot User
  - Username at the time the action was taken, including deleted users

![audit-log-search1](/assets/images/audit-log-search1.png)

### Date

You can search for a specific date or range of dates.

![audit-log-search2](/assets/images/audit-log-search2.png)


### Action

You can narrow down the search to a specific action.

![audit-log-search2](/assets/images/audit-log-search3.png)

## Type of logs

The logs collected by GROWI are divided into three groups: `SMALL, MEDIUM, and LARGE`. The default is `SMALL`, which can be changed from the environment variable `AUDIT_LOG_ACTION_GROUP_SIZE`.

| value | action to collect |
| ------------------- | ---------- |
| `SMALL` | Login, Logout, Create page, Delete page |
| `MEDIUM` | SMALL + all actions performed by regular users - viewing pages |
| `LARGE` | MEDIUM + all operations performed by admin users - view pages |

You can also add/exclude actions that are included/excluded in the group set by `AUDIT_LOG_ACTION_GROUP_SIZE` individually.

- Actions not included in the set group can be added/excluded individually.
  - Set the environment variable `AUDIT_LOG_ADDITIONAL_ACTIONS` with actions separated by commas
  - Example: `AUDIT_LOG_ADDITIONAL_ACTIONS=PAGE_VIEW,USER_PASSWORD_UPDATE`.
- Exclude actions in configured groups individually
  - Set the environment variable `AUDIT_LOG_EXCLUDE_ACTIONS` with the actions separated by commas.
  - Example: `AUDIT_LOG_EXCLUDE_ACTIONS=PAGE_CREATE,USER_LOGOUT`.

## List of supported actions

- [Collectable Action Name](https://github.com/weseek/growi/blob/master/packages/app/src/interfaces/activity.ts#L161)
