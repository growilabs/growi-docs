---
title: Migration Guide to the GROWI v7 Series
---

# Migration Guide to the GROWI v7 Series

We recommend running the latest v7 series of GROWI (the latest at the time of writing is v7.5.x).
The latest series receives continuous improvements in features, performance, and security, and supports the most up-to-date runtime environments.

The goal of this page is simple: **once you know which version you are currently running, you should be able to tell exactly what you need to do** to migrate to the v7 series.
Start with [Check your current version](#check-your-current-version), pick your series, and read only that section — it contains everything you need for that series.

The concrete changes and procedures for each minor version are documented in the individual "Upgrading to GROWI vX.Y.x" pages. Each section links only the individual guides that are actually relevant to that series, so you do not need to read every series' page.

::: tip
We recommend running at least v7.4.0 or later.
The safeguard for the Revision data migration is applied automatically from v7.4.0 onward.
:::


## Table of Contents

[[toc]]


## Check your current version

Check the version you are currently running from the GROWI admin page or the startup logs, then jump to the matching section below. Reading only that one section gives you everything you need for your series.

| Current version | Go to | Migration point |
| :--- | :--- | :--- |
| v4.x or earlier | [If you are running v4.x or earlier](#if-you-are-running-v4-x-or-earlier) | A manual conversion to the v5 Compatible Format is required. Upgrade in stages |
| v5.x – v6.0.x | [If you are running v5.x – v6.0.x](#if-you-are-running-v5-x-v6-0-x) | Meet the runtime requirements and upgrade directly to v7.4 or later |
| v6.1.0 – v7.0.15 | [If you are running v6.1.0 – v7.0.15](#if-you-are-running-v6-1-0-v7-0-15) | **Security vulnerability that can leak information. Act with top priority** |
| v7.0.16 or later | [If you are running v7.0.16 or later](#if-you-are-running-v7-0-16-or-later) | A normal upgrade. Move to the latest series |


## How upgrading works

GROWI runs database migrations automatically at startup, so in principle you can skip multiple versions and upgrade in one step.
However, there are just two exceptions that need care. The specific handling for each is described in the relevant series' section.

- **Points where you must stop and do manual work** (in particular, the conversion to the "v5 Compatible Format" when coming from v4.x or earlier).
- **A version range you must neither run/operate nor pass through** (v6.1.0–v7.0.15, which causes information leakage and unrepairable data corruption).


## If you are running v4.x or earlier

**Path: v5 series → v6 series → v7.4 or later (the latest series is recommended)**

### What to do

1. **Take a backup** (database and attachments).
2. **Upgrade to the v5 series.** If you use Elasticsearch, this is when you handle the **Elasticsearch 6 → 7** move ([v5.0.x guide](/en/admin-guide/upgrading/50x.html)).
3. **Convert pages to the "v5 Compatible Format" manually.** v5.0 significantly changed the internal data format of pages, and pages created in v4.5 or earlier are not converted automatically. If left unconverted, this affects page-tree display and how descendant pages behave on move / rename / delete, so plan it deliberately (and consider using maintenance mode). For the procedure and scope of impact, see the [v5.0.x guide](/en/admin-guide/upgrading/50x.html).
4. **Pass through the v6 series and reach v7.4 or later.** Along the way, handle the following runtime and specification changes:
   - **End of Node.js 16 support (move to 18 / 20)** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **Manual rewrite of Bootstrap v4 → v5 notation** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **Deprecation of HackMD integration** (v7.0; moved to simultaneous editing in the built-in editor) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **MongoDB 6.0 or higher required** (v7.1) — [v7.1.x guide](/en/admin-guide/upgrading/71x.html)

::: danger
When upgrading through the v6 series, **do not run or operate on v6.1.0–v7.0.15, and do not let your upgrade pass through that range either.** This range has a serious bug in Revision (page edit history) data: running and operating on it makes the content and authorship of private or deleted pages viewable by users who should not have access (information leak), and merely passing through it corrupts history data created before that point so that it cannot be repaired. **Upgrade directly to v7.4.0 or later.** For details, see the Dev Wiki page [Revision data migration bug in v5.0.0–v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
:::


## If you are running v5.x – v6.0.x

**Path: directly to v7.4 or later (do not pass through v6.1.0–v7.0.15)**

The conversion to the v5 Compatible Format was already handled in v5.0, so from this series the main work is meeting the runtime requirements.

### What to do

1. **Take a backup** (database and attachments).
2. **Meet the runtime requirements.**
   - **End of Node.js 16 support (move to 18 / 20)** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **Manual rewrite of Bootstrap v4 → v5 notation** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **Deprecation of HackMD integration** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
   - **MongoDB 6.0 or higher required** (v7.1) — [v7.1.x guide](/en/admin-guide/upgrading/71x.html)
3. **Upgrade directly to v7.4 or later.**

::: danger
**Do not run or operate on v6.1.0–v7.0.15, and do not let your upgrade pass through that range.** This range has a serious bug in Revision data: running and operating on it makes the content and authorship of private or deleted pages viewable by users who should not have access (information leak), and merely passing through it corrupts history data created before that point beyond repair. Always **upgrade directly to v7.4.0 or later.** For details, see the Dev Wiki page [Revision data migration bug in v5.0.0–v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
:::

::: tip
If your environment was migrated from v4.5 or earlier and you have not yet performed the conversion to the "v5 Compatible Format," do that first (see the [v5.0.x guide](/en/admin-guide/upgrading/50x.html)). It is not needed for environments freshly built on v5.0 or later.
:::


## If you are running v6.1.0 – v7.0.15

**Act with top priority.** This range has a **serious security vulnerability that can leak information** simply by running and operating it.

In this range, all Revisions (page edit history) in the system are incorrectly linked to a single page, making the content, author, last editor, and edit content of private or deleted pages viewable by users who should not have access. Furthermore, **any system that has passed through this range even once (during an upgrade) has corrupted history data created before that point, and it cannot be repaired.**

### What to do

1. **Take a backup** (database and attachments).
2. **Upgrade to v7.4.0 or later immediately to stop the leak.** The root cause was removed in v7.0.16, but we recommend **v7.4.0 or later**, where the safeguard is applied automatically. While upgrading, also meet the runtime requirements in the [v7.0.x guide](/en/admin-guide/upgrading/70x.html) / [v7.1.x guide](/en/admin-guide/upgrading/71x.html) (Node.js, Bootstrap notation, HackMD deprecation, MongoDB 6.0 or higher).
3. **Assess the corruption and recover where possible.** On a system that has passed through this range, history data created before that point **will not be restored by upgrading (it is unrepairable)**. Manual recovery is possible only under very limited conditions. For the scope of potentially leaked information, how to determine corruption, and recovery steps, see the Dev Wiki page [Revision data migration bug in v5.0.0–v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).

::: danger
**Never run or pass through v6.1.0–v7.0.15**, not even as a temporary step on the way to a newer version. If you have already operated in this range, be sure to assess the scope of potentially leaked information, such as private and deleted pages.
:::


## If you are running v7.0.16 or later

**Path: to the latest series (v7.5.x recommended)**

The root cause of the Revision data migration bug was removed in v7.0.16, so you can proceed as a normal upgrade.

### What to do

1. **Take a backup** (database and attachments).
2. **Review the changes in the individual guides** ([v7.1.x](/en/admin-guide/upgrading/71x.html) and each later vX.Y.x guide you pass through). Read the "Things to Check Before Upgrading" section of each guide.
3. **Upgrade to the latest series.** Stay on **v7.4.0 or later**, where the Revision data safeguard is applied automatically.

::: warning
If your environment **previously passed through v6.1.0–v7.0.15**, history data created before that point may already be corrupted (upgrading to v7.0.16 or later does not repair it). This applies in particular if you are currently running v7.0.16–v7.0.20. For how to determine corruption and recovery steps, see the Dev Wiki page [Revision data migration bug in v5.0.0–v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111).
:::


## Things to check before and after upgrading

- Always back up your database and attachments before upgrading.
- Review the "Things to Check Before Upgrading" section of the individual guides linked in your section.
- If a large conversion task is involved (such as the v5 Compatible Format), consider using maintenance mode.
