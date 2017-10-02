import Faker = require('../src/');

test('Faker.Address.city', () => {
    const value = Faker.Address.city();

    expect(value.length).toBeGreaterThanOrEqual(3);
});