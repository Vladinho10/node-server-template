import log4js from 'log4js';
import { Server } from 'socket.io';
import http from 'http';
const logger = log4js.getLogger('ENTRY.index');
import express from 'express';
import mongoose from 'mongoose';
import { db, files, port } from './configs';
import routers from './routers';
const app = express();
const server = http.createServer(app);

globalThis.io = new Server(server);
import { CustomError } from './services';
globalThis.CustomError = CustomError;

(async () => await mongoose.connect(db.uri))()
    .catch(err => logger.error({ err }));

// you can specify a path `${origin}/yourPath` or by default it's `${origin}`
app.use(express.static(files));
app.use('/', routers);
app.set('view engine', 'ejs'); // by default ejs files in root's 'views' directory

server.listen(port, () => logger.info(`app listen ${port} port`));
