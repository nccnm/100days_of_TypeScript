import Faker = require('../src/');

test('Faker.Name.firstName', () => {
    const value = Faker.Name.firstName();

    expect(value.length).toBeGreaterThanOrEqual(3);
});

test('Faker.Name.lastName', () => {
    const value = Faker.Name.lastName();

    expect(value.length).toBeGreaterThanOrEqual(3);
});

test('Faker.Name.findName', () => {
    const value = Faker.Name.findName();

    expect(value.length).toBeGreaterThanOrEqual(3);
});

test('Faker.Name.gender', () => {
    const value = Faker.Name.gender();

    expect(value.length).toBeGreaterThanOrEqual(3);
});

test('Faker.Name.title', () => {
    const value = Faker.Name.title();

    expect(value.length).toBeGreaterThanOrEqual(3);
});

test('Faker.Name.jobDescriptor', () => {
    const value = Faker.Name.jobDescriptor();

    expect(value.length).toBeGreaterThanOrEqual(3);
});

test('Faker.Name.jobArea', () => {
    const value = Faker.Name.jobArea();

    expect(value.length).toBeGreaterThanOrEqual(3);
});

test('Faker.Name.jobType', () => {
    const value = Faker.Name.jobType();

    expect(value.length).toBeGreaterThanOrEqual(3);
});