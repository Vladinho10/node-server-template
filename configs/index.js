'use strict';
exports.__esModule = true;
exports.mailOptions = exports.jwtSecret = exports.uploads = exports.files = exports.port = exports.db = void 0;
var rootPath = process.cwd();
// require('dotenv-flow').config({ path: `${rootPath}/envs` });
// require('./logger-config');
require("dotenv-flow/config");
require("./logger-config");
var db = {
    url: "".concat(process.env.DB_HOST, ":").concat(process.env.DB_PORT, "/").concat(process.env.DB_NAME)
};
exports.db = db;
var port = process.env.PORT;
exports.port = port;
var jwtSecret = "".concat(process.env.JWT_SECRET);
exports.jwtSecret = jwtSecret;
var files = "".concat(rootPath, "/files");
exports.files = files;
var uploads = "".concat(rootPath, "/uploads");
exports.uploads = uploads;
var mailOptions = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    tls: {
        rejectUnauthorized: false
    },
    auth: {
        user: "".concat(process.env.EMAIL),
        pass: "".concat(process.env.EMAIL_PASS)
    }
};
exports.mailOptions = mailOptions;
