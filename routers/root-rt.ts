import * as express from 'express';

import { RootCtrl } from '../controllers';

const rootRt = express.Router();

rootRt.get('/v1/', RootCtrl.getMany);
rootRt.post('/v1/', RootCtrl.post);

rootRt.get('/', RootCtrl.showEjs);

export { rootRt };
