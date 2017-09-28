import * as express from 'express';
import {
    json,
    raw,
    text,
    urlencoded,
} from 'body-parser';
import Routes from './Routes';

export default class App {
    public express: express.Express;

    constructor() {
        this.express = express();

        this.express.use(json());
        this.express.use(raw());
        this.express.use(text());
        this.express.use(urlencoded());

        this.mountRoutes();
    }

    public start() {
        const port = process.env.PORT || 3000;

        this.express.listen(port, (err: any) => {
            if (err) {
                return console.log(err);
            }

            return console.log(`server is listening on ${port}`);
        });
    }

    private mountRoutes():void {
        const router = express.Router();

        router.get('/', (req, res) => {
            res.json({
                message: 'Open url: /persons to get all persons'
            });
        });

        this.express.use('/', router);

        new Routes(this.express);
    }
}