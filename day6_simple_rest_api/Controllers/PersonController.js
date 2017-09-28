"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonViewModel_1 = require("../ViewModels/PersonViewModel");
const PersonService_1 = require("../Services/PersonService");
const personService = new PersonService_1.default();
class PersonController {
    static getAll(req, res) {
        res.json(personService.getAll());
    }
    static getById(req, res) {
        res.json(personService.getById(parseInt(req.params.id)));
    }
    static create(req, res) {
        const person = new PersonViewModel_1.default(req.body.id, req.body.fullname, req.body.age);
        personService.create(person);
        res.json(person);
    }
    static update(req, res) {
        const person = new PersonViewModel_1.default(req.body.id, req.body.fullname, req.body.age);
        personService.update(person);
        res.json(person);
    }
    static delete(req, res) {
        personService.delete(parseInt(req.params.id));
        res.json({ message: 'Person successfully deleted' });
    }
}
exports.default = PersonController;
