// const { general: { oftenUseCodes } } = require('../constants');
import { general } from '../constants';
import Express from "express";

const respond = (req:Express.Request, res:Express.Response, next:Express.NextFunction) => {
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
