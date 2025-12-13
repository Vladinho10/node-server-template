import multer from 'multer';

import { uploads } from '../configs';
import { strings } from '../helpers';

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, uploads);
    },
    filename(req, file, cb) {
        const savingFileName = strings.generateFileName(file.originalname);
        cb(null, savingFileName);
    },
});
export default multer({ storage }).single('attachment');
