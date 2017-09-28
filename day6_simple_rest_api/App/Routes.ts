import PersonController from '../Controllers/PersonController';
import * as express from 'express';

export default class Routes {
    constructor(app: express.Application) {
        app.route('/persons')
            .get(PersonController.getAll)
            .post(PersonController.create);

        app.route('/persons/:id')
            .get(PersonController.getById)
            .put(PersonController.update)
            .delete(PersonController.delete);
    }
}