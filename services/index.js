'use strict';
const { CustomError } = require('./custon-error-srv');
const { EmailSendSrv } = require('./email-send-srv');
const { JwtSrv } = require('./jwt-srv');
const { UserSrv } = require('./user-srv');
const { PostsSrv } = require('./posts-srv');

module.exports = {
    CustomError,
    EmailSendSrv,
    JwtSrv,
    UserSrv,
    PostsSrv,
};
