'use strict';
exports.__esModule = true;
exports.errorMessages = exports.general = void 0;
// module.exports = require('../barrelExport')(__dirname);
var error_messages_1 = require("./error-messages");
exports.errorMessages = error_messages_1["default"];
var general_1 = require("./general");
exports.general = general_1["default"];
console.log(general_1["default"].oftenUseCodes.unauthorized);
