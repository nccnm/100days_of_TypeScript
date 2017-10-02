import { Random } from '../Random';
import { BaseGenerator } from '../BaseGenerator';
import FakeValue from '../FakeValue';
import locale from '../locales';

export default class Address extends BaseGenerator {
    private _firstNameData: string[];
    private _lastNameData: string[];
    private _cityPrefixData: string[];
    private _citySuffixData: string[];

    private _cityFormats: string[];
    private _random = new Random();

    constructor(locate: string) {
        super();
        this._firstNameData = locale.en.data.name.firstName;
        this._lastNameData = locale.en.data.name.lastName;
        this._cityPrefixData = locale.en.data.address.city.cityPrefix;
        this._citySuffixData = locale.en.data.address.city.citySuffix;

        this._cityFormats = locale.en.formats.address.city.formats;
    }

    city() {
        const value = {
            cityPrefix: this._random.arrayElement(this._cityPrefixData),
            citySuffix: this._random.arrayElement(this._citySuffixData),
            name: {
                firstName: this._random.arrayElement(this._firstNameData),
                lastName: this._random.arrayElement(this._lastNameData)
            }
        };

        this.resetFakeValue();

        this.fakeValue.format = this._random.arrayElement(this._cityFormats);
        this.fakeValue.value = value;

        return this.fakeValue.toString();
    }
}