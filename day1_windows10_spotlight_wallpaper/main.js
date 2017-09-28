"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path = require('path');
const jetpack = require('fs-jetpack');
const wallpaper = require('wallpaper');
const LOCK_SCREEN_IMAGE_LOCATION = 'C:\\Users\\nthai\\AppData\\Local\\Packages\\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\\LocalState\\Assets';
const IMAGE_FOLDER = "image";
const MAX_FILE_SIZE = 1024 * 300;
let win;
electron_1.app.setName("Set wallpaper");
electron_1.app.on('ready', () => {
    win = new electron_1.BrowserWindow({
        alwaysOnTop: true,
        focusable: true
    });
    win.loadURL(`file://${__dirname}/index.html`);
});
electron_1.ipcMain.on('loadImages', () => {
    let files = [];
    copyImages();
    files = getImages();
    win.webContents.send('displayImages', files);
});
electron_1.ipcMain.on('setBackgroundImage', (event, file) => {
    const imagePath = path.join(__dirname, IMAGE_FOLDER, file);
    wallpaper.set(imagePath);
});
function copyImages() {
    jetpack.copy(LOCK_SCREEN_IMAGE_LOCATION, IMAGE_FOLDER, { overwrite: true });
}
function getImages() {
    return jetpack
        .inspectTree(IMAGE_FOLDER)
        .children
        .filter((file) => file.size > MAX_FILE_SIZE)
        .map((file) => file.name);
}
