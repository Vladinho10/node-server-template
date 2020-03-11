'use strict';

const app = require('express')();
const mongoose = require('mongoose');
const logger = require('log4js').getLogger('ENTRY.index');
// TODO setup the configs of app
const config = require('./config');
const _port = 4000;

try {
    (async () => await mongoose.connect(config.db.url, config.db.options))();
} catch (err) {
    logger.error(err);
}

app.use('/', require('./routers'));

app.listen(_port, () => logger.info(`app listen ${_port} port`));
