'use strict';
require('dotenv').config();
require('../loggerConfig');

const db = {
    url: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
};

const files = `${process.cwd()}/files`;
const uploads = `${process.cwd()}/uploads`;
const mailOptions = {
    host: 'smtp.gmail.com',
    port: 465, // 587, 465
    secure: true,
    auth: {
        user: 'jsandnodefamily@gmail.com',
        pass: 'no9de3js'
    },
};
module.exports = {
    db,
    files,
    uploads,
    mailOptions
};
