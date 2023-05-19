import { Router, Request, Response } from "express";
import team from './team';
import match from './match';

const routes = Router();

routes.use("/match",match );
routes.use("/team", team);

//aceita qualquer método HTTP ou URL
routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
