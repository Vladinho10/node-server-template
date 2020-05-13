'use strict';
const multer = require('multer');

const { strings } = require('../helpers');
const configs = require('../configs');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, configs.uploads);
    },
    filename(req, file, cb) {
        const savingFileName = strings._generateFileName(file.originalname);
        cb(null, savingFileName);
    }
});

module.exports = {
    uploadSingle: multer({ storage }).single('attachment')
};
