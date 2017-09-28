"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const body_parser_1 = require("body-parser");
const Routes_1 = require("./Routes");
class App {
    constructor() {
        this.express = express();
        this.express.use(body_parser_1.json());
        this.express.use(body_parser_1.raw());
        this.express.use(body_parser_1.text());
        this.express.use(body_parser_1.urlencoded());
        this.mountRoutes();
    }
    start() {
        const port = process.env.PORT || 3000;
        this.express.listen(port, (err) => {
            if (err) {
                return console.log(err);
            }
            return console.log(`server is listening on ${port}`);
        });
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.json({
                message: 'Open url: /persons to get all persons'
            });
        });
        this.express.use('/', router);
        new Routes_1.default(this.express);
    }
}
exports.default = App;
