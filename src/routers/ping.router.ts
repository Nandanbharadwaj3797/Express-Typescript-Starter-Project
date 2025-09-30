import express,{NextFunction, Request, Response} from 'express';

import { pingHandler } from '../controllers/ping.controller';

const pingRouter = express.Router();

function middleware1(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware 1 executed');
    next(); // call the next middleware or route handler
}

function middleware2(req: Request, res: Response, next: NextFunction) {
    console.log('Middleware 2 executed');
    next(); // call the next middleware or route handler
}

pingRouter.get('/ping', middleware1, middleware2, pingHandler);   // middleware1 ---> middleware2 ---> pingHandler

export default pingRouter;
