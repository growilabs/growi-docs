# CentOS

[[toc]]

## Overview

This chapter introduces the installation process for GROWI on CentOS 7. Installation on CentOS 6 has not been verified.

Software needed for Setup are listed below.

* node.js 8.x \(DO NOT USE 9.x\)
* npm 6.x
* yarn
* MongoDB 3.x
* \(Optional\) Elasticsearch 5.x
* \(Optional\) systemd
* \(Optional\) Apache or nginx

Software listed as 'Optional' are not required, but in this document all are used, from construction of an environment using Apache or nginx as a reverse proxy for the full-text search feasible Growi, to simultaneously launching the host OS using systemd.

## Installation for node.js 8.x & npm

### Use the NodeSource repository

Download the Node.js installation script from [https://rpm.nodesource.com/](https://rpm.nodesource.com/). The working directory is the home directory.

```text
$ cd ~
$ curl -sL https://rpm.nodesource.com/setup_8.x -o nodesource_setup.sh
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
v8.15.1
$ npm -v
6.4.1
$ yarn -v
1.15.2
```

## Elasticsearch

### Installation

Follow the [Official Website](https://www.elastic.co/guide/en/elasticsearch/reference/current/rpm.html) to proceed installation. Here we make a few changes to install Elasticsearch 5.x

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

Once the installation is complete, specifiy the memory allocation pool size for Elasticsearch. If the usage is for individual use, 256MB should be enough for memory allocation. Make changes based on the scale of the team and the amount of pages.

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

Follow the [Official Website](https://docs.mongodb.com/v3.6/tutorial/install-mongodb-on-red-hat/) to proceed installation. In this section MongoDB 3.6 is used.

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
$ sudo git checkout -b v3.4.2 refs/tags/v3.4.2
```

After cloning the source code, use the `yarn` command to install packages needed for GROWI.

```text
$ cd /opt/growi
$ sudo yarn
```

### Check Startup

Once installation for packages is completed, check the startup.

Here it is a requirement that MongoDB and Elasticsearch are running under the same hostname.

Rewrite `MONGO_URI` and `ELASTICSEARCH_URI` appropriate to the environment.

```text
$ sudo \
MONGO_URI=mongodb://localhost:27017/growi \
ELASTICSEARCH_URI=http://localhost:9200/growi \
npm start

...
# Wait for the message below to appear
> growi@3.1.9 server:prod /opt/growi
> env-cmd config/env.prod.js node app.js
```

Access `http://<hostname or ip address>:3000/` and check whether the initial setup page appears.

### Setting autoboot using systemd

See "[Autostart using systemd](../admin-cookbook/launch-with-systemd.md)".

## リバースプロキシの設定

ここでは、起動した GROWI に対してリバースプロキシを行うための設定例を記載します。

### Apache

#### インストール

```text
$ sudo yum install httpd
```

#### リバースプロキシの設定例

ここではリバースプロキシに関する箇所を抜粋して記載しています。

```text
<IfModule mod_ssl.c>
  <VirtualHost _default_:443>
    ...
    ###
    # reverse proxy to crowi
    # Header に Host: example.com を追加するため
    ProxyPreserveHost On
    # HTTPS利用時: Header に x-forwarded-proto: https を追加するため
    RequestHeader set x-forwarded-proto 'https'
    # Apache では static assets で 304 が返らないことがあるので ETag を無効化する
    <ifModule mod_headers.c>
            Header unset ETag
    </ifModule>
    FileETag None

    # socket.io の path を rewrite する
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

#### 自動起動の設定

```text
$ sudo systemctl enable httpd
```

### Nginx のインストールと設定

#### インストール

nginx のレポジトリを追加します。`/etc/yum.repos.d/nginx.repo`を作成し、以下の内容を書き込みます。

```text
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/$releasever/$basearch/
gpgcheck=0
enabled=1
```

これで、yum 経由で nginx がインストールできるようになったため、インストールを行います。

```text
$ sudo yum install -y nginx
```

#### リバースプロキシの設定例

`/etc/nginx/conf.d/growi.conf` のようなファイルを作成し、設定を書き込みます。  
ここでは HTTPS を利用する設定例を記載しています。 &lt;server&gt; など&lt;&gt;で囲まれている箇所は、適宜環境に合わせて設定してください。

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

#### 自動起動の設定

```text
$ sudo systemctl enable nginx
```