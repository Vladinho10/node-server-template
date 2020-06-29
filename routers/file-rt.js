'use strict';
const FileRt = require('express').Router();

const { FileCtrl } = require('../controllers');

FileRt.get('/v1/files/download/:fileName', FileCtrl.download);
FileRt.post('/v1/files/upload/', FileCtrl.upload);

module.exports = FileRt;
