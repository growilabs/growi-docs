# CentOS

[[toc]]

## Overview

This chapter introduces the installation process for GROWI on CentOS 7. Installation on CentOS 6 has not been verified.

Software needed for Setup are listed below.

* Node.js 14.x \(DO NOT USE 14.x\)
* npm 6.x
* yarn
* MongoDB 4.x
* \(Optional\) Elasticsearch 6.x
* \(Optional\) systemd
* \(Optional\) Apache or nginx

Software listed as 'Optional' are not required, but in this document all are used, from construction of an environment using Apache or nginx as a reverse proxy for the full-text search feasible Growi, to simultaneously launching the host OS using systemd.

## Installation for node.js 8.x & npm

### Use the NodeSource repository

<!-- textlint-disable weseek/no-dead-link -->
Download the Node.js installation script from [https://rpm.nodesource.com/](https://rpm.nodesource.com/). The working directory is the home directory.
<!-- textlint-enable weseek/no-dead-link -->

```text
$ cd ~
$ curl -sL https://rpm.nodesource.com/setup_14.x -o nodesource_setup.sh
```

Run the retrieved script.

```text
$ sudo bash nodesource_setup.sh
```

Now that node.js can be retrieved via `yum`, use the `yum` command to install.

```text
$ sudo yum install -y nodejs
```

Since GROWI uses yarn for package installation, install the `yarn` command.

```text
$ curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
$ sudo yum install -y yarn
```

Once installation for Node.js, npm, yarn is completed, check the installed versions.

```text
$ node -v
v14.11.0
$ npm -v
6.14.8
$ yarn -v
1.22.5
```

## Elasticsearch

### Installation

Follow the [Official site](https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html) to proceed installation. Here we make a few changes to install Elasticsearch 5.x

::: warning
This document is outdated. GROWI currently supports the most recent version of Elasticsearch 6.x (updated 05/2019)
:::

First, install JDK8 to make Elasticsearch runnable.

```text
$ sudo yum install java-1.8.0-openjdk
```

To install the package, import the Elasticsearch repository's GPG key.

```text
$ sudo rpm --import https://artifacts.elastic.co/GPG-KEY-elasticsearch
```

Add the Elasticsearch repository. Insert the following into `/etc/yum.repos.d/elasticsearch.repo`.

```text
[elasticsearch-5.x]
name=Elasticsearch repository for 5.x packages
baseurl=https://artifacts.elastic.co/packages/5.x/yum
gpgcheck=1
gpgkey=https://artifacts.elastic.co/GPG-KEY-elasticsearch
enabled=1
autorefresh=1
type=rpm-md
```

Now Elasticsearch can be installed via yum. Install.

```text
$ sudo yum install -y elasticsearch
```

Once the installation is complete, specify the memory allocation pool size for Elasticsearch. If the usage is for individual use, 256MB should be enough for memory allocation. Make changes based on the scale of the team and the amount of pages.

```text
$ sudo vim /etc/elasticsearch/jvm.options
# Before edit
-Xms2g
-Xmx2g

# After edit
-Xms256m
-Xmx256m
```

Once installation is completed, check the package version.

```text
$ yum list installed | grep elasticsearch
elasticsearch.noarch                 5.6.16-1                        @elasticsearch-5.x
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
$ rpm -ql elasticsearch | grep bin | grep plugin
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

Follow the [Official site](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-red-hat/) to proceed installation. In this section MongoDB 3.6 is used.

::: warning
This document is outdated. GROWI currently supports the version of MongoDB 4.x (updated 07/2021)
:::

Add the repository. Create and insert the following into `/etc/yum.repos.d/mongodb-org-3.6.repo`.

```text
[mongodb-org-3.6]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.6/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.6.asc
```

Now MongoDB can be installed via yum. Install.

```text
$ sudo yum install -y mongodb-org
```

Once installation is complete, check the package version.

```text
$ yum list installed | grep mongodb
mongodb-org.x86_64                   3.6.11-1.el7               @mongodb-org-3.6
mongodb-org-mongos.x86_64            3.6.11-1.el7               @mongodb-org-3.6
mongodb-org-server.x86_64            3.6.11-1.el7               @mongodb-org-3.6
mongodb-org-shell.x86_64             3.6.11-1.el7               @mongodb-org-3.6
mongodb-org-tools.x86_64             3.6.11-1.el7               @mongodb-org-3.6
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
v3.3.7
v3.3.8
v3.3.9
v3.4.0
v3.4.1
v3.4.2
...

# Use the latest version that doesn't have RC
$ sudo git checkout -b v4.3.1 refs/tags/v4.3.1
```

After cloning the source code, use the `npx lerna` command to install packages needed for GROWI.

```text
$ cd /opt/growi
$ sudo npx lerna bootstrap
```

### Check Startup

Once installation for packages is completed, check the startup.

Here it is a requirement that MongoDB and Elasticsearch are running under the same hostname.

Rewrite `MONGO_URI` and `ELASTICSEARCH_URI` appropriate to the environment.

```text
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
yarn start

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
$ sudo yum install httpd
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
$ sudo systemctl enable httpd
```

### Nginx Installation and Settings

#### Installation

Add the nginx repository. Insert the following into `/etc/yum.repos.d/nginx.repo`.

```text
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

Now nginx can be installed via yum. Install.

```text
$ sudo yum install -y nginx
```

#### Reverse Proxy Settings Example

Create a file `/etc/nginx/conf.d/growi.conf` to insert settings.
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
