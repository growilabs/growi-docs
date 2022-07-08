# Audit Log

This function allows you to list who performed actions such as login, logout, page creation, and page deletion, and when.

![audit-log](/assets/images/audit-log.png)

## Enabling the Audit Log

To enable the Audit Log, set the environment variable `AUDIT_LOG_ENABLED` to `true` From the moment you set it to `true`, log collection, display and search will be enabled.

## Search

You can search by username, date, or action name.

### Username

You can search for usernames that partially match the characters entered in the search field.
Search results are categorized into 3 types.

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


### action-name

You can narrow down the search to a specific action.

<!-- TODO image Insert image after i18n conversion -->

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

- [name of all actions](https://github.com/weseek/growi/blob/master/packages/app/src/interfaces/activity.ts#L161)
- [small action group](https://github.com/weseek/growi/blob/master/packages/app/src/interfaces/activity.ts#L312)
- [medium action group](https://github.com/weseek/growi/blob/master/packages/app/src/interfaces/activity.ts#L328)
- [Large Action Group](https://github.com/weseek/growi/blob/master/packages/app/src/interfaces/activity.ts#L370)
