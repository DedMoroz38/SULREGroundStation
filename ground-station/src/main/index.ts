import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { SerialPort, ReadlineParser } from 'serialport'

function createWindow(): void {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })
  setupWindow(mainWindow)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  ipcMain.on('ping', () => console.log('pong'))

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

async function setupWindow(window: BrowserWindow): Promise<void> {
  ipcMain.handle('serialport-open', async () => {
    console.log('opening serial')
    const path = '/dev/tty.usbmodem212301'
    const baudRate = 9600
    try {
      const port = new SerialPort({ path, baudRate })

      const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))

      parser.on('data', (data) => {
        console.log(data)
        window.webContents.send('serialport-data', data)
      })

      port.on('error', (err) => {
        console.error('SerialPort Error: ', err)
        window.webContents.send('serialport-error', err.message)
      })

      return 'Connected to ' + path
    } catch (error) {
      return 'Error connecting to serial port: ' + error.message
    }
  })

  ipcMain.handle('click', (_, records) => {
    return console.log('click: ', records)
  })
}
