'use strict';
const logger = require('log4js').getLogger('err.handler');

// eslint-disable-next-line no-unused-vars
module.exports = function (err, req, res, next) {
    if (err) {
        const errorResponse = [];
        const { errors } = err;
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
                    message: `err_${message}`
                });
            }
        }

        if (err.name === 'MongoError') {
            const [, field] = err.message.split('index: ');
            const [, message] = err.message.split(err.code);

            errorResponse.push({
                field: field.slice(0, field.lastIndexOf('_')),
                message: message.slice(0, message.lastIndexOf('error')).trim()
            });
        }

        if (err.name === 'MulterError') {
            errorResponse.push({
                field: err.field,
                message: err.message
            });
        }

        logger.error(err.message);

        return errorResponse.length
            ? res.unprocessableEntity({ err: errorResponse })
            : res.internalServerError({ err: { message: 'Something went wrong' } });
    }
};
