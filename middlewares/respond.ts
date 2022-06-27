'use strict';
// const { general: { oftenUseCodes } } = require('../constants');
import { general } from '../constants';

const respond = (req, res, next) => {
    for (const message in general.oftenUseCodes) {
        res[message] = function (data) {
            return res
                .status(general.oftenUseCodes[message])
                .send(data);
        };
    }

    next();
};

export { respond };
