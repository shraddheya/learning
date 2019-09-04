@echo off
CLS
DIR
set mypath=%cd%
set deploypath=../../../githubpublic/angular-electron-creator/
git pull
echo.
echo packing
echo.
echo.
echo deploying
echo.
CD %deploypath%
DIR
git pull
call pkg %mypath%\createAngularElectronProj.js -o createAngularElectronProj.exe
git add .
git commit -m "committing : %date%_%time% "%1""
git push --set-upstream origin master
cd %deploypath%
echo.
echo deploying
echo.
git add .
git commit -m "committing : %date%_%time% "%1""
git push --set-upstream origin master