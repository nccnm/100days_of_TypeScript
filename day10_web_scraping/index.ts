import { MyTime } from "./MyTime";
import { Browser } from "puppeteer";
import Configuration from "./Configuration";

const puppeteer = require("puppeteer");
const config: Configuration = require("./config.json");

class App {
    private _browser: Browser;

    constructor(private _config: Configuration) {}

    async run() {
        await this.launch();

        const myTime = new MyTime(this._browser, this._config);
        await myTime.init();
        await myTime.goToLoginPage();
        await myTime.goToHomePage();

        myTime.getCheckInCheckOutToday();

        await myTime.getWorkingHours();

        const report = myTime.workingHours.generateReportText();
        console.log(report);

        await this.close();
    }

    async launch() {
        this._browser = await puppeteer.launch();
    }

    async close() {
        await this._browser.close();
    }
}

(async () => {
    try {
        const app = new App(config);

        await app.run();
    } catch (ex) {
        console.log(ex);
    }
})();
