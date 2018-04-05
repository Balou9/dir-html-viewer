var electron = require('electron')
var {app, BrowserWindow} = electron
var shell = require('electron').shell
var dirHtmlUrl = require('dir-html-url')


electron.app.on('ready', function () {
  // create new window
  var mainWindow = new electron.BrowserWindow({width: 600, height: 800})
  // load html into window
  mainWindow.loadURL('file://' + __dirname + '/resources/index.html')
  // Build menu from template
  // var mainMenu = Menu.buildFromTemplate(menuTemp)
  // insert template
  // Menu.setApplicationMenu(mainMenu)
})

// menu template
var menuTemp = [
  {
    label:'File',
    submenu: [
      {label: 'Set Directory', click() {shell.openExternal(process.cwd())}},
      {label: 'Reload window', click() {app.relaunch()}},
      {type: 'separator'},
      {label: 'Exit',
      accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
      click() {app.quit()}}
    ]
  }
]
