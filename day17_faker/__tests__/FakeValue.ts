import Faker from '../src/';
import FakeValue from '../src/FakeValue';

test('format value', () => {
    const fakeValue = new FakeValue();

    fakeValue.format = 'hello <%= user %>!';
    fakeValue.value = { 'user': 'fred' };

    expect(fakeValue.toString()).toBe('hello fred!');
});

test('not format value', () => {
    const fakeValue = new FakeValue();

    fakeValue.format = '';
    fakeValue.value = 'hello fred!';

    expect(fakeValue.toString()).toBe('hello fred!');
});