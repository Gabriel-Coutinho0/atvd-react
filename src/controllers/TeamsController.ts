import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { ILike } from "typeorm"
import { Team } from '../entities/Teams';

class TeamsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    //verifica se foram fornecidos os parâmetros
    if (!name || name.trim() === "") {
      return res.json({ error: "Nome do time é necessário" });
    }
    const team = new Team();
    team.name = name;
    const timeExiste = await AppDataSource.manager.findOne(Team, { where: { name } })
    if (timeExiste) {
      return res.json({ error: 'O nome já existe' })
    }
    const time = await AppDataSource.manager.save(Team, team)
    return res.json(time);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    if (!id || id === "") {
      return res.json({ error: "Identificação necessária" });
    }
    const result = await AppDataSource.manager.delete(Team, { id }).catch((e) => e.message);
    return res.json(result);
  }

  // o usuário pode atualizar somente os seus dados
  public async update(req: Request, res: Response): Promise<Response> {
    const { name, id } = req.body;

    const timeExiste = await AppDataSource.manager.findOne(Team, { where: { name } })
    if (timeExiste) {
      return res.json({ error: 'O nome já existe' })
    }
    const time = await AppDataSource.manager.findOneBy(Team, { id })
    time.name = name
    const result = await AppDataSource.manager.save(Team, time)
    return res.json(result)
  }

  public async list(req: Request, res: Response): Promise<Response>{
    const times = await AppDataSource.manager.find(Team, {order:{name:"ASC"}})
    return res.json(times)
  }
  public async listByTerm(req: Request, res: Response): Promise<Response>{
    const {term} = req.params
    const times = await AppDataSource.manager.find(Team, { where: {name: ILike(`%${term}%`) },order:{name:"ASC"}} )
    return res.json(times)
  }



}



export default new TeamsController();