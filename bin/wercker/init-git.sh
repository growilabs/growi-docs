##
## refs https://vuepress.vuejs.org/guide/deploy.html#github-pages
##

#!/usr/bin/env sh

git config --global user.name "wercker"
git config --global user.email "info@weseek.co.jp"

# navigate into the build output directory
cd docs/.vuepress/dist

git init

# reconfigure origin
GITHUB_ORIGIN=https://yuki-takei:$GITHUB_TOKEN@$WERCKER_GIT_DOMAIN/$WERCKER_GIT_OWNER/$WERCKER_GIT_REPOSITORY.git
git remote add origin $GITHUB_ORIGIN

cd -
