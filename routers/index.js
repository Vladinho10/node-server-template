'use strict';
const fs = require('fs');
const { objects } = require('../helpers');
const indexRouter = require('express').Router();

const { combine, errorHandler } = require('../middlewares');

indexRouter.use(combine);

fs.readdirSync(__dirname)
    .forEach(file => {
        if (objects.isJSFileAndNotIndex(file)) {
            indexRouter.use(require(`./${file}`));
        }
    });

indexRouter.use(errorHandler);

module.exports = indexRouter;
