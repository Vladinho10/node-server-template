'use strict';
// const morgan = require('morgan');
// const express = require('express');
// const { compose } = require('compose-middleware');
// const urlencoded = express.urlencoded({ extended: false });
// const json = express.json();
import morgan from 'morgan';
import * as express from 'express';
import { compose } from 'compose-middleware';
const urlencoded = express.urlencoded({ extended: false });
const json = express.json();

console.log('morgan', morgan);
console.log('express', express);
console.log('compose', compose);


const errorHandler = require('./error-handler');
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
    ]),
};

