/**
 * Auth controller
 * validate username and password from /data/user.ts and app_pass in config.ts
 * add user object to the req.session
 */


import { NextFunction, Response } from 'express';
import { USERS } from '../../data/user';
import config from '../config/config';
import CustomError from '../middleware/error/CustomError';
import IRequestWithSession from '../model/IRequestWithSession';


/**
 * 
 * @param req : IRequestWithSession
 * @param res : Response
 * @param next : NextFunction
 * @returns redirect to /welcome
 */
const login = (req: IRequestWithSession, res: Response, next: NextFunction) => {
    if (!req.body.username || !req.body.password) {
        return next(new CustomError(401, 'Useername or password missing'));
    }
    const user = USERS.find((user) => user.username === req.body.username);
    if (user?.username !== req.body.username && config.server.app_pass !== req.body.password) {
        return next(new CustomError(401, 'Authentication Failed. Wrong password/username'));
    }
    req.session.user = {
        username: user?.username
    };
    res.redirect('/welcome');
};

export default { login };
