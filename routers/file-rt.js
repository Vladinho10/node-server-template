'use strict';
const FileRt = require('express').Router();

const { FileCtrl } = require('../controllers');

FileRt.get('/v1/files/download/:fileName', FileCtrl.actionDownload);
FileRt.post('/v1/files/upload/', FileCtrl.actionUpload);

module.exports = FileRt;
