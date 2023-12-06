set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:DelysidColor/vue2-userlist-jsonpplaceholder.git master:gh-pages 

cd -