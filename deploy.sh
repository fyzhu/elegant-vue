rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M master &&
git remote add origin git@github.com:fyzhu/elegant-vue.git &&
git push -f -u origin master &&
cd -
