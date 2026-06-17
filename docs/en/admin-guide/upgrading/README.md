---
title: Migration Guide to the GROWI v7 Series
---

# Migration Guide to the GROWI v7 Series

We recommend running the latest v7 series of GROWI (the latest at the time of writing is v7.5.x).
The latest series receives continuous improvements in features, performance, and security, and supports the most up-to-date runtime environments.

The goal of this page is simple: **once you know which version you are currently running, you should be able to tell exactly what you need to do** to migrate to the v7 series.
Start with [Check your current version](#check-your-current-version), pick your series, and read the matching section.

The concrete changes and procedures for each minor version are documented in the individual "Upgrading to GROWI vX.Y.x" pages.
Before upgrading, always read the individual guide for every series you pass through.

::: tip
We recommend running at least v7.4.0 or later.
The safeguard for the Revision data migration described below is applied automatically from v7.4.0 onward.
:::


## Table of Contents

[[toc]]


## Check your current version

Check the version you are currently running from the GROWI admin page or the startup logs, then jump to the matching section below.
Each section starts with a summary of what you actually need to do.

| Current version | Go to | In a nutshell |
| :--- | :--- | :--- |
| v4.x or earlier | [If you are running v4.x or earlier](#if-you-are-running-v4-x-or-earlier) | There is a large task: conversion to the v5 Compatible Format. Upgrade in stages |
| v5.x – v6.0.x | [If you are running v5.x – v6.0.x](#if-you-are-running-v5-x-v6-0-x) | Meet the runtime requirements and upgrade directly to v7.4 or later |
| v6.1.0 – v7.0.15 | [If you are running v6.1.0 – v7.0.15](#if-you-are-running-v6-1-0-v7-0-15) | **Security vulnerability that can leak information. Act with top priority** |
| v7.0.16 or later | [If you are running v7.0.16 or later](#if-you-are-running-v7-0-16-or-later) | A normal upgrade. Move to the latest series |


## How upgrading works

GROWI runs database migrations automatically at startup, so in principle you can skip multiple versions and upgrade in one step.
However, there are two exceptions to keep in mind. The steps in each section are determined by how you handle these two:

- There are **points where you must stop and do manual work** (in particular, the conversion to the "v5 Compatible Format" when coming from v4.x or earlier). See [About the conversion to the v5 Compatible Format](#about-the-conversion-to-the-v5-compatible-format).
- There are **version ranges you must not stop on (run / operate)** along the way (the Revision data migration bug in v6.1.0–v7.0.15). See [About the versions to avoid passing through](#about-the-versions-to-avoid-passing-through).


## If you are running v4.x or earlier

**Path: v5 series → v6 series → v7.4 or later (the latest series is recommended)**

This is the series with the most work involved in the whole migration. Proceed in stages, handling both the data-format conversion and the runtime updates.

### What to do

1. **Take a backup** (database and attachments).
2. **Upgrade to the v5 series.** If you use Elasticsearch, this is when you handle the **Elasticsearch 6 → 7** move ([v5.0.x guide](/en/admin-guide/upgrading/50x.html)).
3. **Convert pages to the "v5 Compatible Format" manually (the biggest task).** v5.0 significantly changed the internal data format of pages, and pages created in v4.5 or earlier are not converted automatically. Plan this deliberately and consider using maintenance mode. See [About the conversion to the v5 Compatible Format](#about-the-conversion-to-the-v5-compatible-format) and the [v5.0.x guide](/en/admin-guide/upgrading/50x.html).
4. **Pass through the v6 series and reach v7.4 or later.** Along the way, handle the following runtime and specification changes:
   - **End of Node.js 16 support (move to 18 / 20)** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **Manual rewrite of Bootstrap v4 → v5 notation** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **Deprecation of HackMD integration** (v7.0; moved to simultaneous editing in the built-in editor) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **MongoDB 6.0 or higher required** (v7.1) — [v7.1.x guide](/en/admin-guide/upgrading/71x.html)

::: warning
**Do not stop and keep operating** on any version in the v6.1.0–v7.0.15 range. This range contains a Revision data migration vulnerability. When passing through the v6 series, **upgrade directly to v7.4.0 or later** without stopping in this range. See [About the versions to avoid passing through](#about-the-versions-to-avoid-passing-through) for the reason.
:::


## If you are running v5.x – v6.0.x

**Path: directly to v7.4 or later (do not stop on v6.1.0–v7.0.15)**

The conversion to the v5 Compatible Format was already handled in v5.0, so from this series the main work is meeting the runtime requirements.

### What to do

1. **Take a backup** (database and attachments).
2. **Meet the runtime requirements.**
   - **End of Node.js 16 support (move to 18 / 20)** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **Manual rewrite of Bootstrap v4 → v5 notation** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **Deprecation of HackMD integration** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **MongoDB 6.0 or higher required** (v7.1) — [v7.1.x guide](/en/admin-guide/upgrading/71x.html)
3. **Upgrade directly to v7.4 or later.** Do not start up and operate in the v6.1.0–v7.0.15 range ([About the versions to avoid passing through](#about-the-versions-to-avoid-passing-through)).

::: tip
If your environment was migrated from v4.5 or earlier and you have not yet performed the conversion to the "v5 Compatible Format," do that first ([About the conversion to the v5 Compatible Format](#about-the-conversion-to-the-v5-compatible-format)). It is not needed for environments freshly built on v5.0 or later.
:::


## If you are running v6.1.0 – v7.0.15

**Act with top priority.** This range has a **serious security vulnerability that can leak information** simply by running and operating it.

In this range, all Revisions (page edit history) in the system are incorrectly linked to a single page, making the content, author, last editor, and edit content of private or deleted pages viewable by users who should not have access. Furthermore, **any system that has passed through this range even once (during an upgrade) has corrupted history data created before that point, and it cannot be repaired.** See [About the versions to avoid passing through](#about-the-versions-to-avoid-passing-through) for details.

### What to do

1. **Take a backup** (database and attachments).
2. **Upgrade to v7.4.0 or later immediately to stop the leak.** The root cause was removed in v7.0.16, but we recommend **v7.4.0 or later**, where the safeguard is applied automatically. While upgrading, also meet the runtime requirements in the [v7.0.x guide](/en/admin-guide/upgrading/70x.html) / [v7.1.x guide](/en/admin-guide/upgrading/71x.html).
3. **Assess the corruption and recover where possible.** On a system that has passed through this range, history data created before that point **will not be restored by upgrading (it is unrepairable)**. Manual recovery is possible only under very limited conditions. For the scope of potentially leaked information, the way to determine corruption, and recovery steps, see the Dev Wiki page [Revision data migration bug in v5.0.0–v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).

::: danger
**Never pass through v6.1.0–v7.0.15**, not even as a temporary step on the way to a newer version. If you have already operated in this range, be sure to assess the scope of potentially leaked information, such as private and deleted pages.
:::


## If you are running v7.0.16 or later

**Path: to the latest series (v7.5.x recommended)**

This range is where the Revision data migration safeguard applies, so you can proceed as a normal upgrade.

### What to do

1. **Take a backup** (database and attachments).
2. **Review the changes in the individual guide for each series you pass through** ([v7.1.x](/en/admin-guide/upgrading/71x.html) and each later vX.Y.x guide). Always read the "Things to Check Before Upgrading" section of each guide.
3. **Upgrade to the latest series.** Stay on at least v7.4.0 or later (the range where the safeguard is applied automatically).


## Appendix: details of the two points that need attention

The following is shared detail referenced from the sections above.

### About the conversion to the v5 Compatible Format

After upgrading from v4.x or earlier to the v5 series, **converting pages to the "v5 Compatible Format" is the single largest task** in the whole upgrade sequence.
v5.0 significantly changed the internal data format of pages, and pages created in v4.5 or earlier are not converted automatically.
Because this affects page-tree display and how descendant pages behave on move / rename / delete, it needs to be planned and carried out deliberately.

For the detailed procedure and scope of impact, see [Upgrading GROWI to v5.0.x](/en/admin-guide/upgrading/50x.html).

### About the versions to avoid passing through

GROWI v5.0.0–v7.0.20 contain a bug in the migration of Revision (page edit history) data, and **v6.1.0–v7.0.15 in particular is a serious security vulnerability that can leak information**.
In this range, all Revisions that should belong to separate pages are incorrectly linked to a single page, making the content and authorship of private or deleted pages viewable by users who should not have access.

Furthermore, **any system that has passed through this range even once (during an upgrade) has corrupted history data created before that point, and it cannot be repaired afterward.**
For this reason, we strongly recommend that your upgrade path does not pass through v6.1.0–v7.0.15.

The fix history is as follows:

- **v7.0.16**: removed the root cause of the bug
- **v7.0.21**: added an API-side safety valve that hides corrupted data
- **v7.4.0 onward**: added an auto-detecting safeguard and further improvements (the safeguard is applied automatically)

| Version range | Security risk | Data state |
| :--- | :--- | :--- |
| v5.0.0–v6.0.15 | None | Safe (only the latest revision is shown) |
| v6.1.0–v7.0.15 | **Critical (information leak)** | **Corrupted (unrepairable)** |
| v7.0.16–v7.0.20 | Depends on the version passed through | Depends on the version passed through |
| v7.0.21–v7.3.x | None | Safe (protected by the API-side safety valve) |
| v7.4.0 or later | None | Safe (handled appropriately by auto-detection) |

Note: the data state for v7.0.16–v7.0.20 depends on the version you passed through before it (see the Dev Wiki for how to determine this).

Recommended safe paths:

- When upgrading from v6.0.15 or earlier, **upgrade directly to v7.4.0 or later** without passing through v6.1.0–v7.0.15.
- For a fresh installation, deploy v7.4.0 or later (the latest series is recommended).

::: danger
For the full details of this bug (affected conditions, root cause, how to check, and MongoDB-based corruption diagnosis and recovery steps), be sure to read the Dev Wiki page [Revision data migration bug in v5.0.0–v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
It also describes what to do if you have already operated through the affected range.
:::


## Things to check before and after upgrading

- Always back up your database and attachments before upgrading.
- Review the "Things to Check Before Upgrading" section of every series' individual guide that you pass through.
- If a large conversion task is involved (such as the v5 Compatible Format), consider using maintenance mode.
