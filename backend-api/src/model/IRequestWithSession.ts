/**
 * Modified Request Interface
 */

import { Request } from 'express';

export default interface IRequestWithSession extends Request {
    session: any;
}
