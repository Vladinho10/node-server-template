
import * as express from 'express';
const rootRt = express.Router();
import { RootCtrl } from '../controllers';

rootRt.get('/v1/', RootCtrl.getMany);
rootRt.post('/v1/', RootCtrl.post);

rootRt.get('/', RootCtrl.showEjs);

export { rootRt };
