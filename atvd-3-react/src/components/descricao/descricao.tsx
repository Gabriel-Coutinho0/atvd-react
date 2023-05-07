import { DivDescricao } from "../../styles/sytle";


const Descricao = ({dado}:any) => {
    return (
        <DivDescricao >
            Estimativa do prêmio do proximo concurso. Sorteio {dado}:
        </DivDescricao>
    );
}


export default Descricao;