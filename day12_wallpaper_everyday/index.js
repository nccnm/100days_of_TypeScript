const electron = require("electron");
const { ipcRenderer } = electron;
class Wallpaper {
    getImages(page) {
        const index = page <= 1 ? 1 : page * 8;
        return fetch(`http://www.bing.com/HPImageArchive.aspx?format=js&idx=${index}&n=8`)
            .then(function (response) {
            return response.json();
        })
            .catch(function (err) {
            console.log("Fetch Error :-S", err);
        });
    }
    setWallpaper(url) {
        ipcRenderer.send("setWallpaper", url);
    }
}
class App {
    constructor() {
        this._wallpaper = new Wallpaper();
        this._LIST_IMAGES_ID = "images";
        this._currentPage = 1;
        this._currentImageUrl = "";
    }
    run() {
        this.displayImages(this._currentPage);
        document.getElementById("next").addEventListener("click", this.next.bind(this));
        document.getElementById("previous").addEventListener("click", this.previous.bind(this));
        document.getElementById("setWallpaper").addEventListener("click", () => {
            if (this._currentImageUrl.length > 0) {
                this._wallpaper.setWallpaper(this._currentImageUrl);
            }
        });
    }
    next() {
        if (this._currentPage === 2) {
            return;
        }
        this._currentPage = this._currentPage + 1;
        this.displayImages(this._currentPage);
    }
    previous() {
        if (this._currentPage === 1) {
            return;
        }
        this._currentPage = this._currentPage - 1;
        this.displayImages(this._currentPage);
    }
    displayImages(page) {
        this._wallpaper.getImages(page).then(result => {
            this._currentImageUrl = `http://www.bing.com/${result.images[0].url}`;
            this.showImage(this._currentImageUrl);
            this.appendImages(result.images);
        });
    }
    showImage(imageUrl) {
        document.body.style.backgroundImage = `url('${imageUrl}')`;
    }
    appendImages(images) {
        const listImagesElement = document.getElementById(this._LIST_IMAGES_ID);
        while (listImagesElement.hasChildNodes()) {
            listImagesElement.removeChild(listImagesElement.firstChild);
        }
        images.forEach(image => {
            const imgElement = document.createElement("img");
            imgElement.src = `http://www.bing.com/${image.url}`;
            imgElement.onclick = () => {
                this._currentImageUrl = imgElement.src;
                this.showImage(this._currentImageUrl);
            };
            listImagesElement.appendChild(imgElement);
        });
    }
}
window.onload = () => {
    const app = new App().run();
};
