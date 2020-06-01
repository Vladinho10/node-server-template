'use strict';
const userRt = require('express').Router();

const { UserCtrl } = require('../controllers');

userRt.get('/v1/users', UserCtrl.readAll);
userRt.get('/v1/users/:_id', UserCtrl.readOne);
userRt.post('/v1/users', UserCtrl.create);
userRt.post('/v1/users/many', UserCtrl.createMany);
userRt.put('/v1/users/:_id', UserCtrl.updateOne);
userRt.delete('/v1/users/:_id', UserCtrl.deleteOne);
userRt.patch('/v1/users', UserCtrl.deleteAll);

module.exports = userRt;
