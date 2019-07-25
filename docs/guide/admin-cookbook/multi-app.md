# Multiple Sites

::: tip
This cookbook supposes the usage of [docker-compose](../getting-started/docker-compose.md).
:::

## Overview

This chapter introduces how to launch three GROWI sites.

### Build Image

```bash
git clone https://github.com/weseek/growi-docker-compose.git growi
cd growi
docker build -t growimulti_app .
```
s
### Replace docker-compose.yml

Edit `./docker-compose.yml` and duplicate the app container and volumes. On this example, these GROWI apps share the use of one Mongo DB contatiner and one Elasticsearch container for saving resource.

```text:docker-compose.yml
...

services:
  app-1:
    // Specify the image was built in the previous step
    image: "growimulti_app:latest"
    ports:
      - 127.0.0.1:3001:3000
    links:
      - mongo:mongo
      - elasticsearch:elasticsearch
    depends_on:
      - mongo
      - elasticsearch
    environment:
      # Use same paths for app-1 in MONGO_URI and ELASTICSEARCH_URI
      - MONGO_URI=mongodb://mongo:27017/growi-1
      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-1
      - PASSWORD_SEED=changeme
    command: "dockerize
              -wait tcp://mongo:27017
              -wait tcp://elasticsearch:9200
              -timeout 60s
              npm run server:prod"
    restart: unless-stopped
    volumes:
      - growi_data_1:/data

  app-2:
    // Specify the image was built in the previous step
    image: "growimulti_app:latest"
    ports:
      - 127.0.0.1:3002:3000
    links:
      - mongo:mongo
      - elasticsearch:elasticsearch
    depends_on:
      - mongo
      - elasticsearch
    environment:
      # Use same paths for app-2 in MONGO_URI and ELASTICSEARCH_URI
      - MONGO_URI=mongodb://mongo:27017/growi-2
      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-2
      - PASSWORD_SEED=changeme
    command: "dockerize
              -wait tcp://mongo:27017
              -wait tcp://elasticsearch:9200
              -timeout 60s
              npm run server:prod"
    restart: unless-stopped
    volumes:
      - growi_data_2:/data

  app-3:
    // Specify the image was built in the previous step
    image: "growimulti_app:latest"
    ports:
      - 127.0.0.1:3003:3000
    links:
      - mongo:mongo
      - elasticsearch:elasticsearch
    depends_on:
      - mongo
      - elasticsearch
    environment:
      # Use same paths for app-3 in MONGO_URI and ELASTICSEARCH_URI
      - MONGO_URI=mongodb://mongo:27017/growi-3
      - ELASTICSEARCH_URI=http://elasticsearch:9200/growi-3
      - PASSWORD_SEED=changeme
    command: "dockerize
              -wait tcp://mongo:27017
              -wait tcp://elasticsearch:9200
              -timeout 60s
              npm run server:prod"
    restart: unless-stopped
    volumes:
      - growi_data_3:/data
...

volumes:
  # Write the volumes each GROWI uses
  growi_data_1:
  growi_data_2:
  growi_data_3:

...
```

### Start
Excute this command and access to each sites.

```bash
docker-compose up
```

and access to:

[http://localhost:3001](http://localhost:3001) (app-1)

[http://localhost:3002](http://localhost:3002) (app-2)

[http://localhost:3003](http://localhost:3003) (app-3)


## Upgrade

### Stop

```bash
docker-compose stop
```

### Remove app containers and images

```bash
docker-compose rm app-1
docker-compose rm app-2
docker-compose rm app-3
docker rmi growimulti_app
docker rmi weseek/growi:3
```

### Rebuild Image

```bash
git pull
docker build -t growimulti_app .
```

### Start

```bash
docker-compose up
```

