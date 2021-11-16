/**
 * Health check controller
 */

import { NextFunction, Request, Response } from 'express';


/**
 * 
 * @param req 
 * @param res 
 * @param next 
 * @returns json {message: 'health ok'}
 */
const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
        message: 'health ok'
    });
};

export default { serverHealthCheck };
