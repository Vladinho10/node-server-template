import {type} from "os";

interface errorMessagesConstants {
    INVALID_CREDENTIALS: string;
    INVALID_EMAIL: string;
    INVALID_TOKEN: string;
    MIN_LENGTH: string;
    UNAUTHORIZED: string;
    USER_IS_NOT_FOUND: string;
};

const errorMessages: errorMessagesConstants = {
    INVALID_CREDENTIALS: 'invalid_credentials',
    INVALID_EMAIL: 'invalid_email',
    INVALID_TOKEN: 'invalid_token',
    MIN_LENGTH: 'minlength',
    UNAUTHORIZED: 'unauthorized',
    USER_IS_NOT_FOUND: 'user_is_not_found',
};

export {errorMessages};
