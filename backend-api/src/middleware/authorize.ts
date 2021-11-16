/**
 * Check session middleware
 */

import { Response, NextFunction } from 'express';
import IRequestWithSession from '../model/IRequestWithSession';
import CustomError from './error/CustomError';

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 * @returns 
 */
const authorize = (req: IRequestWithSession, res: Response, next: NextFunction) => {
    if (!req.session.user) {
        return next(new CustomError(401, 'Please log in'));
    }
    next();
};
export default authorize;
