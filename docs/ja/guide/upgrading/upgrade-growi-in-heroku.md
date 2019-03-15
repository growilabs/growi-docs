## Heroku CLI のインストール

[公式ページ](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)を参考にHeroku CLIをインストールしてください。

## Heroku CLI を使ってリポジトリをクローンする

まず以下のコマンドによりHerokuにログインします。
```
$ heroku login 
```

続いて, Herokuからリポジトリをクローンします。クローンするときの名前はHerokuでのApp Nameになります.
`warning: You appear to have cloned an empty repository.`のようなメッセージが出ることがありますが無視して構いません。
```
heroku git:clone -a [App Name]
```

git remoteで正しくremoteが登録されているか確認します。
```
$ git remote -v
heroku	https://git.heroku.com/[App Name].git (fetch)
heroku	https://git.heroku.com/[App Name].git (push)
```

続いて, GitHub上のGROWIのリポジトリをremoteに登録します。
```
$ git remote add origin https://github.com/weseek/growi.git
```

GROWIリポジトリからtag一覧を取得します。
```
$ git pull origin --tags 
```

使用したいバージョンにブランチを作成してチェックアウトします。
```
$ git checkout -b growi-vX.X.X refs/tags/vX.X.X
```

作成したブランチをherokuのmasterにpushします。
```
$ git push heroku growi-vX.X.X:master
```








