import { extname } from 'path';
import fs from 'fs';

import * as express from 'express';

import { objects } from '../helpers';
import middlewares from '../middlewares';

const ext = extname(__filename);

const indexRouter = express.Router();
indexRouter.use(middlewares.combine);
fs.readdirSync(__dirname)
    .filter(file => objects.isNotIndex(file, ext))
    .forEach(file => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { router } = require(`./${file}`);
        indexRouter.use(router);
    });

export default indexRouter;
