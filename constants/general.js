'use strict';
exports.__esModule = true;
exports.general = void 0;
// const httpStatus = require('http-status');
var httpStatus = require("http-status");
var oftenUseCodes = {
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
    internalServerError: httpStatus.INTERNAL_SERVER_ERROR
};
var general = {
    oftenUseCodes: oftenUseCodes
};
exports.general = general;
