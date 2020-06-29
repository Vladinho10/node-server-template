'use strict';
const userRt = require('express').Router();

const { UserCtrl } = require('../controllers');

userRt.get('/v1/users/:_id', UserCtrl.getOne);
userRt.get('/v1/users', UserCtrl.getMany);
userRt.post('/v1/users', UserCtrl.post);
userRt.put('/v1/users/:_id', UserCtrl.PutOne);
userRt.put('/v1/users/', UserCtrl.PutMany);
userRt.delete('/v1/users/:_id', UserCtrl.removeOne);
userRt.patch('/v1/users', UserCtrl.removeMany);

module.exports = userRt;
