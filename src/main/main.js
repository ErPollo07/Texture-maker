const { app, BrowserWindow } = require("electron");
const path = require("path");
const { crash } = require("process");

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

app.on('ready', () => {
  createWindow();
});
