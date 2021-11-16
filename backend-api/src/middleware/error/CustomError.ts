/**
 * Custom error class
 */

class CustomError extends Error {
    statusCode: number;

    message: string;

    constructor(statusCode: number, message: string) {
        // Pass remaining arguments (including vendor specific ones) to parent constructor
        super();

        // Maintains proper stack trace for where our error was thrown (only available on V8)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError);
        }

        this.name = 'CustomError';
        // Custom debugging information
        this.statusCode = statusCode;
        this.message = message;
    }
}

export default CustomError;
