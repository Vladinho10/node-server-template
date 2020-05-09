'use strict';
const morgan = require('morgan');
const express = require('express');
const { compose } = require('compose-middleware');
const urlencoded = express.urlencoded({ extended: false });
const json = express.json();

const errorHandler = require('./errorHandler');
const { uploadSingle } = require('./upload');
const respond = require('./respond');

module.exports = {
    errorHandler,
    combine: compose([
        morgan('combined'),
        urlencoded,
        json,
        respond,
        uploadSingle,
    ])
};

