
/**
 * File route
 * Read and Write to id.json
 */

import express from 'express';
import controller from '../controllers/file';
import authorize from '../middleware/authorize';

const router = express.Router();

router.post('/save/:id',authorize, controller.saveFile);

router.get('/save/:id',authorize, controller.readFile);


export = router;
