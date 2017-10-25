"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TOTAL_WORKING_HOURS_PER_DAY = 8;
var LUNCHTIME = 1.5;
var WorkingHours = /** @class */ (function () {
    function WorkingHours() {
    }
    WorkingHours.prototype.isCheckIn = function () {
        return !!this.checkInTimeToday;
    };
    WorkingHours.prototype.isCheckOut = function () {
        return !!this.checkOutTimeToday;
    };
    WorkingHours.prototype.isWorkingHoursEnoughThisMonth = function () {
        return this.workedHoursThisMonth / this.workedDays >= TOTAL_WORKING_HOURS_PER_DAY;
    };
    WorkingHours.prototype.isWorkingHoursEnoughToday = function () {
        return this.workingHoursToday >= TOTAL_WORKING_HOURS_PER_DAY;
    };
    WorkingHours.prototype.isWorkingHoursEnoughUntilNow = function (workingHours) { };
    WorkingHours.prototype.calculateLackOfHoursToday = function () {
        return TOTAL_WORKING_HOURS_PER_DAY - this.workingHoursToday;
    };
    WorkingHours.prototype.setCheckIn = function (timeInTextFormat) {
        this.checkInTimeToday = this.setTimeFromTextFormat(timeInTextFormat);
    };
    WorkingHours.prototype.setCheckOut = function (timeInTextFormat) {
        this.checkOutTimeToday = this.setTimeFromTextFormat(timeInTextFormat);
    };
    WorkingHours.prototype.setTimeFromTextFormat = function (timeInTextFormat) {
        var date = new Date();
        if (timeInTextFormat) {
            var time = timeInTextFormat.split(":");
            date.setHours(parseInt(time[0]));
            date.setMinutes(parseInt(time[1]));
            return date;
        }
        return undefined;
    };
    WorkingHours.prototype.whenIShouldCheckOut = function () {
        var checkIn = this.checkInTimeToday;
        var workedHoursInMiliseconds = checkIn.valueOf() + (TOTAL_WORKING_HOURS_PER_DAY + LUNCHTIME) * 60 * 60 * 1000;
        return new Date(workedHoursInMiliseconds);
    };
    WorkingHours.prototype.getWorkedHoursUntilNow = function () {
        var now = new Date();
        var diff = now.valueOf() - this.checkInTimeToday.valueOf();
        return (diff / 1000 / 60 / 60 - LUNCHTIME).toFixed(2); // Convert milliseconds to hours
    };
    WorkingHours.prototype.generateReportText = function () {
        var reportTexts = [];
        reportTexts.push(this._generateReportAboutToday());
        reportTexts.push(this._generateReportAboutThisMonth());
        return reportTexts.join("\n");
    };
    WorkingHours.prototype._generateReportAboutThisMonth = function () {
        var reportTexts = [];
        reportTexts.push("----------------- THIS MONTH -----------------");
        if (!this.isWorkingHoursEnoughThisMonth()) {
            reportTexts.push("Average worked hours is not enough for this month!");
        }
        else {
            if (!this.isCheckOut()) {
                reportTexts.push("You have not check out yet. But before you check out, the average worked hours is enough for this month.");
            }
            else {
                reportTexts.push("The average worked hours is enough for this month.");
            }
        }
        reportTexts.push("");
        return reportTexts.join("\n");
    };
    WorkingHours.prototype._generateReportAboutToday = function () {
        var reportTexts = [];
        reportTexts.push("----------------- TODAY -----------------");
        if (this.isCheckIn()) {
            reportTexts.push("You checked in " + this.checkInTimeToday.toLocaleTimeString() + ".");
        }
        if (this.isCheckOut()) {
            reportTexts.push("You checked in " + this.checkOutTimeToday.toLocaleTimeString() + ".");
        }
        if (!this.isWorkingHoursEnoughToday()) {
            var lackHours = this.calculateLackOfHoursToday().toFixed(2);
            reportTexts.push("Worked hours is not enough for today!");
            if (this.isCheckIn()) {
                reportTexts.push("Your worked hours is " + this.getWorkedHoursUntilNow() + ".");
            }
            reportTexts.push("Until now, you lacks " + lackHours + " hours!");
            if (this.isCheckIn() && !this.isCheckOut()) {
                reportTexts.push("You should check out at " + this.whenIShouldCheckOut().toLocaleTimeString() + ".");
            }
        }
        reportTexts.push("");
        return reportTexts.join("\n");
    };
    return WorkingHours;
}());
exports.WorkingHours = WorkingHours;
//# sourceMappingURL=WorkingHours.js.map