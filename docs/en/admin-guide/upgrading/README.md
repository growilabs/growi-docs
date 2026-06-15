---
title: Upgrade Overview and Migration to v7
---

# Upgrading GROWI and Migrating to the v7 Series

We recommend running the latest v7 series of GROWI (the latest at the time of writing is v7.5.x).
The latest series receives continuous improvements in features, performance, and security, and supports the most up-to-date runtime environments.
This page gives an overview, for operators running an older GROWI, of *which path* to take, *where to stop and do manual work*, and *which versions you must not stay on along the way*.

The concrete changes and procedures for each minor version are documented in the individual "Upgrading to GROWI vX.Y.x" pages.
Before upgrading, always read the individual guide for every series you pass through.

::: tip
We recommend running at least v7.4.0 or later.
The safeguard for the Revision data migration described below is applied automatically from v7.4.0 onward.
:::


## Table of Contents

[[toc]]


## How Upgrading Works

GROWI runs database migrations automatically at startup, so in principle you can skip multiple versions and upgrade in one step.
However, there are two exceptions to keep in mind:

- There are **points where you must stop and do manual work** (in particular, the conversion to the "v5 Compatible Format" when coming from v4.x or earlier).
- There are **version ranges you must not stay on (run / operate) along the way** (the Revision data migration bug).

Each is explained below.


## Recommended Upgrade Paths by Current Version

The recommended upgrade path depends on the version you are currently running:

| Current version | Recommended path | Work to watch out for |
| :--- | :--- | :--- |
| v4.x or earlier | v5 series → v6 series → v7.4 or later | **Conversion to the v5 Compatible Format** (a uniquely large task; see below) |
| v5.x / v6.0.x | To v7.4 or later | Check runtime requirements (Node.js / MongoDB / Elasticsearch) |
| v6.1.0–v7.0.15 | To v7.4 or later, as soon as possible | **Avoid continuing to operate in this range** (see below) |
| v7.0.16 or later | To the latest series | Review the changes in each individual guide |

::: warning
When upgrading from v6.0.15 or earlier to the v7 series, do not start up and keep operating on any version in the v6.1.0–v7.0.15 range.
See [Versions to Avoid Stopping On](#versions-to-avoid-stopping-on) for the reason.
:::


## Points Where You Must Stop

### v4.x or earlier → v5: Conversion to the v5 Compatible Format (the largest task)

After upgrading from v4.x or earlier to the v5 series, **converting pages to the "v5 Compatible Format" is the single largest task** in the whole upgrade sequence.
v5.0 significantly changed the internal data format of pages, and pages created in v4.5 or earlier are **not** converted automatically.
Because this affects page-tree display and how descendant pages behave on move / rename / delete, it needs to be planned and carried out deliberately.

For the detailed procedure and scope of impact, see [Upgrading GROWI to v5.0.x](/en/admin-guide/upgrading/50x.html).

### Meeting Runtime Requirements at the Right Time

The runtime prerequisites change for each series you pass through.
Check your current environment before upgrading.

- **Elasticsearch 6 → 7** (supported in v5.0) — [v5.0.x guide](/en/admin-guide/upgrading/50x.html)
- **End of Node.js 16 support (move to 18 / 20)** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
- **Manual rewrite of Bootstrap v4 → v5 notation** (v7.0) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
- **Deprecation of HackMD integration** (v7.0; moved to simultaneous editing in the built-in editor) — [v7.0.x guide](/en/admin-guide/upgrading/70x.html)
- **MongoDB 6.0 or higher required** (v7.1) — [v7.1.x guide](/en/admin-guide/upgrading/71x.html)


## Versions to Avoid Stopping On

Versions from v6.1.0 through v7.0.15 contain a bug in the migration of Revision (page edit history) data.
If you start up and operate on these versions, Revisions that should belong to separate pages may be incorrectly linked to a single page, which can unintentionally expose the contents and authorship of private or deleted pages.

For this reason, we strongly recommend that you do not start up and keep operating on any version in the v6.1.0–v7.0.15 range as part of your upgrade path.

| Version range | Status |
| :--- | :--- |
| v5.0.0–v6.0.15 | Safe |
| v6.1.0–v7.0.15 | **Unsafe (avoid operating in this range)** |
| v7.0.16 or later | Safeguard available (applied automatically from v7.4.0 onward) |

Recommended safe paths:

- When upgrading from v6.0.15 or earlier, **upgrade directly to v7.4.0 or later** without stopping on v6.1.0–v7.0.15.
- For a fresh installation, deploy v7.0.16 or later (the latest series is recommended).

::: danger
For the full details of this bug (affected conditions, root cause, how to check, and recovery steps), read the Dev Wiki page below.
[Revision data migration bug in v5.0.0–v7.0.15](https://dev.growi.org/69301054963f68dfcf2b7111)
It also describes what to do if you have already operated through the affected range.
:::


## Things to Check Before and After Upgrading

- Always back up your database and attachments before upgrading.
- Review the "Things to Check Before Upgrading" section of every series' individual guide that you pass through.
- If a large conversion task is involved (such as the v5 Compatible Format), consider using maintenance mode.
