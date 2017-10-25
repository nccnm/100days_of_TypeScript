const TOTAL_WORKING_HOURS_PER_DAY = 8;
const LUNCHTIME = 1.5;

export class WorkingHours {
    checkInTimeToday?: Date;
    checkOutTimeToday?: Date;
    workingHoursToday?: number;
    workedHoursThisMonth: number;
    workedDays: number;

    isCheckIn() {
        return !!this.checkInTimeToday;
    }

    isCheckOut() {
        return !!this.checkOutTimeToday;
    }

    isWorkingHoursEnoughThisMonth() {
        return this.workedHoursThisMonth / this.workedDays >= TOTAL_WORKING_HOURS_PER_DAY;
    }

    isWorkingHoursEnoughToday() {
        return (this.workingHoursToday as number) >= TOTAL_WORKING_HOURS_PER_DAY;
    }

    isWorkingHoursEnoughUntilNow(workingHours: WorkingHours) {}

    calculateLackOfHoursToday() {
        return TOTAL_WORKING_HOURS_PER_DAY - (this.workingHoursToday as number);
    }

    setCheckIn(timeInTextFormat: string) {
        this.checkInTimeToday = this.setTimeFromTextFormat(timeInTextFormat);
    }

    setCheckOut(timeInTextFormat: string) {
        this.checkOutTimeToday = this.setTimeFromTextFormat(timeInTextFormat);
    }

    setTimeFromTextFormat(timeInTextFormat: string) {
        const date = new Date();

        if (timeInTextFormat) {
            const time = timeInTextFormat.split(":");
            date.setHours(parseInt(time[0]));
            date.setMinutes(parseInt(time[1]));

            return date;
        }

        return undefined;
    }

    whenIShouldCheckOut() {
        const checkIn = this.checkInTimeToday as Date;
        const workedHoursInMiliseconds = checkIn.valueOf() + (TOTAL_WORKING_HOURS_PER_DAY + LUNCHTIME) * 60 * 60 * 1000;

        return new Date(workedHoursInMiliseconds);
    }

    getWorkedHoursUntilNow() {
        const now = new Date();
        const diff = now.valueOf() - (this.checkInTimeToday as Date).valueOf();

        return (diff / 1000 / 60 / 60 - LUNCHTIME).toFixed(2); // Convert milliseconds to hours
    }

    generateReportText() {
        const reportTexts: string[] = [];

        reportTexts.push(this._generateReportAboutToday());

        reportTexts.push(this._generateReportAboutThisMonth());

        return reportTexts.join("\n");
    }

    private _generateReportAboutThisMonth() {
        const reportTexts: string[] = [];

        reportTexts.push("----------------- THIS MONTH -----------------");

        if (!this.isWorkingHoursEnoughThisMonth()) {
            reportTexts.push("Average worked hours is not enough for this month!");
        } else {
            if (!this.isCheckOut()) {
                reportTexts.push("You have not check out yet. But before you check out, the average worked hours is enough for this month.");
            } else {
                reportTexts.push("The average worked hours is enough for this month.");
            }
        }

        reportTexts.push("");

        return reportTexts.join("\n");
    }

    private _generateReportAboutToday() {
        const reportTexts: string[] = [];

        reportTexts.push("----------------- TODAY -----------------");

        if (this.isCheckIn()) {
            reportTexts.push(`You checked in ${(this.checkInTimeToday as Date).toLocaleTimeString()}.`);
        }

        if (this.isCheckOut()) {
            reportTexts.push(`You checked in ${(this.checkOutTimeToday as Date).toLocaleTimeString()}.`);
        }

        if (!this.isWorkingHoursEnoughToday()) {
            const lackHours = this.calculateLackOfHoursToday().toFixed(2);

            reportTexts.push("Worked hours is not enough for today!");

            if (this.isCheckIn()) {
                reportTexts.push(`Your worked hours is ${this.getWorkedHoursUntilNow()}.`);
            }

            reportTexts.push(`Until now, you lacks ${lackHours} hours!`);

            if (this.isCheckIn() && !this.isCheckOut()) {
                reportTexts.push(`You should check out at ${this.whenIShouldCheckOut().toLocaleTimeString()}.`);
            }
        }

        reportTexts.push("");

        return reportTexts.join("\n");
    }
}
