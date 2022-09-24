import { general } from '../constants';

import Express, { Send, Response } from 'express';

export type CustomResponse = Response & {
    created?: Send;
    accepted?: Send;
    noContent?: Send;
    badRequest?: Send;
    unauthorized?: Send;
    paymentRequired?: Send;
    forbidden?: Send;
    notFound?: Send;
    unsupportedMediaType?: Send;
    unprocessableEntity?: Send;
    internalServerError?: Send;
}

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
