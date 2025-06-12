const { app, BrowserWindow } = require("electron");
const path = require("path");
const { ipcMain, dialog } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "../preload/preload.js"),
    },
  });

  win.loadFile(path.join(__dirname, "../render/index.html").toString());
}

ipcMain.handle("open-folder", async () => {
  const result = await dialog.showOpenDialog({
    properties: ["openDirectory"],
  });
  return result;
});

app.on("ready", () => {
  createWindow();
});
