import jwt, { Jwt, SignOptions } from 'jsonwebtoken';

import { jwtSecret } from '../configs';

const options: Partial<SignOptions> = {
    // expiresIn: '1h',
    algorithm: 'HS256',
};

export type JwtVerifyResult = Jwt | jwt.JwtPayload | string;

export class JwtSrv {
    static sign(payload: jwt.JwtPayload): string {
        return typeof payload === 'string'
            ? jwt.sign(payload, jwtSecret, options)
            : jwt.sign(JSON.stringify(payload), jwtSecret, options);
    }

    static verify(token:string): JwtVerifyResult {
        try {
            return jwt.verify(token, jwtSecret);
        } catch (err) {
            if (err instanceof Error) {
                console.error('error message', err.message);

                return {};
            }

            console.log('error', err);
        }

        return {};
    }
}
