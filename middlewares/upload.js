'use strict';
const multer = require('multer');

const { strings } = require('../helpers');
const config = require('../config');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, config.uploads);
    },
    filename(req, file, cb) {
        const savingFileName = strings._generateFileName(file.originalname);
        cb(null, savingFileName);
    }
});

module.exports = {
    uploadSingle: multer({ storage }).single('attachment')
};
