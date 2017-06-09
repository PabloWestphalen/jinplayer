(function () {
  'use strict'

  const electron = require('electron')
  const dialog = electron.dialog
  const app = electron.app
  const BrowserWindow = electron.BrowserWindow
  const client = require('electron-connect').client

  const express = require('express')
  const fs = require('fs')
  const path = require('path')
  const logger = require('morgan')
  const cookieParser = require('cookie-parser')
  const bodyParser = require('body-parser')
  const skipMap = require('skip-map')
  const expressApp = express()
  const debug = require('debug')('express-test:server')
  const http = require('http')
  const port = process.env.PORT || '3000'
  let server

  const openDirectory = function () {
    var directory = dialog.showOpenDialog(mainWindow, {
      properties: ['openDirectory']
    });

    if (!directory) { return; }

    console.log(directory);
    mainWindow.webContents.send('print-directory', directory[0]);
  };

  exports.openDirectory = openDirectory;
  exports.coverDir = path.join(__dirname, 'www', 'assets', 'cover-imgs');
  exports.userData = app.getPath('userData');

  function onListening () {
    let addr = server.address()
    let bind = typeof addr === 'string'
          ? 'pipe ' + addr
          : 'port ' + addr.port
    debug('Listening on ' + bind)

    mainWindow.loadURL('http://127.0.0.1:3000')

        // Use Electron Connect when developing for live reloading, and show the devtools
    if (process.env.NODE_ENV === 'development') {
      mainWindow.toggleDevTools()
      client.create(mainWindow)
    };
  }

  let mainWindow = null

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('ready', function () {
    var directory = dialog.showOpenDialog({
      title: 'Select your music library folder',
      properties: ['openDirectory'],
    });

    exports.libDir = directory[0];

    mainWindow = new BrowserWindow({
      autoHideMenuBar: true,
      webPreferences: {
        nodeIntegration: true
      },
      width: 1200,
      height: 900
    })

    //console.log(dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']}));
    //openFile();
    

    expressApp.use(skipMap())
    expressApp.use(express.static(path.join(__dirname, 'www')))
    expressApp.use(express.static(path.join(__dirname, 'www')))
    expressApp.use(express.static(path.join(__dirname, 'node_modules')))
    expressApp.use(express.static(app.getPath('userData')))
    expressApp.use(logger('dev'))
    expressApp.use(bodyParser.json())
    expressApp.use(bodyParser.urlencoded({ extended: false }))
    expressApp.use(cookieParser())
    expressApp.set('port', port)
    expressApp.get('/', function (req, res) {
      res.sendFile(path.join(path.join(__dirname, '/index.html')))
    })

    expressApp.get('/song', function (req, res) {
      var songPath = req.query.path;
      
      if(fs.existsSync(songPath)) {
        var stat = fs.statSync(songPath);
        res.writeHead(200, {
              'Content-Type': 'audio/mpeg',
              'Content-Length': stat.size
          });
          var readStream = fs.createReadStream(songPath);
          readStream.pipe(res);
      }
    });

    server = http.createServer(expressApp)
    server.listen(port)
    server.on('listening', onListening)

    mainWindow.on('closed', function () {
      mainWindow = null
      server.close()
    })
  })
}())
// # sourceMappingURL=app.js.map
