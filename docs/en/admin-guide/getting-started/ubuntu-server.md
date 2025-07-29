# Ubuntu Server

[[toc]]

## Overview

This chapter introduces how to install GROWI on Ubuntu Server 22.04 (Jammy). Other versions are currently untested.

The software required for setup is as follows:

* node.js 18.x or 20.x
* npm 6.x
* pnpm
* MongoDB 4.4 or higher (6.0 or higher recommended)
* (Option) Elasticsearch 7.x or 8.x
* (Option) systemd
* (Option) Apache or nginx

Optional items are not mandatory. However, this section explains how to build an environment
that uses all of these to create a GROWI with full-text search capabilities,
reverse-proxied with Apache or nginx, and automatically started with systemd along with the host.

## Installing Tools

Install `git` and `curl` which are required during the installation process.

```bash
$ sudo apt update && sudo apt -y install git curl
```

## Installing node.js 20.x & npm

### Using NodeSource repository

<!-- textlint-disable weseek/no-dead-link -->
Get the Node.js installation script from [https://deb.nodesource.com/](https://deb.nodesource.com/). Work in the home directory.
<!-- textlint-enable weseek/no-dead-link -->

```bash
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_20.x -o nodesource_setup.sh
```

Execute the downloaded script.

```bash
$ sudo bash nodesource_setup.sh
```

This enables node.js to be obtained via `apt`, so install it using the `apt` command.

```bash
$ sudo apt -y install nodejs
```

Since GROWI uses pnpm for package installation, install the `pnpm` command here.

For the `<version>` part, please check the official website information and select appropriately.

```bash
$ curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sudo sh -
$ sudo pnpm setup
```

Also, since GROWI uses Turborepo for building, install the `turbo` command.

```bash
$ sudo pnpm add turbo --global
```

After installing Node.js, npm, pnpm, and turbo, check the installed versions.

```bash
$ nodejs -v
v20.12.2
$ npm -v
10.5.0
$ pnpm -v
9.12.2
$ turbo --version
2.1.3
```

## Elasticsearch

### Installation

Follow the [official page](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html) to proceed with installation. Here we install Elasticsearch 8.x.

First, install JDK17 to run Elasticsearch.

```bash
$ sudo apt -y install openjdk-17-jdk
```

Add the Elasticsearch repository GPG key to install packages.

```bash
$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
```

Add the Elasticsearch repository.

```bash
$ sudo echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
```

Now Elasticsearch can be installed via apt, so proceed with installation.

```bash
$ sudo apt update && sudo apt -y install elasticsearch
```

After installation is complete, the default password for the elastic user will be displayed, so make sure to note it down somewhere.

```text
--------------------------- Security autoconfiguration information ------------------------------ 
Authentication and authorization are enabled. 
TLS for the transport and HTTP layers is enabled and configured. 
The generated password for the elastic built-in superuser is : ～～～～～～～
```

Here, adjust the memory allocated to Elasticsearch. For personal use, 256MB is sufficient. Change according to team size and the number of pages.

```bash
$ sudo vim /etc/elasticsearch/jvm.options
# Add after the IMPORTANT: JVM heap size comment block
-Xms256m
-Xmx256m
```

After installation is complete, check the package version.

```bash
$ dpkg -l elasticsearch
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name           Version      Architecture Description
+++-==============-============-============-=====================================================
ii  elasticsearch  8.13.2       amd64        Distributed RESTful search engine built for the cloud
```

### Disabling TLS

Elasticsearch 8.x only accepts TLS communication by default. Since GROWI communicates via HTTP, configuration changes are necessary.

Edit `/etc/elasticsearch/elasticsearch.yml` and change the three settings from true to false, referring to the following diff.

```diff
diff -uNr old/elasticsearch.yml new/elasticsearch.yml
--- old/elasticsearch.yml       2024-04-30 13:36:37.106652641 +0000
+++ new/elasticsearch.yml       2024-04-30 13:38:07.739773922 +0000
@@ -89,18 +89,18 @@
 # --------------------------------------------------------------------------------

 # Enable security features
-xpack.security.enabled: true
+xpack.security.enabled: false

 xpack.security.enrollment.enabled: true

 # Enable encryption for HTTP API client connections, such as Kibana, Logstash, and Agents
 xpack.security.http.ssl:
-  enabled: true
+  enabled: false
   keystore.path: certs/http.p12

 # Enable encryption and mutual authentication between cluster nodes
 xpack.security.transport.ssl:
-  enabled: true
+  enabled: false
   verification_mode: certificate
   keystore.path: certs/transport.p12
   truststore.path: certs/transport.p12
```


### Installing Elasticsearch plugins required for GROWI

Install the following Elasticsearch plugins:

* [Japanese (kuromoji) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
* [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)

First, search for the command used to install Elasticsearch plugins.

```bash
$ dpkg -L elasticsearch | grep bin | grep plugin
/usr/share/elasticsearch/bin/elasticsearch-plugin
```

Use the command output above to install the analysis-kuromoji plugin and analysis-icu plugin.

```bash
# Install analysis-kuromoji
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-kuromoji

# Install analysis-icu plugin
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu
```

### Starting Elasticsearch and enabling auto-start

Use the `systemctl` command to enable auto-start for Elasticsearch and start it.

```bash
$ sudo systemctl enable --now elasticsearch
```

Check if it's running normally.

```bash
$ systemctl status elasticsearch
● elasticsearch.service - Elasticsearch
     Loaded: loaded (/lib/systemd/system/elasticsearch.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2024-05-03 08:46:23 JST; 11min ago
...
```

Also, verify that http communication is possible.

```json
$ curl http://localhost:9200/
{
  "name" : "localhost.localdomain",
  "cluster_name" : "elasticsearch",
  "cluster_uuid" : "_na_",
  "version" : {
    "number" : "8.13.3",
    "build_flavor" : "default",
    "build_type" : "rpm",
    "build_hash" : "617f7b76c4ebcb5a7f1e70d409a99c437c896aea",
    "build_date" : "2024-04-29T22:05:16.051731935Z",
    "build_snapshot" : false,
    "lucene_version" : "9.10.0",
    "minimum_wire_compatibility_version" : "7.17.0",
    "minimum_index_compatibility_version" : "7.0.0"
  },
  "tagline" : "You Know, for Search"
}
```

## MongoDB

### Installation

Follow the [official page](https://www.mongodb.com/docs/v6.0/tutorial/install-mongodb-on-ubuntu/) to proceed with installation. The version is MongoDB 6.0.

First, import the public key for `apt`.

```bash
curl -fsSL https://www.mongodb.org/static/pgp/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

Add the repository. Here are examples for Ubuntu 20.04 and Ubuntu 22.04.

**Ubuntu 20.04**

```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

**Ubuntu 22.04**

```bash
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

```

After adding the repository, install MongoDB.

```bash
$ sudo apt update && sudo apt -y install mongodb-org
```

After installation is complete, check the package version.

```bash
$ dpkg-query -l "mongodb-org*:amd64"
Desired=Unknown/Install/Remove/Purge/Hold
| Status=Not/Inst/Conf-files/Unpacked/halF-conf/Half-inst/trig-aWait/Trig-pend
|/ Err?=(none)/Reinst-required (Status,Err: uppercase=bad)
||/ Name                             Version      Architecture Description
+++-================================-============-============-===================================================================
ii  mongodb-org                      6.0.15       amd64        MongoDB open source document-oriented database system (metapackage)
ii  mongodb-org-database             6.0.15       amd64        MongoDB open source document-oriented database system (metapackage)
ii  mongodb-org-database-tools-extra 6.0.15       amd64        Extra MongoDB database tools
ii  mongodb-org-mongos               6.0.15       amd64        MongoDB sharded cluster query router
ii  mongodb-org-server               6.0.15       amd64        MongoDB database server
ii  mongodb-org-shell                6.0.15       amd64        MongoDB shell client
ii  mongodb-org-tools                6.0.15       amd64        MongoDB tools
```

Use the `systemctl` command to enable auto-start for MongoDB and start it.

```bash
$ sudo systemctl enable --now mongod
```

Check if it's running normally.

```bash
$ systemctl status mongod
● mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2024-05-03 08:45:35 JST; 14min ago
...
```

## GROWI

### Installation

Get the source code from [https://github.com/weseek/growi](https://github.com/weseek/growi) and check the latest stable version at [https://github.com/weseek/growi/releases](https://github.com/weseek/growi/releases).

Here we describe the procedure for installing under `/opt/growi`.
To change the owner user and group to the GROWI execution user, please modify `<username>` and `<usergroup>` as appropriate.

```bash
$ sudo mkdir -p /opt/
$ sudo chown <username>:<usergroup> /opt/
$ cd /opt/
$ git clone https://github.com/weseek/growi growi
$ cd growi

# Check tags
$ git tag --sort=-version:refname | head -10
...
v7.2.0
v7.2.1
v7.2.3
v7.2.4
...

# Use the latest version without RC
$ git checkout -b v7.2.4 refs/tags/v7.2.4
```

After cloning the source code, use the `pnpm` command to install packages required for GROWI.

```bash
$ cd /opt/growi
$ pnpm install
```

### Build

After package installation is complete, perform the build.

```bash
$ pnpm run app:build
```

This will take some time.

### Startup verification

After the build is complete, perform startup verification.

This assumes that MongoDB and Elasticsearch are running on the same host.

Please modify `MONGO_URI` and `ELASTICSEARCH_URI` according to your environment.

```bash
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
npm run app:server

...
# Wait until the following message is displayed
{"name":"growi:crowi","hostname":"growi-server","pid":29259,"level":30,"msg":"[production] Express server is listening on port 3000","time":"2024-04-30T21:50:05.549Z","v":0}
```

Access `http://<hostname or ip address>:3000/` and verify that the initial setup screen is displayed.

### Auto-start configuration with systemd

Refer to "[Auto-start with systemd](/en/admin-guide/admin-cookbook/launch-with-systemd.html)".

## Reverse Proxy Configuration

Here we describe configuration examples for setting up a reverse proxy for the started GROWI.

### Apache

#### Installation

```bash
$ sudo apt update && sudo apt -y install apache2
```

#### Enabling required modules

Install proxy, proxy_http, proxy_wstunnel modules.

```bash
$ sudo a2enmod proxy proxy_http proxy_wstunnel
```

#### Reverse proxy configuration example

Here we extract and describe the parts related to reverse proxy.

```apacheconf
<IfModule mod_ssl.c>
  <VirtualHost _default_:443>
    ...
    ###
    # reverse proxy to crowi
    # To add Host: example.com to Header
    ProxyPreserveHost On
    # When using HTTPS: To add x-forwarded-proto: https to Header
    RequestHeader set x-forwarded-proto 'https'
    # Disable ETag because Apache may not return 304 for static assets
    <ifModule mod_headers.c>
            Header unset ETag
    </ifModule>
    FileETag None

    # Rewrite socket.io path
    RewriteEngine On
    RewriteCond %{REQUEST_URI}  ^/socket.io            [NC]
    RewriteCond %{QUERY_STRING} transport=websocket    [NC]
    RewriteRule /(.*) ws://localhost:3000/$1 [P,L]

    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
    ...
  </VirtualHost>
</IfModule>
```

#### Auto-start configuration

```bash
$ sudo systemctl enable --now apache2
```

### Nginx Installation and Configuration

#### Installation

```bash
$ sudo apt update && sudo apt -y install nginx
```

#### Reverse proxy configuration example

Here we describe a configuration example using HTTPS. Please configure the parts enclosed in `<>` such as `<server>` according to your environment.

```nginx
upstream growi {
    server localhost:3000;
}

map $http_upgrade $connection_upgrade {
    default Upgrade;
    ''      close;
}

server {
    listen 443 ssl http;
    server_name <server>;
    ssl_certificate <cert_file>;
    ssl_certificate_key <key_file>;

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port $server_port;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_pass http://growi;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection $connection_upgrade;
        proxy_read_timeout 900s;
    }
}

server {
    listen 80;
    server_name <server>;
    return 301 https://$server_name$request_uri;
}
```

Verify that there are no issues with the configuration file.

```bash
$ sudo nginx -t
nginx: the configuration file /etc/nginx/nginx.conf syntax is ok
nginx: configuration file /etc/nginx/nginx.conf test is successful
```

#### Auto-start configuration

```bash
$ sudo systemctl enable --now nginx
```
