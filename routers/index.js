'use strict';
const fs = require('fs');
const indexRouter = require('express').Router();
const basename = require('path').basename(__filename);

const { combine, errorHandler } = require('../middlewares');

indexRouter.use(combine);

fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => indexRouter.use(require(`./${file}`)));

indexRouter.use(errorHandler);

module.exports = indexRouter;
