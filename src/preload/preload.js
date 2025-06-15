// Expose a secure API to the renderer process using Electron's contextBridge

const { contextBridge, ipcRenderer } = require("electron");

// Expose the electronAPI object in the renderer process
contextBridge.exposeInMainWorld("electronAPI", {
  // Opens a folder dialog and returns the selected folder path(s)
  openFolder: async () => {
    // This will trigger the main process to open a dialog and return the result
    return await ipcRenderer.invoke("open-folder");
  },
  openProject: async (folderPath) =>
    await ipcRenderer.invoke("open-project", folderPath),
  // You can add more APIs here if needed
});
