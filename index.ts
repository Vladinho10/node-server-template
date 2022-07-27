import log4js from 'log4js';
import socketIo from 'socket.io';
import http from 'http';
const logger = log4js.getLogger('ENTRY.index');
import express from 'express';
import mongoose from 'mongoose';
const { db, port } = require('./configs');
const app = express();
const server = http.createServer(app);
// @ts-ignore
global.io = socketIo(server);
// @ts-ignore
// global.CustomError = require('./services').CustomError;

(async () => await mongoose.connect(db.url))()
    .catch(err => logger.error({ err }));

// you can specify a path `${origin}/yourPath` or by default it's `${origin}`
// app.use(express.static(configs.files));
app.use('/', require('./routers'));
app.set('view engine', 'ejs'); // by default ejs files in root's 'views' directory

server.listen(port, () => logger.info(`app listen ${port} port`));
