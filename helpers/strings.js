'use strict';
exports.__esModule = true;
exports.strings = void 0;
var crypto = require('crypto');
var toPascalCase = function (str) {
    return str[0].toUpperCase() + str.slice(1);
};
var toCamelCase = function (str) {
    var words = str.split(/\W/g).filter(Boolean);
    var newStr = '';
    for (var i in words) {
        if (i === '0') {
            newStr += words[i];
        } else {
            newStr += toPascalCase(words[i]);
        }
    }
    return newStr;
};
var randomString = function (size) {
    if (size === void 0) {
        size = 32;
    }
    return crypto.randomBytes(size).toString('hex');
};
var generateFileName = function (originalName) {
    return ''.concat(new Date().toISOString(), '_').concat(originalName);
};
var strings = {
    toCamelCase,
    generateFileName,
    randomString,
};
exports.strings = strings;
