/**
 * Logout controller
 * Destroy session and redirect to login.html -- route(/)
 */

import { NextFunction, Request, Response } from 'express';

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
const logout = (req: Request, res: Response, next: NextFunction) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err);
        }
        res.redirect('/');
    });
};

export default { logout };
