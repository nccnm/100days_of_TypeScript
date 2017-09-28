import PersonViewModel from '../ViewModels/PersonViewModel';

export default class PersonService {
    private people: PersonViewModel[];

    constructor() {
        this.people = [
            new PersonViewModel(1, 'Sophia Richardson', 18),
            new PersonViewModel(2, 'David Degea', 26),
            new PersonViewModel(3, 'Thierry Henry', 41),
            new PersonViewModel(4, 'Harry Kane', 22),
            new PersonViewModel(5, 'Alexis Sanchez', 28),
            new PersonViewModel(6, 'Granit Xhake', 25)
        ];
    }

    getAll() {
        return this.people;
    }

    getById(id: Number) {
        return this.people.find(person => person.id === id);
    }

    create(person: PersonViewModel) {
        this.people.push(person);
    }

    update(person: PersonViewModel) {
        const oldPerson = this.getById(person.id);

        if (oldPerson) {
            Object.assign(oldPerson, person);
        }
    }

    delete(id: Number) {
        const index = this.people.findIndex(person => person.id === id);

        this.people.splice(index, 1);
    }
}