import * as express from 'express';

import { UserCtrl } from '../controllers';

const router = express.Router();

router.get('/v1/users/ejs', UserCtrl.showEjs);
router.get('/v1/users/:_id', UserCtrl.getOne);
router.get('/v1/users', UserCtrl.getMany);
router.post('/v1/users', UserCtrl.post);
router.put('/v1/users/:_id', UserCtrl.putOne);
router.put('/v1/users/', UserCtrl.putMany);
router.delete('/v1/users/:_id', UserCtrl.removeOne);
router.patch('/v1/users', UserCtrl.removeMany);

export { router };
