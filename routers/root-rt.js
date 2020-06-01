'use strict';
const RootRt = require('express').Router();

const { RootCtrl } = require('../controllers');

RootRt.get('/v1/', RootCtrl.readAll);
RootRt.post('/v1/', RootCtrl.create);

module.exports = RootRt;
