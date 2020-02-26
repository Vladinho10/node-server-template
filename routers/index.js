'use strict';

const indexRouter = require('express').Router();
const express = require('express');

const SwaggerRouter = require('./swagger-rt');
const RootRouter = require('./root-rt');
const UserRouter = require('./user-rt');

indexRouter.use(express.json());
indexRouter.use(SwaggerRouter);
indexRouter.use(RootRouter);
indexRouter.use(UserRouter);

module.exports = indexRouter;
