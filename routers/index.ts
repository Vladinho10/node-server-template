import * as fs from 'fs';
import { objects } from '../helpers';
import * as express from 'express';
const indexRouter = express.Router();
import { combine, errorHandler } from '../middlewares/index';

indexRouter.use(combine);

fs.readdirSync(__dirname)
    .forEach(file => {
        if (objects.isJSFileAndNotIndex(file)) {
            indexRouter.use(require(`./${file}`));
        }
    });

indexRouter.use(errorHandler);

module.exports = indexRouter;
