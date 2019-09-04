@echo off
CLS
git pull
echo.
echo packing
echo.
call pkg createAngularElectronProj.js -o createAngularElectronProj.exe
echo.
echo deploying
echo.
git add .
git commit -m "committing : %date%_%time% %1"
git push --set-upstream origin master