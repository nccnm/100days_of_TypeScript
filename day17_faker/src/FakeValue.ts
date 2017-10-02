import template = require('lodash/template');

export default class FakeValue {
    private _compiled: any;

    public format: string;
    public value: any;

    constructor() { }

    toString(): string {
        if (!this.format) {
            return this.value;
        }

        this._compiled = template(this.format);

        return this._compiled(this.value);
    }
}