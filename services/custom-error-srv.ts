export class CustomError extends Error {
    type: string;
    field: string;

    constructor(errorObject: { message: string; type: string; field: string }) {
        // Only pass the message string to Error constructor
        super(errorObject.message);

        // Maintains proper stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

        this.name = 'CustomError';
        this.type = errorObject.type;
        this.field = errorObject.field;
    }
}
