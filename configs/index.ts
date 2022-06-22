'use strict';
const rootPath = process.cwd();
// require('dotenv-flow').config({ path: `${rootPath}/envs` });
// require('./logger-config');
import 'dotenv-flow/config';
import './logger-config';

const db = {
    url: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
};
const port = process.env.PORT;
const jwtSecret = `${process.env.JWT_SECRET}`;
const files = `${rootPath}/files`;
const uploads = `${rootPath}/uploads`;
const mailOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT, // 587, 465
    secure: true,
    tls: {
        rejectUnauthorized: false,
    },
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAIL_PASS}`,
    },
};

export {
    db,
    port,
    files,
    uploads,
    jwtSecret,
    mailOptions,
};
