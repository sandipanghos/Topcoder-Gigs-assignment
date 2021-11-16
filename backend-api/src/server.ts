/**
 * App Server
 */

import express from 'express';
import logging from './config/logging';
import config from './config/config';
import errorHandler from './middleware/error/errorMiddleware';
import routes from './routes/index';
import session from 'express-session';

const NAMESPACE = 'Server';
const app = express();

/** Log the request */
app.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** static content */
app.use(express.static('public'));

/** Parse the body of the request */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** Rules of our API */
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Session Options */

const sessionOptions = {
    secret: 'myscret',
    saveUninitialized: false,
    cookie: {
        maxAge: 360000,
        secure: false
    },
    resave: false
};

if (config.server.environment === 'production') {
    sessionOptions.cookie.secure = true;
}

/** set up session */
app.use(session(sessionOptions));

/** Render Login page */
app.use('/', routes);

/** Error handling */
app.use(errorHandler);

app.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
