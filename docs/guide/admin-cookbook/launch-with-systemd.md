# Autostart using systemd

## Overview

In this chapter, we will introduce how to autostart GROWI using systemd.

## Create a Unit File

Create `/etc/systemd/system/growi.service`.

```text
[Unit]
Description=Growi
After=network.target mongod.service

[Service]
WorkingDirectory=/opt/growi
Environment=PORT=3000\
MONGO_URI=mongodb://localhost:27017/growi\
ELASTICSEARCH_URI=http://localhost:9200/growi
ExecStart=/usr/local/bin/npm start

[Install]
WantedBy=multi-user.target
```

### Configuration

#### WorkingDirectory

Set `WorkingDirectory` to the directory where GROWI is located. If you have followed GROWI Docs, GROWI should be found in  `/opt/growi`. Set it according to your environment.


#### Environment

Set environment variables such as `MONGO_URI` and `FILE_UPLOAD`.

#### ExecStart

Set `ExecStart` according to your environment. On CentOS, set it to `/usr/bin/npm start`.

## Run systemctl

### Start

```text
$ sudo systemctl start growi
```

### Enable Autostart

```text
$ sudo systemctl enable growi
```