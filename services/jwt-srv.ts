import jwt from 'jsonwebtoken';

import { jwtSecret } from '../configs';

const options = {
    // expiresIn: '1h',
    algorithm: 'HS256',
};

export class JwtSrv {
    static sign(payload) {
        return typeof payload === 'string'
            ? jwt.sign(payload, jwtSecret, options)
            : jwt.sign(JSON.stringify(payload), jwtSecret, options);
    }

    static verify(token) {
        try {
            return jwt.verify(token, jwtSecret);
        } catch (err) {
            // logger.error({ errMessage: err.message });
        }

        return {};
    }
}
