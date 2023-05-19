import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Team } from '../entities/Teams';

class TeamsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    //verifica se foram fornecidos os parâmetros
    if (!name || name.trim() === "" ) {
      return res.json({ error: "Nome do time é necessário" });
    }
    const obj = new Team();
    obj.name = name;
    // o hook BeforeInsert não é disparado com AppDataSource.manager.save(User,JSON),
    // mas é disparado com AppDataSource.manager.save(User,objeto do tipo User)
    // https://github.com/typeorm/typeorm/issues/5493
    const time: any = await AppDataSource.manager.save(Team, obj).catch((e) => {
      // testa se o nome do time é repetido
      if (/(name)[\s\S]+(already exists)/.test(e.detail)) {
        return { error: 'O time já existe' };
      }
      return { error: 'O time já existe' };
    })
    return res.json(time);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
        if( !id || id === "" ){
            return res.json({ error: "Identificação necessária" });
        }
        const gasto: any = await AppDataSource.manager.findOneBy(Team, { id }).catch((e) => {
            return { error: "Identificador inválido" };
        });

        if (gasto && gasto.id) {
            const r = await AppDataSource.manager.delete(Team, gasto).catch((e) => e.message);
            return res.json(r);
        }
        else if (gasto && gasto.error) {
            return res.json(gasto);
        }
        else {
            return res.json({ error: "Gasto não localizado" });
        }
    


    // obtém o id do time que foi salvo na autorização na middleware
    // const { id } = res.locals;
    // const r = await AppDataSource
    //   .createQueryBuilder()
    //   .delete()
    //   .from(Team)
    //   .where("id=:id", { id })
    //   .execute()

    // return res.json(r)
  }

  // o usuário pode atualizar somente os seus dados
  public async update(req: Request, res: Response): Promise<Response> {
    const { name } = req.body;
    // obtém o id do usuário que foi salvo na autorização na middleware
    const { id } = res.locals;
    const time: any = await AppDataSource.manager.findOneBy(Team, { id }).catch((e) => {
      return { error: "Identificador inválido" };
    })
    if (time && time.id) {
      if (name !== "") {
        time.name = name;
      }
      const r = await AppDataSource.manager.save(Team, time).catch((e) => {
        // testa se o name é repetido
        if (/(name)[\s\S]+(already exists)/.test(e.detail)) {
          return ({ error: 'O nome já existe' });
        }
        return e;
      })
      if (!r.error) {
        return res.json({ id: time.id, name: time.name });
      }
      return res.json(r);
    }
    else if (time && time.error) {
      return res.json(name)
    }
    else {
      return res.json({ error: "Time não localizado" });
    }
  }

}

export default new TeamsController();