'use strict';
const RootRt = require('express').Router();

const { RootCtrl } = require('../controllers');

RootRt.get('/v1/', RootCtrl.getMany);
RootRt.post('/v1/', RootCtrl.post);

RootRt.get('/', RootCtrl.showEjs);

module.exports = RootRt;
