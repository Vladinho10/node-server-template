'use strict';
const fs = require('fs');
const basename = require('path').basename(__filename);
const asyncHandler = require('express-async-handler');

const controllers = {};

const asyncClass = aClass => {
    const methods = Object.getOwnPropertyNames(aClass)
        .filter(prop => typeof aClass[prop] === 'function');

    for (const method of methods) {
        aClass[method] = asyncHandler(aClass[method]);
    }

    return aClass;
};

fs.readdirSync(__dirname)
    .filter(file => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
    .forEach(file => {
        const ctrl = require(`./${file}`);

        for (const key in ctrl) {
            controllers[key] = asyncClass(ctrl[key]);
        }
    });

module.exports = controllers;
