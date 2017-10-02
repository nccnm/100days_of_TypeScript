import * as city from './address';
import * as name from './name';

const data = {
    'name': {
        firstName: name.firstName,
        lastName: name.lastName,
        prefix: name.prefix,
        suffix: name.suffix,
        title: name.title,
        gender: name.gender
    },
    address: {
        city: {
            cityPrefix: city.cityPrefix,
            citySuffix: city.citySuffix
        }
    }
}

export default data;