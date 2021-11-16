/**
 * App config
 */

import dotenv from 'dotenv';

dotenv.config();

const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 3000;
const ENVIRONMENT = process.env.ENVIRONMENT || 'development';
const APP_PASS = process.env.APP_PASS || 'password';

const SERVER = {
    app_pass: APP_PASS,
    environment: ENVIRONMENT,
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

const config = {
    server: SERVER
};

export default config;
