
import * as express from 'express';
const RootRt = express.Router();
import { RootCtrl } from '../controllers/root-ctrl';

RootRt.get('/v1/', RootCtrl.getMany);
RootRt.post('/v1/', RootCtrl.post);

RootRt.get('/', RootCtrl.showEjs);

export { RootRt };
