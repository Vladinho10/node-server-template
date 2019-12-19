'use strict';

const indexRouter = require('express').Router();

const SwaggerRouter = require('./swagger-rt');
const RootRouter = require('./root-rt');
const UserRouter = require('./user-rt');

indexRouter.use(SwaggerRouter);
indexRouter.use(RootRouter);
indexRouter.use(UserRouter);

module.exports = indexRouter;
