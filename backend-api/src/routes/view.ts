/**
 * View route
 */

import express from 'express';
import controller from '../controllers/view';
import authorize from '../middleware/authorize';

const router = express.Router();

router.get('/welcome', authorize, controller.welcome);

router.get('/', controller.viewLogin);

export = router;
