import * as express from 'express';
import PersonViewModel from '../ViewModels/PersonViewModel';
import PersonSevice from '../Services/PersonService';

const personService = new PersonSevice();

export default class PersonController {
    static getAll(req: express.Request, res: express.Response) {
        res.json(personService.getAll());
    }

    static getById(req: express.Request, res: express.Response) {
        res.json(personService.getById(parseInt(req.params.id)));
    }

    static create(req: express.Request, res: express.Response) {
        const person = new PersonViewModel(req.body.id, req.body.fullname, req.body.age);

        personService.create(person);

        res.json(person);
    }

    static update(req: express.Request, res: express.Response) {
        const person = new PersonViewModel(req.body.id, req.body.fullname, req.body.age);

        personService.update(person);

        res.json(person);
    }

    static delete(req: express.Request, res: express.Response) {
        personService.delete(parseInt(req.params.id));

        res.json({ message: 'Person successfully deleted' });
    }
}