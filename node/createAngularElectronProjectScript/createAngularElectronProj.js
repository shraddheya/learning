const execSync = require("child_process").execSync
const path = require("path")
const fs = require('fs')

var routing = "true";
var cssSchema = "sass";
var projs = [];

function logger(){
  for (let i = 0; i < arguments.length; i++) {
    var comm = 'echo ' + arguments[i]
    execSync(comm, {
      stdio: "inherit"
    })
  }
  return 0
}

function getElectronFile(){
  return String.raw`dsergf`
}

process.argv.slice(2).forEach(a => {
  if (a == "-nr") routing = "true";
  if ("css, scss, sass, less".indexOf(a) !== -1) cssSchema = a;
  if ("css, scss, sass, less, -r".indexOf(a) === -1) projs.push(a);
})

projs.forEach(p => {
  var objThis = {}
  var pth = path.dirname(p)
  var nm = path.basename(p)
  var angularjson = path.join(p, 'angular.json')
  var packagejson = path.join(p, 'package.json')
  var indexFile = path.join(p, 'src', 'index.html')
  var electronMain = path.join(p, 'electronMain.js')
  if(!fs.existsSync(pth)) fs.mkdirSync(pth)
  if(!fs.existsSync(p)){
    execSync(`ng new ${nm} --routing ${routing} --style ${cssSchema}`, {
      cwd: pth,
      stdio: "inherit"
    })
    execSync(`npm i -D electron@latest electron-reload@latest`, {
      cwd: p,
      stdio: "inherit"
    })
  }
  
  objThis.angularjson = require(angularjson)
  objThis.packagejson = require(packagejson)
  objThis.angularjson.projects[nm].architect.build.options.outputPath = "dist"
  objThis.packagejson.version = '0.0.0'
  objThis.packagejson.main = 'electronMain.js'
  objThis.packagejson.author = {
    name: "Shraddheya Shrivastava",
    website:'https://www.shraddheya.com'
  }
  fs.writeFile(angularjson, JSON.stringify(objThis.angularjson, null, 2), 'utf8', err=>{
    if (err)return logger(err)
  })
  fs.writeFile(packagejson, JSON.stringify(objThis.packagejson, null, 2), 'utf8', err=>{
    if (err)return logger(err)
  })
  fs.writeFile(electronMain, String.raw`const { app, BrowserWindow } = require('electron')

var serve = process.argv.slice(1).some(function (val) { return val === '--serve' });

let win

var createWindow= _=>{
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })


  if (serve) {
    require('electron-reload')(__dirname, {
        electron: require(__dirname + "/node_modules/electron")
    });
    win.loadURL('http://localhost:4200');
    win.webContents.openDevTools()
  } else {
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }))
  }

  win.on('closed', _=>win = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', _=>{
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', _=>{
  if (win === null) createWindow()
})
  `, 'utf8', err=>{
    if (err)return logger(err)
  })
  fs.readFile(indexFile, 'utf8', (err,d)=>{
    if(err) return logger(err)
    var result = d.replace('<base href="/">', '<base href="./">')
    fs.writeFile(indexFile, result, 'utf8', error=>{
      if (error) return logger(error)
    })
  })
  // fs.readFile(packagejson, 'utf8', (err,d)=>{
  //   if(err) return logger(err)
  //   var result = d.replace('<base href="/">', '<base href="./">')
  //   fs.writeFile(indexFile, result, 'utf8', error=>{
  //     if (error) return logger(error)
  //   })
  // })

  //debug code
  execSync('code ' + p)
  execSync('code ' + indexFile)
  execSync('code ' + angularjson)
  execSync('code ' + packagejson)
  execSync('code ' + electronMain)
})


