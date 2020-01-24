'use strict';

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const _port = 4000;
require('dotenv').config();

app.use(express.json());
const indexRouter = require('./routers');

mongoose.connect(`${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(()=>console.info('DB server connect'))
    .catch(e => console.info('DB error', e));

app.use('/', indexRouter);

app.listen(_port, () => console.log(`app listen ${_port} port`) );
