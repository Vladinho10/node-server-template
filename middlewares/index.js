'use strict';
const morgan = require('morgan');
const express = require('express');
const { compose } = require('compose-middleware');
const urlencoded = express.urlencoded({ extended: false });
const json = express.json();

const auth = require('./auth');
const errorHandler = require('./error-handler');
const { uploadSingle } = require('./upload');
const respond = require('./respond');

module.exports = {
    errorHandler,
    auth,
    combine: compose([
        morgan('combined'),
        urlencoded,
        json,
        respond,
        uploadSingle,
    ]),
};

