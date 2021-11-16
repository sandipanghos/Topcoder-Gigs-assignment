/**
 * Proxy Controller
 * Private route 
 */

import { NextFunction, Response } from 'express';
import IRequestWithSession from '../model/IRequestWithSession';

const content = (req: IRequestWithSession, res: Response) => `<h1>${req.session.user.username} you are in the url - ${req.url}
and Session id is ${req.sessionID} </h1>
<a href="/welcome">back</a>`;

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 * @returns html resopnse
 */
const apiProxy = (req: IRequestWithSession, res: Response, next: NextFunction) => {
    return res.send(content(req, res));
};


/**
 * 
 * @param req 
 * @param res 
 * @param next 
 * @returns html resopnse
 */
const pubProxy = (req: IRequestWithSession, res: Response, next: NextFunction) => {
    return res.send(content(req, res));
};

export default { apiProxy, pubProxy };
