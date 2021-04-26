rm -rf dist &&
yarn build &&
scp -r ./dist/* root@dreamlist.cn:/www/wwwroot/elegant.dreamlist.cn/
# cd dist &&
# git init &&
# git add . &&
# git commit -m "deploy" &&
# git branch -M master &&
# git remote add origin git@github.com:fyzhu/elegant-vue.git &&
# git push -f -u origin master &&
# cd -
