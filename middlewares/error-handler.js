'use strict';
exports.__esModule = true;
// const { general: { oftenUseCodes } } = require('../constants');
var general_1 = require("../constants/general");
console.log('general', general_1.general);
// eslint-disable-next-line no-unused-vars
function default_1(err, req, res, next) {
    // logger.error({ errMessage: err.message });
    if (err) {
        var errorResponse = [];
        var errors = typeof err === 'string' ? err : err.errors;
        // logger.error(err.message);
        if (err.name === 'CustomError') {
            errorResponse.push({
                field: err.field,
                message: err.message
            });
        }
        else {
            err.type = 'unprocessableEntity';
            if (err.name === 'ValidationError') {
                for (var item in errors) {
                    var error = errors[item];
                    var message = void 0;
                    if (error.kind === 'user defined') {
                        (message = error.message);
                    }
                    else {
                        message = error.kind;
                    }
                    errorResponse.push({
                        field: error.path,
                        message: message
                    });
                }
            }
            if (err.name === 'MongoError') {
                var _a = err.message.split('index: '), _b = _a[1], field = _b === void 0 ? '' : _b;
                var _c = err.message.split(err.code), _d = _c[1], message = _d === void 0 ? '' : _d;
                if (field && message) {
                    errorResponse.push({
                        field: field.slice(0, field.lastIndexOf('_')),
                        message: message.slice(0, message.lastIndexOf('error')).trim()
                    });
                }
            }
            if (err.name === 'MulterError') {
                errorResponse.push({
                    field: err.field,
                    message: err.message
                });
            }
        }
        return Object.keys(general_1.general.oftenUseCodes).includes(err.type) && errorResponse.length > 0
            ? res[err.type]({ errors: errorResponse })
            : res.internalServerError({ errors: [{ message: 'Something went wrong' }] });
    }
}
exports["default"] = default_1;
;
