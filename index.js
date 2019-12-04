const mongoose = require('mongoose');
const express = require('express');
const app = express();
const _port = 3000;

app.use(express.json());
const indexRouter = require('./Routers');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/', indexRouter);

app.listen(_port, () => console.log(`app listen ${_port} port`) );
