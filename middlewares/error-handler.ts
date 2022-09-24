import { general } from '../constants';

import { CustomResponse } from './respond';

export default function (err, req: Request, res: CustomResponse, next) {
    globalThis.logger.error({ errMessage: err.message });
    if (err) {
        const errorResponse = [];
        const errors  = typeof err === 'string' ? err : err.errors;
        // logger.error(err.message);
        if (err.name === 'CustomError') {
            errorResponse.push({
                field: err.field,
                message: err.message,
            });
        } else {
            err.type = 'unprocessableEntity';

            if (err.name === 'ValidationError') {
                for (const item in errors) {
                    const error = errors[item];
                    let message;

                    if (error.kind === 'user defined') {
                        ({ message } = error);
                    } else {
                        message = error.kind;
                    }

                    errorResponse.push({
                        field: error.path,
                        message,
                    });
                }
            }

            if (err.name === 'MongoError') {
                const [, field = ''] = err.message.split('index: ');
                const [, message = ''] = err.message.split(err.code);

                if (field && message) {
                    errorResponse.push({
                        field: field.slice(0, field.lastIndexOf('_')),
                        message: message.slice(0, message.lastIndexOf('error')).trim(),
                    });
                }
            }

            if (err.name === 'MulterError') {
                errorResponse.push({
                    field: err.field,
                    message: err.message,
                });
            }
        }

        return  Object.keys(general.oftenUseCodes).includes(err.type) && errorResponse.length > 0
            ? res[err.type]({ errors: errorResponse })
            : res.internalServerError({ errors: [{ message: 'Something went wrong' }] });
    }

    next();
}
