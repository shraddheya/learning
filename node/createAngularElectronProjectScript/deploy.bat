@echo off
git pull
git add .
git commit -m "committing : %1"
git push --set-upstream origin master