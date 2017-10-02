import FakeValue from './FakeValue';

export class BaseGenerator {
    protected fakeValue = new FakeValue();

    constructor() {}

    protected generateSimpleValue(value: string) {
        this.resetFakeValue();
        this.fakeValue.value = value;

        return this.fakeValue.toString();
    }

    protected resetFakeValue() {
        this.fakeValue.value = null;
        this.fakeValue.format = '';
    }
}