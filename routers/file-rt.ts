import * as express from 'express';

import { FileCtrl } from '../controllers';

const router = express.Router();

router.get('/v1/files/download/:fileName', FileCtrl.download);
router.post('/v1/files/upload/', FileCtrl.upload);

export { router };
