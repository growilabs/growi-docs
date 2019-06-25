# Heroku

## Launch App

1. Go to [the latest release page on GitHub](https://github.com/weseek/growi/releases/latest)
1. Go to file tree URL like https://github.com/weseek/growi/tree/vX.X.x
1. Click "Deploy to Heroku" button at the top of README.md
      1. Your browser will jump to Heroku
      1. Login if you need
1. Deploy app



## Upgrade

### Install Heroku CLI

Please install Heroku CLI according to the [Official Heroku page](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).

### Update app's repository using Heroku CLI

At first, login to Heroku with following command:

```
$ heroku login 
```

Then, clone the app's repository from your Heroku account. Note that \[App Name\] should be replaced by your App's name. When you execute these comannds, you may see a message like `warning: You appear to have cloned an empty repository.`, it can be ignored safely.
```
heroku git:clone -a [App Name]
```

Check if **remote** registered correctly with `git remote`.
```
$ git remote -v
heroku	https://git.heroku.com/[App Name].git (fetch)
heroku	https://git.heroku.com/[App Name].git (push)
```

Register the GROWI repository on GitHub as **remote**.
```
$ git remote add origin https://github.com/weseek/growi.git
```

Get the tag list from GROWI repository.
```
$ git pull origin --tags 
```

Create a **branch** which is the version you want to use and checkout.
```
$ git checkout -b growi-vX.X.X refs/tags/vX.X.X
```

Push created branch to master branch of your Heroku repository. As a result, Heroku will build and deploy your app and complete upgrade, if you will not see any errors. (In some cases it may be necessary to give `--force` option with the command.)

```
$ git push heroku growi-vX.X.X:master
```
