import { app, BrowserWindow, ipcMain } from "electron";
const request = require("request");
const fs = require("fs");
const path = require("path");
const wallpaper = require("wallpaper");

let win: Electron.BrowserWindow;
const localFilePath = path.join(__dirname, "images", "wallpaper.jpg");

app.setName("Wallpaper everyday");

app.on("ready", () => {
  win = new BrowserWindow();

  win.loadURL(`file://${__dirname}/index.html`);

  // Emitted when the window is closed.
  win.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

/**
 * Promise based download file method (https://ourcodeworld.com/articles/read/228/how-to-download-a-webfile-with-electron-save-it-and-show-download-progress)
 */
function downloadFile(configuration) {
  return new Promise(function(resolve, reject) {
    // Save variable to know progress
    let received_bytes = 0;
    let total_bytes = 0;

    const req = request({
      method: "GET",
      uri: configuration.remoteFile
    });

    const out = fs.createWriteStream(configuration.localFile);
    req.pipe(out);

    req.on("response", function(data) {
      // Change the total bytes value to get progress later.
      total_bytes = parseInt(data.headers["content-length"]);
    });

    // Get progress if callback exists
    if (configuration.hasOwnProperty("onProgress")) {
      req.on("data", function(chunk) {
        // Update the received bytes
        received_bytes += chunk.length;

        configuration.onProgress(received_bytes, total_bytes);
      });
    } else {
      req.on("data", function(chunk) {
        // Update the received bytes
        received_bytes += chunk.length;
      });
    }

    req.on("end", function() {
      resolve();
    });
  });
}

ipcMain.on("setWallpaper", (event, url: string) => {
  downloadFile({
    remoteFile: url,
    localFile: localFilePath
  }).then(function() {
    wallpaper.set(localFilePath);
  });
});
