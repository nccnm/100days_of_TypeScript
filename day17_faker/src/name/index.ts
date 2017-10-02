import { Random } from '../Random';
import { BaseGenerator } from '../BaseGenerator';
import FakeValue from '../FakeValue';
import locale from '../locales';

export default class Name extends BaseGenerator {
    private _firstNameData: string[];
    private _lastNameData: string[];
    private _prefixData: string[];
    private _suffixData: string[];
    private _titleData: any;
    private _genderData: string[];

    private _findNameFormats: string[];
    private _random = new Random();

    constructor(locate: string) {
        super();
        this._firstNameData = locale.en.data.name.firstName;
        this._lastNameData = locale.en.data.name.lastName;
        this._prefixData = locale.en.data.name.prefix;
        this._suffixData = locale.en.data.name.suffix;
        this._titleData = locale.en.data.name.title;
        this._genderData = locale.en.data.name.gender;

        this._findNameFormats = locale.en.formats.name.findName.formats;
    }

    firstName() {
        return this.generateSimpleValue(this._random.arrayElement(this._firstNameData));
    }

    lastName() {
        return this.generateSimpleValue(this._random.arrayElement(this._lastNameData));
    }

    findName() {
        const value = {
            firstName: this._random.arrayElement(this._firstNameData),
            lastName: this._random.arrayElement(this._lastNameData),
            prefix: this._random.arrayElement(this._prefixData),
            suffix: this._random.arrayElement(this._suffixData)
        };

        this.resetFakeValue();

        this.fakeValue.format = this._random.arrayElement(this._findNameFormats);
        this.fakeValue.value = value;

        return this.fakeValue.toString();
    }

    gender() {
        return this.generateSimpleValue(this._random.arrayElement(this._genderData));
    }

    prefix() {
        return this.generateSimpleValue(this._random.arrayElement(this._prefixData));
    }

    suffix() {
        return this.generateSimpleValue(this._random.arrayElement(this._suffixData));
    }

    title() {
        const descriptor = this.generateSimpleValue(this._random.arrayElement(this._titleData.descriptor));
        const level = this.generateSimpleValue(this._random.arrayElement(this._titleData.level));
        const job = this.generateSimpleValue(this._random.arrayElement(this._titleData.job));

        return [descriptor, level, job].join(' ');
    }

    jobDescriptor() {
        return this.generateSimpleValue(this._random.arrayElement(this._titleData.descriptor));
    }

    jobArea() {
        return this.generateSimpleValue(this._random.arrayElement(this._titleData.level));
    }

    jobType() {
        return this.generateSimpleValue(this._random.arrayElement(this._titleData.job));
    }
}