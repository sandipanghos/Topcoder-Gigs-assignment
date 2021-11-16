/**
 * Logut route
 */

import express from 'express';
import controller from '../controllers/logout';

const router = express.Router();

router.get('/logout', controller.logout);

export = router;
