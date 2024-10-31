# Ubuntu Server

[[toc]]

## Overview

This chapter introduces the installation process for GROWI on Ubuntu Server 16.04 \(Xenial\). Installation on 14.04 and 18.04 have not been verified.

Software needed for Setup are listed below.

* Node.js 14.x \(DO NOT USE 9.x\)
* npm 6.x
* pnpm
* MongoDB 4.4
* \(Option\) Elasticsearch 6.8
* \(Option\) systemd
* \(Option\) Apache or nginx

Software listed as 'Optional' are not required, but in this document all are used, from construction of an environment using Apache or nginx as a reverse proxy for the full-text search feasible Growi, to simultaneously launching the host OS using systemd.

## Installation for node.js 14.x & npm

### Use the NodeSource repository

<!-- textlint-disable weseek/no-dead-link -->
Download the Node.js installation script from [https://deb.nodesource.com/](https://deb.nodesource.com/). The working directory is the home directory.
<!-- textlint-enable weseek/no-dead-link -->

```text
$ cd ~
$ curl -sL https://deb.nodesource.com/setup_14.x -o nodesource_setup.sh
```

Run the retrieved script.

```text
$ sudo bash nodesource_setup.sh
```

Now that node.js can be retrieved via `apt-get`, use the `apt-get` command to install.

```text
$ sudo apt-get install nodejs
```

Since GROWI uses pnpm for package installation, install the `pnpm` command.

```text
$ curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=<version> sudo sh -
$ sudo pnpm setup
```

Additionally, since GROWI uses Turborepo for building, install the `turbo` command.

```text
$ sudo pnpm add turbo --global
```

Once installation for Node.js, npm, pnpm and turbo is completed, check the installed versions.

```text
$ nodejs -v
v14.11.0
$ npm -v
6.14.8
$ pnpm -v
9.12.2
$ turbo --version
2.1.3
```

## Elasticsearch

### Installation

Follow the [Official site](https://www.elastic.co/guide/en/elasticsearch/reference/current/deb.html) to proceed installation. Here we make a few changes to install Elasticsearch 5.x

::: warning
This document is outdated. GROWI currently supports the most recent version of Elasticsearch 6.x (updated 05/2019)
:::

First, install JDK8 to make Elasticsearch runnable.

```text
$ sudo apt-get install openjdk-8-jdk
```

To install the package, import the Elasticsearch repository's GPG key.

```text
$ wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo apt-key add -
```

To allow installation using the apt command via https, install the `apt-transport-https` package.

```text
$ sudo apt-get install apt-transport-https
```

Add the Elasticsearch repository.

```text
$ echo "deb https://artifacts.elastic.co/packages/5.x/apt stable main" | sudo tee -a /etc/apt/sources.list.d/elastic-5.x.list
```

Now Elasticsearch can be installed via apt-get. Install.

```text
$ sudo apt-get update && sudo apt-get install elasticsearch
```

Once the installation is complete, specify the memory allocation pool size for Elasticsearch. If the usage is for individual use, 256MB should be enough for memory allocation. Make changes based on the scale of the team and the amount of pages.

```text
$ sudo vim /etc/elasticsearch/jvm.options
# Before edit
-Xms1g
-Xmx1g

# After edit
-Xms256m
-Xmx256m
```

Once installation is completed, check the package version.

```text
$ dpkg -l | grep elasticsearch
ii  elasticsearch                    5.6.10                                     all          Elasticsearch is a distributed RESTful search engine built for the cloud. Reference documentation can be found at https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html and the 'Elasticsearch: The Definitive Guide' book can be found at https://www.elastic.co/guide/en/elasticsearch/guide/current/index.html
```

Using the `systemctl` command, launch Elasticsearch.

```text
$ sudo systemctl start elasticsearch
```

Enable the autoboot setting of elasticsearch

```text
$ sudo systemctl enable elasticsearch
```

Check the status to verify it is running properly.

```text
$ sudo systemctl status elasticsearch
```

### Installation for Elasticsearch plugins needed for GROWI

We will install the Elasticsearch plugins shown below

* [Japanese \(kuromoji\) Analysis plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-kuromoji.html)
* [ICU Analysis Plugin](https://www.elastic.co/guide/en/elasticsearch/plugins/current/analysis-icu.html)

First, search for the command used to install Elasticsearch plugins

```text
$ dpkg -L elasticsearch | grep bin | grep plugin
/usr/share/elasticsearch/bin/elasticsearch-plugin
```

Using the command above, install both the analysis-kuromoji plugin and the analysis-icu plugin

```text
# Installation for analysis-kuromoji
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-kuromoji

# Installation for analysis-icu plugin
$ sudo /usr/share/elasticsearch/bin/elasticsearch-plugin install analysis-icu
```

## MongoDB

### Installation

Follow the [Official site](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-ubuntu/) to proceed installation. In this section MongoDB 3.6 is used.

::: warning
This document is outdated. GROWI currently supports the version of MongoDB 4.x (updated 07/2021)
:::

To start off, import the public key used by `apt`.

```text
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
```

Add the repository. Listed below are examples for Ubuntu 14.04 and Ubuntu 16.04.

**Ubuntu 14.04**

```text
$ echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
```

**Ubuntu 16.04**

```text
$ echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
```

Now that the repository has been added, install MongoDB.

```text
$ sudo apt-get update && sudo apt-get install mongodb-server
```

Once installation is complete, check the package versions.

```text
ii  mongodb-org                      3.6.6                                      amd64        MongoDB open source document-oriented database system (metapackage)
ii  mongodb-org-mongos               3.6.6                                      amd64        MongoDB sharded cluster query router
ii  mongodb-org-server               3.6.6                                      amd64        MongoDB database server
ii  mongodb-org-shell                3.6.6                                      amd64        MongoDB shell client
ii  mongodb-org-tools                3.6.6                                      amd64        MongoDB tools
```

Using the `systemctl` command, launch MongoDB.

```text
$ sudo systemctl start mongod
```

Enable the autoboot setting of MongoDB.

```text
$ sudo systemctl enable mongod
```

Check the status to verify it is running properly.

```text
$ sudo systemctl status mongod
```

## GROWI

### Installation

Download the source code from [https://github.com/weseek/growi](https://github.com/weseek/growi), and check the latest stable version at [https://github.com/weseek/growi/releases](https://github.com/weseek/growi/releases).

The installation procedure shown below will be carried out under `/opt/growi`.

```text
$ sudo mkdir -p /opt/
$ cd /opt/
$ sudo git clone https://github.com/weseek/growi /opt/growi
$ cd /opt/growi

# Check the tags
$ sudo git tag -l
...
v6.3.3
v6.3.4
v7.0.0
v7.0.1
v7.0.2
...

# Use the latest version that doesn't have RC
$ sudo git checkout -b v7.0.2 refs/tags/v7.0.2
```

After cloning the source code, use the `pnpm` command to install packages needed for GROWI.

```text
$ cd /opt/growi
$ sudo pnpm install
```

### Check Startup

Once installation for packages is completed, check the startup.

Here it is a requirement that MongoDB and Elasticsearch are running under the same hostname.

Rewrite `MONGO_URI` and `ELASTICSEARCH_URI` appropriate to the environment.

```text
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
npm run start

...
# Wait for the message below to appear
> growi@4.3.1 server:prod /opt/growi
> env-cmd config/env.prod.js node app.js
```

Access `http://<hostname or ip address>:3000/` and check whether the initial setup page appears.

### Setting autoboot using systemd

See "[Autostart using systemd](/en/admin-guide/admin-cookbook/launch-with-systemd.html)".

## Reverse Proxy Settings

Shown below is an example of setting up a reverse proxy to an activated GROWI.

### Apache

#### Installation

```text
$ sudo apt-get update && sudo apt-get -y install apache2
```

#### Enable required Modules

Install proxy, proxy\_http, proxy\_wstunnel module

```text
$ sudo a2enmod proxy proxy_http proxy_wstunnel
```

#### Reverse Proxy Settings Example

Shown below is a part related to reverse proxy

```text
<IfModule mod_ssl.c>
  <VirtualHost _default_:443>
    ...
    ###
    # reverse proxy to crowi
    # To add Host: example.com to the Header
    ProxyPreserveHost On
    # Using HTTPS: To add x-forwarded-proto: https to the Header
    RequestHeader set x-forwarded-proto 'https'
    # With Apache, sometimes a 304 isn't returned from static assets, so unset ETag
    <ifModule mod_headers.c>
            Header unset ETag
    </ifModule>
    FileETag None

    # Rewrite the path of socket.io
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

#### Autoboot Settings

```text
$ sudo systemctl enable apache2
```

### Nginx Installation and Settings

#### Installation

```text
$ sudo apt-get update && sudo apt-get -y install nginx
```

#### Reverse Proxy Settings Example

Shown here is an example using HTTPS. Sections surrounded by &lt;server&gt; or &lt;&gt; should be set accordingly to the appropriate environment.

```text
upstream growi {
    server localhost:3000;
}

map $http_upgrade $connection_upgrade {
    default Upgrade;
    ''      close;
}

server {
    listen 443 ssl spdy;
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

#### Autoboot Settings

```text
$ sudo systemctl enable nginx
```
