'use strict';
const rootPath = process.cwd();
// require('dotenv-flow').config({ path: `${rootPath}/envs` });
// require('./logger-config');
import 'dotenv-flow/config';
import './logger-config';

export const db = {
    url: `${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
};
export const port = process.env.PORT;
export const jwtSecret = `${process.env.JWT_SECRET}`;
export const files = `${rootPath}/files`;
export const uploads = `${rootPath}/uploads`;
export const mailOptions = {
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

// export default {
//     db,
//     port,
//     files,
//     uploads,
//     jwtSecret,
//     mailOptions,
// };
