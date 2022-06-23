'use strict';
exports.__esModule = true;
exports.mailOptions = exports.uploads = exports.files = exports.jwtSecret = exports.port = exports.db = void 0;
var rootPath = process.cwd();
var dotEnvConfig = require("dotenv-flow");
dotEnvConfig.config({ path: "".concat(rootPath, "/envs") });
require("./logger-config");
exports.db = {
    url: "".concat(process.env.DB_HOST, ":").concat(process.env.DB_PORT, "/").concat(process.env.DB_NAME)
};
exports.port = process.env.PORT;
exports.jwtSecret = "".concat(process.env.JWT_SECRET);
exports.files = "".concat(rootPath, "/files");
exports.uploads = "".concat(rootPath, "/uploads");
exports.mailOptions = {
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
console.log({
    db: exports.db,
    port: exports.port,
    files: exports.files,
    uploads: exports.uploads,
    jwtSecret: exports.jwtSecret,
    mailOptions: exports.mailOptions
});
exports["default"] = {
    db: exports.db,
    port: exports.port,
    files: exports.files,
    uploads: exports.uploads,
    jwtSecret: exports.jwtSecret,
    mailOptions: exports.mailOptions
};
