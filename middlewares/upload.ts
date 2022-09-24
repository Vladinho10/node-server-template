import multer from 'multer';

import { strings } from '../helpers';
import { uploads } from '../configs';

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
