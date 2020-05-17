'use strict';
const jwt = require('jsonwebtoken');

const secret = 'mySecret';
const options = {
    // expiresIn: '1h',
    algorithm: 'HS256'
};

const sign = payload => typeof payload === 'string'
    ? jwt.sign(payload, secret, options)
    : jwt.sign(JSON.stringify(payload), secret, options);

const verify = token => jwt.verify(token, secret);

module.exports = {
    sign,
    verify
};
