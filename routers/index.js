'use strict';

const indexRouter = require('express').Router();
const express = require('express');
const morgan = require('morgan');

const SwaggerRouter = require('./swagger-rt');
const RootRouter = require('./root-rt');
const UserRouter = require('./user-rt');
const respond = require('../middlewares/respond');
const errorHandler = require('../middlewares/errorHandler');

//  TODO see and setup morgan config
indexRouter.use(morgan('combined'));
indexRouter.use(express.json());
// TODO error Handler
indexRouter.use((err, req, res, next) => {
    console.log(err);
    res.send(err);
    next(err);
});
indexRouter.use(respond);
indexRouter.use(SwaggerRouter);
indexRouter.use(RootRouter);
indexRouter.use(UserRouter);

module.exports = indexRouter;
