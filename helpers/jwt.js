'use strict';
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../configs');

const options = {
    // expiresIn: '1h',
    algorithm: 'HS256',
};

const sign = payload => typeof payload === 'string'
    ? jwt.sign(payload, jwtSecret, options)
    : jwt.sign(JSON.stringify(payload), jwtSecret, options);

const verify = token => jwt.verify(token, jwtSecret);

module.exports = {
    sign,
    verify,
};
