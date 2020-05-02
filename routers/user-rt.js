'use strict';
const userRt = require('express').Router();

const { UserCtrl } = require('../controllers');

userRt.get('/v1/users', UserCtrl.actionReadAll);
userRt.get('/v1/users/:_id', UserCtrl.actionReadOne);
userRt.post('/v1/users', UserCtrl.actionCreate);
userRt.post('/v1/users/many', UserCtrl.actionCreateMany);
userRt.put('/v1/users/:_id', UserCtrl.actionUpdateOne);
userRt.delete('/v1/users/:_id', UserCtrl.actionDeleteOne);
userRt.patch('/v1/users', UserCtrl.actionDeleteAll);

module.exports = userRt;
