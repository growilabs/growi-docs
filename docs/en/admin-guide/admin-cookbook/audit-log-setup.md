# Setup with Audit Log

How to make the [audit log](/en/admin-guide/management-cookbook/audit-log.html) available and what logs to collect.

## Enabling the Audit Log

To enable the Audit Log, set the environment variable `AUDIT_LOG_ENABLED` to `true`. From the moment you set `true`, log collection, display, and retrieval will be enabled.

## Log types

The logs collected by GROWI are divided into three groups: `SMALL`, `MEDIUM`, and `LARGE`. The default is `SMALL`, which can be changed from the environment variable `AUDIT_LOG_ACTION_GROUP_SIZE`.

| value | action to collect |
| ------------------- | ---------- |
| `SMALL` | login, logout, create page, delete page |
| `MEDIUM` | `SMALL` + all actions performed by regular users - viewing pages |
| `LARGE` | `MEDIUM` + all operations performed by admin users - view pages |

## Add/Exclude logs to be collected

Actions included/excluded in the group set in `AUDIT_LOG_ACTION_GROUP_SIZE` can be added/excluded individually.

- Actions not included in the set group can be added/excluded individually.
  - Specify the environment variable `AUDIT_LOG_ADDITIONAL_ACTIONS` in CSV format (comma separated string)
  - Example: `AUDIT_LOG_ADDITIONAL_ACTIONS=PAGE_VIEW,USER_PASSWORD_UPDATE`.
- Exclude actions in a configured group individually
  - Specify the environment variable `AUDIT_LOG_EXCLUDE_ACTIONS` in CSV format (comma separated string)
  - Example: `AUDIT_LOG_EXCLUDE_ACTIONS=PAGE_CREATE,USER_LOGOUT`.

## List of supported actions

- [name of action that can be collected](https://github.com/weseek/growi/blob/master/packages/app/src/interfaces/activity.ts#L9)
