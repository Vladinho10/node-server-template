'use strict';
const fs = require('fs');
const morgan = require('morgan');
const express = require('express');
const indexRouter = express.Router();
const basename = require('path').basename(__filename);

const respond = require('../middlewares/respond');
const errorHandler = require('../middlewares/errorHandler');

//  TODO see and setup morgan config
indexRouter.use(morgan('combined'));
indexRouter.use(express.json());
indexRouter.use(respond);

fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => indexRouter.use(require(`./${file}`)));

indexRouter.use(errorHandler);

module.exports = indexRouter;
