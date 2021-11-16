/**
 * View controller
 * Show login.html when accessing route "/"
 * Show welcome.html when accessing route "/welcome"
 */


import { NextFunction, Request, Response } from 'express';

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
const viewLogin = (req: Request, res: Response, next: NextFunction) => {
    res.sendFile('public/index.html', { root: __dirname });
};

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
const welcome = (req: Request, res: Response, next: NextFunction) => {
    res.sendFile('public/welcome.html', { root: '.' });
};

export default { viewLogin, welcome };
