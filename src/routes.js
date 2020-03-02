import { Router } from 'express';

const routes = new Router();

routes.get('/', async (req, res) => res.json({ messsage: 'Hello Word' }));

export default routes;
