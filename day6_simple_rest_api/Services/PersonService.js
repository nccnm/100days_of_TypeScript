"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonViewModel_1 = require("../ViewModels/PersonViewModel");
class PersonService {
    constructor() {
        this.people = [
            new PersonViewModel_1.default(1, 'Sophia Richardson', 18),
            new PersonViewModel_1.default(2, 'David Degea', 26),
            new PersonViewModel_1.default(3, 'Thierry Henry', 41),
            new PersonViewModel_1.default(4, 'Harry Kane', 22),
            new PersonViewModel_1.default(5, 'Alexis Sanchez', 28),
            new PersonViewModel_1.default(6, 'Granit Xhake', 25)
        ];
    }
    getAll() {
        return this.people;
    }
    getById(id) {
        return this.people.find(person => person.id === id);
    }
    create(person) {
        this.people.push(person);
    }
    update(person) {
        const oldPerson = this.getById(person.id);
        if (oldPerson) {
            Object.assign(oldPerson, person);
        }
    }
    delete(id) {
        const index = this.people.findIndex(person => person.id === id);
        this.people.splice(index, 1);
    }
}
exports.default = PersonService;
