/* eslint-disable import/first  */
import http from 'http';

import { Server } from 'socket.io';
import express from 'express';
import log4js from 'log4js';
import mongoose from 'mongoose';

const app = express();
const server = http.createServer(app);
globalThis.io = new Server(server);

// eslint-disable-next-line
import { CustomError } from './services';
globalThis.CustomError = CustomError;
import { db, files, port } from './configs';
import routers from './routers';

const logger = log4js.getLogger('ENTRY.index');

mongoose.set('strictQuery', false);
(async () => await mongoose.connect(db.uri))()
    .catch(err => logger.error({ err }));

// you can specify a path `${origin}/yourPath` or by default it's `${origin}`
app.use(express.static(files));
app.use('/', routers);
app.set('view engine', 'ejs'); // by default ejs files in root's 'views' directory
server.listen(port, () => logger.info(`app listen ${port} port`));
