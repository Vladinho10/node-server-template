'use strict';

const userRt = require('express').Router();

const { UserController } = require('../controllers');

userRt.get('/v1/users', UserController.actionReadAll);
userRt.get('/v1/users/:_id', UserController.actionReadOne);
userRt.post('/v1/users', UserController.actionCreate);
userRt.post('/v1/users/many', UserController.actionCreateMany);
userRt.put('/v1/users/:_id', UserController.actionUpdateOne);
userRt.delete('/v1/users/:_id', UserController.actionDeleteOne);
userRt.patch('/v1/users', UserController.actionDeleteAll);

module.exports = userRt;
