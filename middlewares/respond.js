'use strict';
const httpStatus = require('http-status');

const { _camelize } = require('../helpers/strings');
const { oftenUseCodes } = require('../constants/general');

function respond(req, res, next) {
    for (const code in httpStatus) {
        if (oftenUseCodes[code] === code) {
            res[_camelize(httpStatus[code])] = function (data) {
                return res.status(code).send(data);
            };
        }
    }

    next();
}

module.exports = respond;
