import * as httpStatus from 'http-status';

interface oftenUseCodesGeneral{
    ok:number,
    created:number,
    accepted:number,
    noContent:number,
    badRequest:number,
    unauthorized:number,
    paymentRequired:number,
    forbidden: number,
    notFound: number,
    unsupportedMediaType: number,
    unprocessableEntity: number,
    internalServerError:number,
};

const oftenUseCodes: oftenUseCodesGeneral= {
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
const general = {
    oftenUseCodes,
};

export { general };
