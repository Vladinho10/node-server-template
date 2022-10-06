'use strict';
const postsRt = require('express').Router();
const userMiddleware = require('../middlewares/auth');
const hasAccess = require('../middlewares/hasAccess');
const { PostsCtrl } = require('../controllers');
const { Posts } = require('../dal/models');

postsRt.post('/v1/posts', userMiddleware(), PostsCtrl.post);
postsRt.put('/v1/posts/:_id', userMiddleware(), hasAccess(Posts, 'userId'), PostsCtrl.putOne);

module.exports = postsRt;

