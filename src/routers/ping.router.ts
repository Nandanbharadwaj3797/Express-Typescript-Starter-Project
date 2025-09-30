import express,{NextFunction, Request, Response} from 'express';

import { pingHandler } from '../controllers/ping.controller';

const pingRouter = express.Router();


pingRouter.get('/ping', pingHandler);   // middleware1 ---> middleware2 ---> pingHandler

export default pingRouter;
