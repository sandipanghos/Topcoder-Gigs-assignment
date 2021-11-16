/**
 * Combining all routes 
 */

import healthCheckRoute from '../routes/healthCheck';
import loginRoute from '../routes/auth';
import proxyRoute from '../routes/proxy';
import viewRoute from '../routes/view';
import logoutRoute from '../routes/logout';
import fileRoute from '../routes/file'

const routes = [healthCheckRoute, loginRoute, viewRoute, logoutRoute, proxyRoute, fileRoute];
export = routes;
