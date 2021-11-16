/**
 * Error handler middleware
 */


import type { ErrorRequestHandler } from 'express';


/**
 * 
 * @param err 
 * @param req 
 * @param res 
 * @param next 
 */
const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    const { statusCode, message } = err;
    res.status(statusCode).json({
        status: 'error',
        statusCode,
        message,
        url: req.url
    });
};

export default errorHandler;
