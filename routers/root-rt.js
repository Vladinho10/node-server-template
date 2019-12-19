'use strict';

const RootRt = require('express').Router();

const { RootController } = require('../controllers');

RootRt.get('/v1/', RootController.actionReadAll);
RootRt.post('/v1/', RootController.actionCreate);

module.exports = RootRt;
