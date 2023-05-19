import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Match } from '../entities/Match';
import { Team } from '../entities/Teams';

class MatchController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { date, idhost, idvisitor } = req.body;
        //verifica se foram fornecidos os parâmetros
        if (!date || date.trim() === "" || !idhost || idhost === "" || !idvisitor || idvisitor === "") {
            return res.json({ error: "A data e os times são necessários " });
        }
        // obtém o id do data que foi salvo na autorização na middleware
        const { id } = res.locals;
        const match: any = await AppDataSource.manager.findOneBy(Team, { id }).catch((e) => {
            return { error: "Identificador inválido" };
        })

        if (match && match.id) {
            const partida = new Match();
            partida.host = idhost;
            partida.visitor = idvisitor;
            partida.date = date;
            await AppDataSource.manager.save(Match, partida);
            const result = await AppDataSource.manager.findOne(Match, { where: { id: partida.id }, loadEagerRelations: true, relations: { visitor: true, host: true } })
            res.json(result);
        }
        else {
            return res.json(match);
        }
    }

    public async update(req: Request, res: Response): Promise<Response> {
        const { id, idhost, idvisitor, date } = req.body;
        if (!id || id === "" || !idhost || idhost === "" || !idvisitor || idvisitor === "" || !date || date === "") {
            return res.json({ error: "Identificação, id do host, id do visitante e a data são necessários" });
        }
        const partida = await AppDataSource.manager.findOneBy(Match, { id })
        const hostExiste = await AppDataSource.manager.findOne(Team, { where: { id: idhost } })
        if (!hostExiste) {
            return res.json({ error: "Mandante desconhecido" })
        }
        const visitorExiste = await AppDataSource.manager.findOne(Team, { where: { id: idvisitor } })
        if (!visitorExiste) {
            return res.json({ error: "Visitante  desconhecido" })
        }
        if (partida && partida.id) {
            partida.date = date;
            partida.host = idhost;
            partida.visitor = idvisitor;
            const r = await AppDataSource.manager.save(Match, partida);
            return res.json({ ...r, host: hostExiste, visitor: visitorExiste });
        }
    }

    public async delete(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        if (!id || id === "") {
            return res.json({ error: "Identificação necessária" });
        }
        const result = await AppDataSource.manager.delete(Match, { id }).catch((e) => e.message);
        return res.json(result);
    }

    public async list(req: Request, res: Response): Promise<Response> {
        const { limit, offset } = req.body
        const listaMatchs = await AppDataSource.manager.find(Match, { loadEagerRelations: true, relations: { visitor: true, host: true }, order: { date: "DESC" }, skip: offset, take: limit })
        return res.json(listaMatchs)
    }
    public async listById(req: Request, res: Response): Promise<Response> {
        const id = parseInt(req.params.id)
        const listaMatchs = await AppDataSource.manager.find(Match, { where: [{ host: { id } }, { visitor: { id } }], loadEagerRelations: true, relations: { visitor: true, host: true }, order: { date: "DESC" } })
        return res.json(listaMatchs)
    }
}

export default new MatchController();