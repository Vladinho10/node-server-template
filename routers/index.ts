// import * as fs from 'fs';
// import { objects } from '../helpers';
import * as express from 'express';
const indexRouter = express.Router();
import middlewares from '../middlewares/index';

indexRouter.use(middlewares.combine);

// fs.readdirSync(__dirname)
//     .forEach(file => {
//         if (objects.isJSFileAndNotIndex(file)) {
//             indexRouter.use(require(`./${file}`));
//         }
//     });

import { userRt } from './user-rt';
import { rootRt } from './root-rt';
import { fileRt } from './file-rt';
indexRouter.use(userRt);
indexRouter.use(rootRt);
indexRouter.use(fileRt);

export default indexRouter;
