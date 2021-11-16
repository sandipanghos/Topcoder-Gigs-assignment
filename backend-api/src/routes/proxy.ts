/**
 * Proxy route
 */


import express from 'express';
import controller from '../controllers/proxy';
import authorize from '../middleware/authorize';

const router = express.Router();

router.get(['/api/proxy', '/api/proxy/**'], authorize, controller.apiProxy);
router.get(['/pub/proxy', '/pub/proxy/**'], authorize, controller.pubProxy);

export = router;
