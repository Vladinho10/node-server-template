import * as express from 'express';

import { FileCtrl } from '../controllers';

const fileRt = express.Router();

fileRt.get('/v1/files/download/:fileName', FileCtrl.download);
fileRt.post('/v1/files/upload/', FileCtrl.upload);

export { fileRt };
