# Setting up GROWI Vault

This page describes how to set up [GROWI Vault](/en/guide/features/vault.html).

GROWI Vault consists of two parts: a gateway built into the GROWI app itself (served at `/vault.git`) and a standalone vault-manager service (a container). The vault-manager keeps a bare Git repository on a shared filesystem, and ingests page changes through MongoDB change streams.

## Prerequisites

- **MongoDB replica set**: Because GROWI Vault uses MongoDB change streams, MongoDB must run as a replica set (a single-node replica set is acceptable). See [Upgrading to GROWI v8.0.x](/en/admin-guide/upgrading/80x.html) for details.
- **Shared filesystem**: A persistent filesystem is required for vault-manager to keep the bare Git repository.

## Setup steps

1. Deploy the vault-manager service (container). For the concrete container definition, refer to the updates in [growi-docker-compose](https://github.com/growilabs/growi-docker-compose).
2. Set the environment variables for connectivity and authentication on both the GROWI app and vault-manager (see below).
3. Restart GROWI and run the initial bootstrap from `/admin/vault` in the admin panel. You can monitor the bootstrap progress and storage status on the same screen.

## Key environment variables

The minimum environment variables required for setup are below. Tuning options such as retries, drift detection, reconcile, and gc are also available. See the "GROWI Vault options" section of the [Environment variables](/en/admin-guide/admin-cookbook/env-vars.html) page for the full list.

- `VAULT_ENABLED`: Enables the GROWI Vault feature.
- `VAULT_MANAGER_ENDPOINT`: The URL the GROWI app uses to reach vault-manager.
- `VAULT_MANAGER_INTERNAL_SECRET`: The shared secret for authentication between the app and vault-manager.
- `VAULT_REPO_PATH`: The path of the bare Git repository managed by vault-manager.
- `VAULT_BOOTSTRAP_ON_START`: Whether to run the initial bootstrap at startup.

::: warning
`VAULT_MANAGER_INTERNAL_SECRET` is a secret. In production, set a hard-to-guess value, keep it out of repositories and logs, and manage it securely.
:::
