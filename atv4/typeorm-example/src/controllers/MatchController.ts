import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Match } from '../entities/Match';
import { Team } from '../entities/Teams';

class MatchController {
    public async create(req: Request, res: Response): Promise<Response> {
        const { date ,idhost,idvisitor} = req.body;
        //verifica se foram fornecidos os parâmetros
        if (!date || date.trim() === "" || !idhost || idhost.trim() === "" || !idvisitor || idvisitor.trim() === "") {
            return res.json({ error: "A data e os times são necessários "});
        }
        // obtém o id do data que foi salvo na autorização na middleware
        const { id } = res.locals;
        const match: any = await AppDataSource.manager.findOneBy(Team, { id }).catch((e) => {
            return { error: "Identificador inválido" };
        })

        if (match && match.id) {
            const partida = new Match();
            partida.date = date;
            partida.host = idhost;
            partida.visitor = idvisitor;
            await AppDataSource.manager.save(Match, partida);
            res.json({ id: partida.date, host: partida.host, visitor: partida.visitor });
        }
        else {
            return res.json(match);
        }
    }

    // public async update(req: Request, res: Response): Promise<Response> {
    //     const { id, description, value } = req.body;
    //     if( !id || id === "" || !description || description === "" || !value || value === ""){
    //         return res.json({ error: "Identificação, descrição e valor são necessários" });
    //     }
    //     const gasto: any = await AppDataSource.manager.findOneBy(Spent, { id }).catch((e) => {
    //         return { error: "Identificador inválido" };
    //     })
    //     if (gasto && gasto.id) {
    //         gasto.description = description;
    //         gasto.value = value;
    //         const r = await AppDataSource.manager.save(Spent, gasto).catch((e) => e.message);
    //         return res.json(r);
    //     }
    //     else if (gasto && gasto.error) {
    //         return res.json({gasto});
    //     }
    //     else {
    //         return res.json({ error: "Gasto não localizado" });
    //     }
    // }

    // public async delete(req: Request, res: Response): Promise<Response> {
    //     const { id } = req.body;
    //     if( !id || id === "" ){
    //         return res.json({ error: "Identificação necessária" });
    //     }
    //     const gasto: any = await AppDataSource.manager.findOneBy(Spent, { id }).catch((e) => {
    //         return { error: "Identificador inválido" };
    //     });

    //     if (gasto && gasto.id) {
    //         const r = await AppDataSource.manager.remove(Spent, gasto).catch((e) => e.message);
    //         return res.json(r);
    //     }
    //     else if (gasto && gasto.error) {
    //         return res.json(gasto);
    //     }
    //     else {
    //         return res.json({ error: "Gasto não localizado" });
    //     }
    // }

    // public async list(req: Request, res: Response): Promise<Response> {
    //     // obtém o id do usuário que foi salvo na autorização na middleware
    //     const { id } = res.locals;
    //     const usuario: any = await AppDataSource.manager.findOneBy(User, { id }).catch((e) => {
    //         return { error: "Identificador inválido" };
    //     })

    //     if (usuario && usuario.id) {
    //         const repo = AppDataSource.getRepository(Spent);
    //         const gastos = await repo.find({
    //             /*relations:{
    //                 user:true
    //             },*/
    //             where: { user: { id } },
    //             order: {
    //                 description: 'asc'
    //             }
    //         });
    //         return res.json(gastos);
    //     }
    //     else if (!usuario) {
    //         return res.json({ error: "Usuário não identificado" });
    //     }
    //     else {
    //         return res.json(usuario)
    //     }
    // }
}

export default new MatchController();