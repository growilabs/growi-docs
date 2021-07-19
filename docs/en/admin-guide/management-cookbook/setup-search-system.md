# Setup and Management of Full Text Search

This guide will explain how to set up and manage Elasticsearch for full text search

## Activating and connecting to Elasticsearch using various environments

Please refer to system management page for instructions on activating and connecting to Elasticsearch.

- docker-compose
  - Users of [weseek/growi-docker-compose](https://github.com/weseek/growi-docker-compose)
  will automatically have Elasticsearch activated by default.  No additional setup is required.
- ubuntu
  - Please find instructions for setting up and using Elasticsearch [here](../../admin-guide/getting-started/ubuntu-server.html#elasticsearch).
  - Please set the environment variable `ELASTICSEARCH_URI` to the URI of the Elasticsearch instance.
  you will use for GROWI.
- centOS
  - Please find instructions for setting up and using Elasticsearch [here](../../admin-guide/getting-started/centos.html#elasticsearch).
  - Please set the environment variable `ELASTICSEARCH_URI` to the URI of the Elasticsearch instance.

## Confirming your Elasticsearch connection

- If your Elasticsearch is properly set up using the Elasticsearch URI in the `ELASTICSEARCH_URI` environment variable,
a search bar wil appear in the GROWI top bar and you will be able to check the Elasticsearch connection
settings and index information of your Elasticsearch instance in the (Full Text Search Management?) page of
the management screen.

  ![](/assets/images/setup-search-system1.png)

- If you see the below error message even though you have set your Elasticsearch URI properly, double check your
Elasticsearch information and URI.

  ![](/assets/images/setup-search-system2.png)

## Rebuilding Indexes

In order to use Elasticsearch's search capabilities, data from the search database and data from MongoDB
must first be combined to create searchable data.  If the data has become inaccessible due to direct user
action or some other interference, the search functionality will not be able to function properly.

In such cases, you may be able to fix the problem by rebuilding the index using the (Full Text Search Management?)
page on the management screen.

You can rebuild the index by clicking the Rebuild Index button on the (Full Text Search Management?) page.
It may take a few seconds before the index rebuild is complete.

## Normalizing Indexes

An index may become corrupted if the processing of the index is interrupted.  One way this might occur is
if the above rebuilding operation is interrupted.  When doing an index rebuild, please wait until the
rebuild is complete to avoid corrupting the data.

![](/assets/images/setup-search-system3.png)

A corrupted index can be repaired and returned to usable status by renormalizing the index as shown above.
