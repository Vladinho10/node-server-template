'use strict';
const { oftenUseCodes } = require('../constants/general');

function respond(req, res, next) {
    for (const code in oftenUseCodes) {
        res[code] = function (data) {
            return res
                .status(oftenUseCodes[code])
                .send(data);
        };
    }

    next();
}

module.exports = respond;
