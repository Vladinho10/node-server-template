'use strict';
const rootPath = process.cwd();
require('dotenv-flow').config({ path: `${rootPath}/envs` });
require('./loggerConfig');

const db = {
    url: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    },
};
const port = process.env.PORT;
const jwtSecret = `${process.env.JWT_SECRET}`;
const files = `${rootPath}/files`;
const uploads = `${rootPath}/uploads`;
const mailOptions = {
    host: 'smtp.gmail.com',
    port: 465, // 587, 465
    secure: true,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAIL_PASS}`,
    },
};

module.exports = {
    db,
    port,
    files,
    uploads,
    jwtSecret,
    mailOptions,
};
