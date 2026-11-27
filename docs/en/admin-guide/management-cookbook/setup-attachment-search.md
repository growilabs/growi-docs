# Setting up Full-Text Search for Attachments

This page describes how to make the content of files attached to pages searchable.

The supported formats are:

- PDF
- Office documents (Word, Excel and PowerPoint, including the legacy formats), OpenDocument, RTF and EPUB
- CSV, TSV, HTML and XML
- Plain text (including Markdown, JSON and YAML)

The text of a file is extracted by attachment-text-extractor, a separate service (a container) that runs alongside GROWI.
GROWI registers the extracted text in Elasticsearch and shows it in search results under the same view permissions as the page.

The feature is enabled only when the URI and the token of the extraction service are set. Without them, only pages are searched, as before.

## Prerequisites

- **Full-text search**: Full-text search with Elasticsearch must be available. See [Setting up the full-text search system](/en/admin-guide/management-cookbook/setup-search-system.html).
- **An environment for the extraction service**: The extraction service container needs to be allowed up to 2 GiB of memory.

## Setup steps

1. Deploy the extraction service container (see below).
2. Set the URI and the token of the extraction service in GROWI, either with environment variables (see below) or on the **Elasticsearch Management** page of the management screen.
3. On the **Elasticsearch Management** page, rebuild the index with attachments included. The rebuild makes attachments uploaded before the setup searchable. Attachments uploaded after the setup become searchable automatically, without a rebuild.

For attachments whose text could not be extracted, the **Elasticsearch Management** page shows the number of failures and their reasons.

## Deploying the extraction service

The image is published on Docker Hub as [growilabs/attachment-text-extractor](https://hub.docker.com/r/growilabs/attachment-text-extractor) (linux/amd64 and linux/arm64).
The following example starts it with `docker run` on the same Docker network as the GROWI container. Replace `<GROWI_NETWORK>` with the name of the network the GROWI container is connected to.

```bash
docker run -d --name attachment-text-extractor --network <GROWI_NETWORK> \
  --read-only --user 10001:10001 --cap-drop ALL \
  --security-opt no-new-privileges --memory 2g \
  -e ATTACHMENT_EXTRACTOR_SERVICE_TOKEN \
  growilabs/attachment-text-extractor:1
```

- The service listens on port 8000. In this example GROWI connects to it at `http://attachment-text-extractor:8000`. The port does not need to be published on the host.
- The environment variable `ATTACHMENT_EXTRACTOR_SERVICE_TOKEN` is required; the service does not start without it. In this example the value already set in the shell that runs `docker run` is passed to the container. Set it to the same value as `GROWI_ATTACHMENT_EXTRACTOR_SERVICE_TOKEN` on the GROWI side.
- For the memory limit, health checks, the termination grace period, the number of conversions run at the same time and other conditions, see the [README of the extraction service](https://github.com/growilabs/growi/blob/master/apps/attachment-text-extractor/docker/README.md).

::: warning
The extraction service parses untrusted files uploaded by users. Restrict its network as follows.

- Block all outbound traffic from the extraction service. Extraction needs no outbound connection.
- Allow connections to port 8000 of the extraction service only from GROWI and your monitoring system. `/healthz`, `/readyz`, `/openapi.json` and `/metrics` answer without the token.
:::

## Main environment variables

The environment variables to set in GROWI are listed below. For the full list, see "Full-text search options" on the [Environment Variables](/en/admin-guide/admin-cookbook/env-vars.html) page.

- `GROWI_ATTACHMENT_EXTRACTOR_URI`: The URI of the extraction service.
- `GROWI_ATTACHMENT_EXTRACTOR_SERVICE_TOKEN`: The token used to authenticate to the extraction service.
- `GROWI_ATTACHMENT_EXTRACTOR_TIMEOUT_MS`: How long to wait for one request to the extraction service (milliseconds).
- `GROWI_ATTACHMENT_EXTRACTOR_MAX_FILE_SIZE_BYTES`: The largest attachment sent to the extraction service (bytes). Larger attachments are not searchable.
- `ATTACHMENT_EXTRACTOR_USES_ONLY_ENV_VARS_FOR_SOME_OPTIONS`: When `true`, the four settings above ignore the values in the local DB and use only the environment variables. They become read-only on the management screen.

Keep `GROWI_ATTACHMENT_EXTRACTOR_MAX_FILE_SIZE_BYTES` at or below the extraction service's limit `MAX_FILE_SIZE_MB` (50 MB by default).
GROWI then does not send a file over that limit to the extraction service.

::: warning
The token is a secret. Use a value that is hard to guess, keep it out of repositories and logs, and manage it securely so that it does not leak.
:::
