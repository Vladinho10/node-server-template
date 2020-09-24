'use strict';
const { oftenUseCodes } = require('../constants/general');

const respond = (req, res, next) => {
    for (const message in oftenUseCodes) {
        res[message] = function (data) {
            return res
                .status(oftenUseCodes[message])
                .send(data);
        };
    }

    next();
};

module.exports = respond;
