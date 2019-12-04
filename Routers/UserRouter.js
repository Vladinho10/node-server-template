const express = require('express');
const userRouter = express.Router();
const { UserController } = require('../Controllers');


userRouter.get('/users', UserController.actionReadAll);
userRouter.get('/users/:_id', UserController.actionReadOne);
userRouter.post('/users', UserController.actionCreate);
userRouter.put('/users/:_id', UserController.actionUpdateOne);
userRouter.delete('/users/:_id', UserController.actionDeleteOne);

module.exports = userRouter;