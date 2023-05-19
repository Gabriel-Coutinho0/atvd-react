import { Router } from "express";
import MatchController from "../controllers/MatchController";

const routes = Router();

routes.get('/', MatchController.list);
routes.get('/:id', MatchController.listById);
routes.post('/', MatchController.create);
routes.put('/', MatchController.update);
routes.delete('/', MatchController.delete);

export default routes;