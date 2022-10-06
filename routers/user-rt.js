'use strict';
const userRt = require('express').Router();
const userMiddleware = require('../middlewares/auth');
const hasAccess = require('../middlewares/hasAccess');
const { UserCtrl } = require('../controllers');
const { User } = require('../dal/models');

userRt.get('/v1/users/ejs', UserCtrl.showEjs);
userRt.get('/v1/users/:_id', UserCtrl.getOne);
userRt.get('/v1/users', UserCtrl.getMany);
userRt.post('/v1/users', UserCtrl.post);
userRt.put('/v1/users/:_id', userMiddleware(), hasAccess(User, 'id'), UserCtrl.putOne);
userRt.put('/v1/users/', UserCtrl.putMany);
userRt.delete('/v1/users/:_id', userMiddleware, UserCtrl.removeOne);
userRt.patch('/v1/users', UserCtrl.removeMany);

module.exports = userRt;
