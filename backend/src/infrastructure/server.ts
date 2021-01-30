import "reflect-metadata";
import express = require('express');
import http = require('http');
import helmet = require('helmet');
import bodyParser = require('body-parser');
import logger = require("./config/logger");
import cors = require('cors');

const app = express();
const Router = express.Router();

export class ServerExpress {

    constructor(routes: any, port: string) {

        app.use(helmet());
        app.use(bodyParser.json());
        app.use(cors());

        app.use((req, res, next) => {
            logger.info(`${req.method}:${req.path}`);
            next();
        });

        app.use(routes);

        http.createServer(app).listen(port);
        logger.info(`listening in port ${port}`);
    }
}

export const router = Router;

