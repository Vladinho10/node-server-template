'use strict';
const rootPath = process.cwd();
require('dotenv-flow').config({ path: `${rootPath}/envs` });
require('./logger-config');

const dbOptions = {
    logging: console.log,
    operatorsAliases: 0,
    freezeTableName: true,
    dialect: 'mysql',
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
};
const port = process.env.PORT;
const jwtSecret = `${process.env.JWT_SECRET}`;
const files = `${rootPath}/files`;
const uploads = `${rootPath}/uploads`;
const mailOptions = {
    service: 'Outlook365',
    host: 'smtp.office365.com',
    // host: 'smtp-mail.outlook.com',
    // secure: true,
    port: 587, // 587, 465
    secureConnection: false,
    tls: {
        // rejectUnauthorized: false,
        ciphers: 'SSLv3',
    },
    secure: false,
    auth: {
        user: `${process.env.EMAIL}`,
        pass: `${process.env.EMAIL_PASS}`,
    },
};

module.exports = {
    dbOptions,
    port,
    files,
    uploads,
    jwtSecret,
    mailOptions,
};
