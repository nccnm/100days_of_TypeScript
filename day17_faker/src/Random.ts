export class RandomOptions {
    constructor(public min: number, public max: number) { }
}

export class Random {
    constructor(private options = new RandomOptions(0, 999999)) { }

    arrayElement(arr: any) {
        return arr[this.getRandomIntInclusive(0, arr.length - 1)];
    }

    number() {
        return this.getRandomIntInclusive(this.options.min, this.options.max);
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
    private getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }
}