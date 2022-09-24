// import * as fs from 'fs';
// import { objects } from '../helpers';

import * as express from 'express';

import middlewares from '../middlewares';

import { fileRt } from './file-rt';
import { rootRt } from './root-rt';
import { userRt } from './user-rt';

const indexRouter = express.Router();
indexRouter.use(middlewares.combine);

// const files = fs.readdirSync(__dirname);
//
// async function foo(files, indexRouter) {
//     for (const file of files) {
//         if (objects.isJSFileAndNotIndex(file)) {
//             // indexRouter.use(require(`./${file}`));
//             indexRouter.use(await import(`./${file}`));
//         }
//     }
// }
//
// (async () => await foo(files, indexRouter))();

indexRouter.use(userRt);
indexRouter.use(rootRt);
indexRouter.use(fileRt);

export default indexRouter;
