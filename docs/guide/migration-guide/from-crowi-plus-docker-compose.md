# crowi-plus-docker-compose からの移行

::: danger
`docker-compose.yml`は編集せず、`Dockerfile` のみ編集してください
:::

## Dockerfile

1. `FROM` と`ENV APP_DIR` 行を以下のように書き換えます
   * **Before**

     ```docker
       FROM weseek/crowi-plus:2
       ENV APP_DIR /opt/crowi-plus
     ```

   * **After**

     ```docker
       FROM weseek/growi:3
       ENV APP_DIR /opt/growi
     ```
2. GROWI では、lsx プラグインと pukiwiki-like-linker プラグインはオフィシャルイメージに含まれるようになりました。そのため、以下の行をコメントアウトするか、削除してください。
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
       # ;;       are now included in the 'weseek/growi' image.
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



