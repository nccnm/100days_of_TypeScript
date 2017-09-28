"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PersonController_1 = require("../Controllers/PersonController");
class Routes {
    constructor(app) {
        app.route('/persons')
            .get(PersonController_1.default.getAll)
            .post(PersonController_1.default.create);
        app.route('/persons/:id')
            .get(PersonController_1.default.getById)
            .put(PersonController_1.default.update)
            .delete(PersonController_1.default.delete);
    }
}
exports.default = Routes;
