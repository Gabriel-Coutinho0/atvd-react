import { Router } from "express";
import TeamController from "../controllers/TeamsController";

const routes = Router();

routes.post('/create', TeamController.create);
routes.put('/update', TeamController.update);
routes.delete('/delete', TeamController.delete);

export default routes;