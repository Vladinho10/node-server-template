'use strict';
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logger = require('log4js').getLogger('ENTRY.index');
// TODO setup the configs of app
const configs = require('./configs');
const _port = 4000;

try {
    (async () => await mongoose.connect(configs.db.url, configs.db.options))();
} catch (err) {
    logger.error(err);
}

app.use('/v1', express.static(configs.files));
app.use('/', require('./routers'));

app.listen(_port, () => logger.info(`app listen ${_port} port`));
