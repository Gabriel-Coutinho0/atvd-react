import { Router } from "express";
import TeamController from "../controllers/TeamsController";

const routes = Router();

routes.post('/', TeamController.create);
routes.put('/', TeamController.update);
routes.delete('/', TeamController.delete);
routes.get('/', TeamController.list)
routes.get('/:term', TeamController.listByTerm)
export default routes;