import * as express from 'express';

import { UserCtrl } from '../controllers';

const userRt = express.Router();

userRt.get('/v1/users/ejs', UserCtrl.showEjs);
userRt.get('/v1/users/:_id', UserCtrl.getOne);
userRt.get('/v1/users', UserCtrl.getMany);
userRt.post('/v1/users', UserCtrl.post);
userRt.put('/v1/users/:_id', UserCtrl.putOne);
userRt.put('/v1/users/', UserCtrl.putMany);
userRt.delete('/v1/users/:_id', UserCtrl.removeOne);
userRt.patch('/v1/users', UserCtrl.removeMany);

export { userRt };
