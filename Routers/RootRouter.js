const express = require('express');
const RootRouter = express.Router();
const { RootController } = require('../Controllers');


RootRouter.get('/', RootController.actionReadAll);
RootRouter.post('/', RootController.actionCreate);

module.exports = RootRouter;