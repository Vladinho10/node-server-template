'use strict';
exports.__esModule = true;
exports.objects = void 0;
var pick = function (obj, fields) {
    var picked = {};
    for (var key in obj) {
        if (fields.includes(key)) {
            picked[key] = obj[key];
        }
    }
    return picked;
};
var skip = function (obj, fields) {
    var skipped = {};
    for (var key in obj) {
        if (!fields.includes(key)) {
            skipped[key] = obj[key];
        }
    }
    return skipped;
};
var isEmptyObject = function (obj) {
    return typeof obj === 'object'
    && Object.keys(obj).length === 0
    && obj.constructor === Object;
};
var isJSFileAndNotIndex = function (file) {
    return (file.slice(-3) === '.js') && (file !== 'index.ts');
};
var isTSFileAndNotIndex = function (file) {
    return (file.slice(-3) === '.ts') && (file !== 'index.ts');
};
var objects = {
    isEmptyObject,
    isJSFileAndNotIndex,
    isTSFileAndNotIndex,
    pick,
    skip,
};
exports.objects = objects;
