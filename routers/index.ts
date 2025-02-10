import { extname } from 'path';
import fs from 'fs';

import * as express from 'express';

import { objects } from '../helpers';
import middlewares from '../middlewares';

const ext = extname(__filename);

const indexRouter = express.Router();
indexRouter.use(middlewares.combine);
Promise.all(fs.readdirSync(__dirname)
    .filter(file => objects.isNotIndex(file, ext))
    .map(async file => {
        const { router } = await import(`./${file}`);
        indexRouter.use(router);
    }));

export default indexRouter;
