# bakudankun/crowi からの移行

## 概要

<!-- textlint-disable weseek/sentence-length -->
- Crowi の docker image、[bakudankun/crowi](https://github.com/crowi/docker-crowi) を利用している環境から、GROWI 公式の docker-compose を用いたディプロイ方法である [growilabs/growi-docker-compose](https://github.com/growilabs/growi-docker-compose) への切り替えを想定
<!-- textlint-enable weseek/sentence-length -->
- その際、以下のデータ移行を伴うことになる
  - MongoDB コンテナのデータボリュームからデータを吸い出し、リストアする
  - アプリケーションコンテナのデータボリュームからアップロードファイルデータを吸い出し、リストアする

## 前準備

1. Crowi と GROWI のコンテナを起動しておく
    - 仮に、それぞれで利用しているコンテナ名、データボリューム名を以下とする(必要に応じて置き換える)

        ||Crowi|GROWI|
        |---|---|---|
        |アプリケーションコンテナ|crowi_crowi_1|growi_app_1|
        |アプリケーションコンテナ用データボリューム|crowi_crowi_data|growi_growi_data|
        |MongoDB コンテナ|crowi_mongo_1|growi_mongo_1|

## PASSWORD_SEED の抽出

- [bakudankun/crowi](https://github.com/crowi/docker-crowi) 利用時に、環境変数で PASSWORD_SEED を明示的に指定していた場合は、 GROWI でもそれを引き続き利用する
- 明示的に指定していなかった場合、自動生成された値がデータボリュームに保存されているので、それを抽出する

    ```bash
    (TBD)
    ```

## DB のデータ移行

1. Crowi から mongodump を使い DB のデータのバックアップを取る

    ```bash
    docker run -it --rm --link crowi_mongo_1 --network crowi_default --volume $(pwd):/backup mongo bash
    mongodump --host crowi_mongo_1 --db crowi --out /backup
    ```

2. GROWI へバックアップデータをリストアする

    ```bash
    docker run -it --rm --link growi_mongo_1 --network growi_default  --volume $(pwd):/backup mongo bash
    mongorestore -v --host growi_mongo_1 --db growi backup/crowi
    ```

    [要調査] ユニーク制約に引っかかるかもしれない

3. `PASSWORD_SEED` のセット
    - 抽出した`PASSWORD_SEED`を GROWI 側の起動時の環境変数(`docker-compose.yml` で指定)に設定する

3. GROWI を再起動


## アップロードファイルのデータ移行

**アップロードファイルの保存先に AWS S3 を使う場合は、以下の作業は不要**

- [bakudankun/crowi](https://github.com/crowi/docker-crowi) は、デフォルトでアップロードファイルをファイルシステムに保存します(`FILE_UPLOAD=local`)
- 同様の環境で動かすには、データを移した上で GROWI 側の起動時の環境変数(`docker-compose.yml` で指定)に `FILE_UPLOAD=local` を入れる

1. Crowi から uploads のバックアップを取る

    ```bash
    docker run --rm -v crowi_crowi_data:/data -v $(pwd):/backup bakudankun/crowi cp -rp /data /backup
    ```

2. GROWI へバックアップデータをリストアする

    ```bash
    docker run --rm -v crowiplus_crowi_data:/data -v $(pwd):/backup growi_app_1 cp -rp /backup/uploads /data/
    ```
