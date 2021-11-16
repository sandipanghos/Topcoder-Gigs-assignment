
/**
 * Health Check route
 */

import express from 'express';
import controller from '../controllers/healthCheck';

const router = express.Router();

router.get('/healthCheck', controller.serverHealthCheck);

export = router;
