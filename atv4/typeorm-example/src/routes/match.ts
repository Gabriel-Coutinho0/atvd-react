import { Router } from "express";
import MatchController from "../controllers/MatchController";

const routes = Router();

// routes.get('/', SpentController.list);
routes.post('/', MatchController.create);
// routes.put('/', SpentController.update);
// routes.delete('/', SpentController.delete);

export default routes;