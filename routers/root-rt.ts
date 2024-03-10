import * as express from 'express';

import { RootCtrl } from '../controllers';

const router = express.Router();

router.get('/v1/', RootCtrl.getMany);
router.post('/v1/', RootCtrl.post);

router.get('/', RootCtrl.showEjs);

export { router };
