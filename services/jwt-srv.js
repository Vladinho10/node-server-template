'use strict';
const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../configs');

const options = {
    // expiresIn: '1h',
    algorithm: 'HS256',
};

class JwtSrv {
    static sign(payload) {
        return typeof payload === 'string'
            ? jwt.sign(payload, jwtSecret, options)
            : jwt.sign(JSON.stringify(payload), jwtSecret, options);
    }

    static verify(token) {
        try {
            return jwt.verify(token, jwtSecret);
        } catch (err) {
            logger.error({ errMessage: err.message });
        }

        return {};
    }
}

module.exports = {
    JwtSrv,
};
