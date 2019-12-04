const express = require('express');
const indexRouter = express.Router();

const RootRouter = require('./RootRouter');
const UserRouter = require('./UserRouter');

indexRouter.use(RootRouter);
indexRouter.use(UserRouter);

module.exports = indexRouter;