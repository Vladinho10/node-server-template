'use strict';
const httpStatus = require('http-status');

const oftenUseCodes = {
    ok: httpStatus.OK,
    created: httpStatus.CREATED,
    accepted: httpStatus.ACCEPTED,
    noContent: httpStatus.NO_CONTENT,
    badRequest: httpStatus.BAD_REQUEST,
    unauthorized: httpStatus.UNAUTHORIZED,
    paymentRequired: httpStatus.PAYMENT_REQUIRED,
    forbidden: httpStatus.FORBIDDEN,
    notFound: httpStatus.NOT_FOUND,
    unsupportedMediaType: httpStatus.UNSUPPORTED_MEDIA_TYPE,
    unprocessableEntity: httpStatus.UNPROCESSABLE_ENTITY,
    internalServerError: httpStatus.INTERNAL_SERVER_ERROR,
};

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
