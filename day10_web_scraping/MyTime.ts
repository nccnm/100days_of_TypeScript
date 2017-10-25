import { WorkingHours } from "./WorkingHours";
import { Browser, Page } from "puppeteer";
import Configuration from "./Configuration";

const puppeteer = require("puppeteer");
const path = require("path");
const devices = require("puppeteer/DeviceDescriptors");
const iPhone = devices["iPhone 6"];

const WAIT_TIMEOUT = 3000;

export class MyTime {
    private _usernameTextInputSelector = `#j_idt8\\:username`;
    private _passwordTextInputSelector = `#j_idt8\\:password`;
    private _loginButtonSelector = `#j_idt8\\:btnLogin`;
    private _pleaseWaitSelector = "#model-progress";
    private _checkOutSelector = "#checkInOut";

    protected page: Page;

    public workingHours = new WorkingHours();

    constructor(private _browser: Browser, private _options: Configuration) {}

    async init() {
        this.page = await this._browser.newPage();
        await this.page.setViewport({ width: 1600, height: 900 });
    }

    async goToLoginPage() {
        await this.page.goto(this._options.loginUrl);
        //await this._page.waitFor(WAIT_TIMEOUT);

        const isLoginPage = await this.isLoginPage();

        if (isLoginPage) {
            await this.setUsernamePassword(this._options.username, this._options.password);
        }
    }

    async goToHomePage() {
        const isHomePage = await this.isHomePage();

        if (!isHomePage) {
            await this.page.goto(this._options.homeUrl);
            //await this._page.waitFor(WAIT_TIMEOUT);
        }
    }

    async goToWorkingHourPage() {
        const self = this;

        await this.page.goto(this._options.workingHourUrl);
        await this.page.waitForFunction(function() {
            const pleaseWaitMessage = document.querySelector("#model-progress");

            return !pleaseWaitMessage ? true : false;
        });
    }

    async getTitle() {
        return await this.page.title();
    }

    async screenshot() {
        const title = await this.getTitle();
        await this.page.screenshot({ path: path.join(__dirname, title + ".png") });
    }

    async isLoginPage() {
        const usernameInput = await this.page.$(this._usernameTextInputSelector);

        return !!usernameInput;
    }

    async isHomePage() {
        const checkOutInput = await this.page.$(this._checkOutSelector);

        return !!checkOutInput;
    }

    async setUsernamePassword(username: string, password: string) {
        await this.page.type(this._usernameTextInputSelector, username);
        await this.page.type(this._passwordTextInputSelector, password);
        await this.page.click(this._loginButtonSelector);
        await this.page.waitFor(WAIT_TIMEOUT);
    }

    async getCheckInCheckOutToday() {
        const checkInTimeInTextFormat = await this.page.evaluate(() => {
            const element = document.querySelector("#intime-value") as HTMLSpanElement;
            return element ? element.textContent : "";
        });
        const checkOutTimeInTextFormat = await this.page.evaluate(() => {
            const element = document.querySelector("#outtime-value") as HTMLSpanElement;
            return element ? element.textContent : "";
        });

        if (checkInTimeInTextFormat) {
            this.workingHours.setCheckIn(checkInTimeInTextFormat.toString());
        }

        if (checkOutTimeInTextFormat) {
            this.workingHours.setCheckOut(checkOutTimeInTextFormat.toString());
        }
    }

    async getTotalWorkingHourToday() {
        const textContent = await this.page.evaluate(() => {
            return (document.querySelector("#total-working-hours") as HTMLSpanElement).textContent;
        });

        return parseFloat(textContent.toString().split(":")[1]);
    }

    async getWorkedHoursThisMonthBeforeCheckin() {
        const workedHoursTexts = (await this.page.evaluate(() => {
            const strongElements = document.querySelectorAll(".text-danger");

            return {
                workedHoursThisMonthText: strongElements[0].textContent,
                workedDaysText: strongElements[1].textContent
            };
        })) as any;

        return {
            workedHoursThisMonth: parseFloat(workedHoursTexts.workedHoursThisMonthText.split(":")[1]),
            workedDays: parseFloat(workedHoursTexts.workedDaysText.split(":")[1])
        };
    }

    async getWorkingHours() {
        await this.goToWorkingHourPage();

        this.workingHours.workingHoursToday = (await this.getTotalWorkingHourToday()) as number;
        const workedHours = await this.getWorkedHoursThisMonthBeforeCheckin();
        this.workingHours.workedHoursThisMonth = workedHours.workedHoursThisMonth;
        this.workingHours.workedDays = workedHours.workedDays;
    }
}
