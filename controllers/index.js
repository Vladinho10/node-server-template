'use strict';
exports.__esModule = true;
exports.controllers = void 0;
// const fs = require('fs');
// const { objects } = require('../helpers');
var asyncHandler = require('express-async-handler');
var fs = require("fs");
var helpers_1 = require("../helpers");
// import asyncHandler from 'express-async-handler';
console.log('barevv');
var controllers = {};
exports.controllers = controllers;
var asyncClass = function (aClass) {
    var newClass = {};
    var methods = Object.getOwnPropertyNames(aClass)
        .filter(function (prop) { return typeof aClass[prop] === 'function'; });
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        newClass[method] = asyncHandler(aClass[method]);
    }
    return newClass;
};
fs.readdirSync(__dirname)
    .forEach(function (file) {
    if (helpers_1.objects.isJSFileAndNotIndex(file)) {
        var ctrl = require("./".concat(file));
        for (var key in ctrl) {
            controllers[key] = asyncClass(ctrl[key]);
        }
    }
});
