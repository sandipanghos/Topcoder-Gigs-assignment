/**
 * File controller
 * Read and write json file from /data folder
 */

import { NextFunction, Request, Response } from 'express';
import jsonfile from 'jsonfile';
import CustomError from '../middleware/error/CustomError';

const dataPath = "./data/"

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
const saveFile = (req: Request, res: Response, next: NextFunction) => {
    jsonfile.writeFile(`${dataPath}${req.params.id}.json`,req.body)
    .then(obj => res.status(200).json({
        message: "Data successfully written in file ",
        content: obj
    }))
    .catch(error => next(new CustomError(500,"Error writing file")))
};

/**
 * 
 * @param req 
 * @param res 
 * @param next 
 */
const readFile = (req: Request, res: Response, next: NextFunction) => {
    jsonfile.readFile(`${dataPath}${req.params.id}.json`)
    .then(obj => res.status(200).json({
        message: "File successfully read ",
        content: obj
    }))
    .catch(error => next(new CustomError(500,"Error reading file")))
};

export default { saveFile, readFile };
