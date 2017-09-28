const electron = require('electron');
const { ipcRenderer } = electron;
const list = document.querySelector('ul');

document.getElementById('loadImages').addEventListener('click', () => {
    ipcRenderer.send('loadImages');
});

ipcRenderer.on('displayImages', (event, files:string[]) => {
    files.forEach(file => {
        const li = document.createElement('li');
        const img = document.createElement("img");

        img.src = "image/" + file;
        img.height = 300;      

        img.onclick = function() {
            ipcRenderer.send('setBackgroundImage', file);
        };

        li.appendChild(img);
        list.appendChild(li);
    });
});