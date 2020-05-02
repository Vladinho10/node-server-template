'use strict';
const RootRt = require('express').Router();

const { RootCtrl } = require('../controllers');

RootRt.get('/v1/', RootCtrl.actionReadAll);
RootRt.post('/v1/', RootCtrl.actionCreate);

module.exports = RootRt;
