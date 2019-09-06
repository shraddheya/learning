const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const url = require('url')
const { callUrl } = require('./electronBackend')
var serve = process.argv.slice(1).some(function (val) { return val === '--serve' })

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
    // require('electron-reload')(__dirname, {
    //     electron: require(__dirname + "/node_modules/electron")
    // });
    win.loadURL('http://localhost:4200');
    win.webContents.openDevTools()
  } else {
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
    }))
  }
  win.on('closed', _=>{win = null;exit()})
}
app.on('ready', createWindow)
app.on('window-all-closed', _=>{
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', _=>{
  if (win === null) createWindow()
})
ipcMain.on("async:dbfetch", (evt, arg)=>{
  console.log(arg)
  arg.hehe = "hehe"
  evt.sender.send('async:dbfetch', arg)
  callUrl(1, d=>{
    evt.sender.send('async:dbfetch', d)
  })
})
