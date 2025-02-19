declare global {
  interface Window {
    ElectronAPI?: {
      addEventListener: (event: string, callback: (data: string) => void) => void
    }
  }
}

export {}
