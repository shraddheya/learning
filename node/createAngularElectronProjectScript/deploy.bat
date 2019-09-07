@echo off
CLS
DIR
set mypath=%cd%
set deploypath=../../../githubpublic/angular-electron-creator/
git pull
echo.
echo deploying
echo.
git add .
git commit -m "committing : %date%_%time% "%1""
git push --set-upstream origin master
CD %deploypath%
DIR
git pull
echo.
echo packing
echo.
call pkg %mypath%\createAngularElectronProj.js -o createAngularElectronProj.exe
call pkg %mypath%\createAngularElectronSqlcypher.js -o createAngularElectronSqlcypherProj.exe
echo.
echo deploying
echo.
git add .
git commit -m "committing : %date%_%time% "%1""
git push --set-upstream origin master