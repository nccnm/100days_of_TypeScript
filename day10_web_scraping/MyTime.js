"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var WorkingHours_1 = require("./WorkingHours");
var puppeteer = require("puppeteer");
var path = require("path");
var devices = require("puppeteer/DeviceDescriptors");
var iPhone = devices["iPhone 6"];
var WAIT_TIMEOUT = 3000;
var MyTime = /** @class */ (function () {
    function MyTime(_browser, _options) {
        this._browser = _browser;
        this._options = _options;
        this._usernameTextInputSelector = "#j_idt8\\:username";
        this._passwordTextInputSelector = "#j_idt8\\:password";
        this._loginButtonSelector = "#j_idt8\\:btnLogin";
        this._pleaseWaitSelector = "#model-progress";
        this._checkOutSelector = "#checkInOut";
        this.workingHours = new WorkingHours_1.WorkingHours();
    }
    MyTime.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._browser.newPage()];
                    case 1:
                        _a.page = _b.sent();
                        return [4 /*yield*/, this.page.setViewport({ width: 1600, height: 900 })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTime.prototype.goToLoginPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isLoginPage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.goto(this._options.loginUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.isLoginPage()];
                    case 2:
                        isLoginPage = _a.sent();
                        if (!isLoginPage) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.setUsernamePassword(this._options.username, this._options.password)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MyTime.prototype.goToHomePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var isHomePage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.isHomePage()];
                    case 1:
                        isHomePage = _a.sent();
                        if (!!isHomePage) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.page.goto(this._options.homeUrl)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MyTime.prototype.goToWorkingHourPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var self;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        self = this;
                        return [4 /*yield*/, this.page.goto(this._options.workingHourUrl)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.page.waitForFunction(function () {
                                var pleaseWaitMessage = document.querySelector("#model-progress");
                                return !pleaseWaitMessage ? true : false;
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTime.prototype.getTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.title()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MyTime.prototype.screenshot = function () {
        return __awaiter(this, void 0, void 0, function () {
            var title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getTitle()];
                    case 1:
                        title = _a.sent();
                        return [4 /*yield*/, this.page.screenshot({ path: path.join(__dirname, title + ".png") })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTime.prototype.isLoginPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usernameInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.$(this._usernameTextInputSelector)];
                    case 1:
                        usernameInput = _a.sent();
                        return [2 /*return*/, !!usernameInput];
                }
            });
        });
    };
    MyTime.prototype.isHomePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var checkOutInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.$(this._checkOutSelector)];
                    case 1:
                        checkOutInput = _a.sent();
                        return [2 /*return*/, !!checkOutInput];
                }
            });
        });
    };
    MyTime.prototype.setUsernamePassword = function (username, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.type(this._usernameTextInputSelector, username)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.page.type(this._passwordTextInputSelector, password)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.page.click(this._loginButtonSelector)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.page.waitFor(WAIT_TIMEOUT)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTime.prototype.getCheckInCheckOutToday = function () {
        return __awaiter(this, void 0, void 0, function () {
            var checkInTimeInTextFormat, checkOutTimeInTextFormat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () {
                            var element = document.querySelector("#intime-value");
                            return element ? element.textContent : "";
                        })];
                    case 1:
                        checkInTimeInTextFormat = _a.sent();
                        return [4 /*yield*/, this.page.evaluate(function () {
                                var element = document.querySelector("#outtime-value");
                                return element ? element.textContent : "";
                            })];
                    case 2:
                        checkOutTimeInTextFormat = _a.sent();
                        if (checkInTimeInTextFormat) {
                            this.workingHours.setCheckIn(checkInTimeInTextFormat.toString());
                        }
                        if (checkOutTimeInTextFormat) {
                            this.workingHours.setCheckOut(checkOutTimeInTextFormat.toString());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MyTime.prototype.getTotalWorkingHourToday = function () {
        return __awaiter(this, void 0, void 0, function () {
            var textContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () {
                            return document.querySelector("#total-working-hours").textContent;
                        })];
                    case 1:
                        textContent = _a.sent();
                        return [2 /*return*/, parseFloat(textContent.toString().split(":")[1])];
                }
            });
        });
    };
    MyTime.prototype.getWorkedHoursThisMonthBeforeCheckin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var workedHoursTexts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.page.evaluate(function () {
                            var strongElements = document.querySelectorAll(".text-danger");
                            return {
                                workedHoursThisMonthText: strongElements[0].textContent,
                                workedDaysText: strongElements[1].textContent
                            };
                        })];
                    case 1:
                        workedHoursTexts = (_a.sent());
                        return [2 /*return*/, {
                                workedHoursThisMonth: parseFloat(workedHoursTexts.workedHoursThisMonthText.split(":")[1]),
                                workedDays: parseFloat(workedHoursTexts.workedDaysText.split(":")[1])
                            }];
                }
            });
        });
    };
    MyTime.prototype.getWorkingHours = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, workedHours;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.goToWorkingHourPage()];
                    case 1:
                        _b.sent();
                        _a = this.workingHours;
                        return [4 /*yield*/, this.getTotalWorkingHourToday()];
                    case 2:
                        _a.workingHoursToday = (_b.sent());
                        return [4 /*yield*/, this.getWorkedHoursThisMonthBeforeCheckin()];
                    case 3:
                        workedHours = _b.sent();
                        this.workingHours.workedHoursThisMonth = workedHours.workedHoursThisMonth;
                        this.workingHours.workedDays = workedHours.workedDays;
                        return [2 /*return*/];
                }
            });
        });
    };
    return MyTime;
}());
exports.MyTime = MyTime;
//# sourceMappingURL=MyTime.js.map