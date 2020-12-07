'use strict';
const logger = require('log4js').getLogger('ENTRY.index');
const express = require('express');
const mongoose = require('mongoose');
const configs = require('./configs');
const app = express();
const server = require('http').createServer(app);
global.io = require('socket.io')(server);
global.CustomError = require('./services').CustomError;
const { port } = configs;

(async () => await mongoose.connect(configs.db.url, configs.db.options))()
    .catch(err => logger.error({ err }));

// you can specify a path `${origin}/yourPath` or by default it's `${origin}`
app.use(express.static(configs.files));
app.use('/', require('./routers'));
app.set('view engine', 'ejs'); // by default ejs files in root's 'views' directory

server.listen(port, () => logger.info(`app listen ${port} port`));
