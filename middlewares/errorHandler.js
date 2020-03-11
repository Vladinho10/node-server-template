'use strict';
// TODO
module.exports = function (err, req, res, next) {
    // if (err) {
    //     const errors = [];
    //
    //     if (err.name === 'ValidationError') {
    //         for (const error of err.errors) {
    //             let message;
    //
    //             if (error.kind === 'user defined') {
    //                 ({ message } = error);
    //             } else {
    //                 message = error.kind;
    //             }
    //
    //             errors.push({
    //                 field: error.path,
    //                 message
    //             });
    //         }
    //     }
    //
    //     if (err.name === 'MongoError') {
    //         // const field = _split(err.message, 'index: ')[1];
    //         // const message = _split(err.message, err.code)[1];
    //
    //         const field = err.message.split('index: ')[1];
    //         const message = err.message.split(err.code)[1];
    //
    //         errors.push({
    //             field: field.slice(0, field.lastIndexOf('_')),
    //             message: message.slice(0, message.lastIndexOf('error')).trim()
    //         });
    //     }
    //
    //     res.send({ errors });
    // }

    console.log(err);

    return next(err);
};
