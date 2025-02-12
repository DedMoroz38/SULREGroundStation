import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

function addEventListener(event, listener) {
  ipcRenderer.on(event, (e, args) => listener(args))
  return {
    unsubscribe() {
      removeEventListener(event, listener)
    }
  }
}

function openSerial() {
  console.log('clicked')
  return ipcRenderer.invoke('serialport-open')
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function click(data) {
  return ipcRenderer.invoke('click', data)
}

// Custom APIs for renderer
const api = { addEventListener, openSerial, click }

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('ElectronAPI', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
