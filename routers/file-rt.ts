
import * as express from 'express';
import { FileCtrl } from '../controllers/file-ctrl';
const FileRt = express.Router();

FileRt.get('/v1/files/download/:fileName', FileCtrl.download);
FileRt.post('/v1/files/upload/', FileCtrl.upload);

export { FileRt };
