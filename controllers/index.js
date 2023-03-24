'use strict';
const fs = require('fs');
const { objects } = require('../helpers');
const asyncHandler = require('express-async-handler');

const controllers = {};

const asyncClass = aClass => {
    const newClass = {};
    const methods = Object.getOwnPropertyNames(aClass)
        .filter(prop => typeof aClass[prop] === 'function');

    for (const method of methods) {
        newClass[method] = asyncHandler(aClass[method]);
    }

    return newClass;
};

fs.readdirSync(__dirname)
    .forEach(file => {
        if (objects.isJSFileAndNotIndex(file)) {
            const ctrl = require(`./${file}`);

            for (const key in ctrl) {
                controllers[key] = asyncClass(ctrl[key]);
            }
        }
    });

module.exports = controllers;
