'use strict';
const httpStatus = require('http-status');
const statuses = {};
const oftenUseCodes = {
    200: '200',
    201: '201',
    202: '202',
    204: '204',
    400: '400',
    401: '401',
    402: '402',
    403: '403',
    404: '404',
    415: '415',
    422: '422',

};

for (const key in httpStatus) {
    if (oftenUseCodes[key] === key) {
        statuses[oftenUseCodes[key]] = httpStatus[key];
    }
}

const camelize = str => str.toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => +match !== 0 ? index === 0 ? match.toLowerCase() : match.toUpperCase() : '');

function generate(statuses, res) {
    const obj = {};

    for (const code in statuses) {
        obj[camelize(statuses[code])] = function (data) {
            return res.status(code).send(data);
        };
    }

    return obj;
}

function respond(req, res, next) {
    const obj = generate(statuses, res);

    for (const key in obj) {
        res[key] = obj[key];
    }

    next();
}

module.exports = respond;
