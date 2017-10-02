import Address from './address';
import Name from './name';

export = class Faker {
    public static Locale = 'en';

    static Address = new Address(Faker.Locale);
    static Name = new Name(Faker.Locale);
}