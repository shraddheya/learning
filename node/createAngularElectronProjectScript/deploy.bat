@echo off
CLS
git pull
call pkg createAngularElectronProj.js -o createAngularElectronProj.exe
git add .
git commit -m "committing : %date%_%time% %1"
git push --set-upstream origin master