import { app, BrowserWindow, ipcMain } from 'electron';

const path = require('path');
const jetpack = require('fs-jetpack');
const wallpaper = require('wallpaper');

const LOCK_SCREEN_IMAGE_LOCATION = 'C:\\Users\\nthai\\AppData\\Local\\Packages\\Microsoft.Windows.ContentDeliveryManager_cw5n1h2txyewy\\LocalState\\Assets'
const IMAGE_FOLDER = "image";
const MAX_FILE_SIZE = 1024 * 300;

let win: Electron.BrowserWindow;

app.setName("Set wallpaper");

app.on('ready', () => {
    win = new BrowserWindow({
        alwaysOnTop: true,
        focusable: true
    });

    win.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on('loadImages', () => {
    let files: string[] = [];

    copyImages();
    files = getImages();
    win.webContents.send('displayImages', files);
});

ipcMain.on('setBackgroundImage', (event, file: string) => {
    const imagePath: string = path.join(__dirname, IMAGE_FOLDER, file);

    wallpaper.set(imagePath);
});

function copyImages() {
    jetpack.copy(LOCK_SCREEN_IMAGE_LOCATION, IMAGE_FOLDER, { overwrite: true });
}

function getImages(): string[] {
    return jetpack
        .inspectTree(IMAGE_FOLDER)
        .children
        .filter((file) => file.size > MAX_FILE_SIZE)
        .map((file) => file.name);
}
