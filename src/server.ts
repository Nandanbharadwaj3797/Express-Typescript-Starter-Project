import express from 'express';
import pingRouter from './routers/ping.router';
const {serverConfig} = require('./config');



const app = express();


/**
 * Registering all the routers and their corresponding routes with out app server object.
 */

app.use( pingRouter);  // http://localhost:3000/ping

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    console.log(`Press Ctrl+C to stop the server`);
});