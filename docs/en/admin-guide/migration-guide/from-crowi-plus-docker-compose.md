# Migrate from crowi-plus-docker-compose

::: danger
DO NOT EDIT `docker-compose.yml`. Only edit `Dockerfile`.

:::

## Dockerfile

1. Edit the line of `FROM` and `ENV APP_DIR`.
   * **Before**

     ```docker
       FROM weseek/crowi-plus:2
       ENV APP_DIR /opt/crowi-plus
     ```

   * **After**

     ```docker
       FROM growilabs/growi:7
       ENV APP_DIR /opt/growi
     ```
2. Because GROWI includes lsx plugin and pukiwiki-like-linker plugin in GROWI official image by default, comment out or delete the lines below.
   * **Before**

     ```docker
       # install plugins if necessary
       RUN echo "install plugins" \
       #  && npm install --save \
       #      crowi-plugin-lsx \
       #      crowi-plugin-pukiwiki-like-linker \
         && echo "done."
       # you must rebuild if install plugin at least one
       # RUN npm run build:prod
     ```

   * **After**

     ```docker
       # install plugins if necessary
       # ;;
       # ;; NOTE: In GROWI v3 and later,
       # ;;       2 of official plugins (growi-plugin-lsx and growi-plugin-pukiwiki-like-linker)
       # ;;       are now included in the 'growilabs/growi' image.
       # ;;       Therefore you will not need following lines except when you install third-party plugins.
       # ;;
       #RUN echo "install plugins" \
       #  && yarn add \
       #      growi-plugin-XXX \
       #      growi-plugin-YYY \
       #  && echo "done."
       # you must rebuild if install plugin at least one
       #RUN npm run build:prod
     ```

## Start

1. `docker-compose up`
