import * as httpStatus from 'http-status';

const oftenUseCodes = {
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
const general = {
    oftenUseCodes,
};

export { general };
