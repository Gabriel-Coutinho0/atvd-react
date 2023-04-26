import { useContexto } from "../../hooks";
import { DivColuna2 } from "../../styles/sytle";
import trevoTimemania from '../../assets/trevo-timemania.png'
import Descricao from "../descricao/descricao";
import NomeTimeMania from "../nomeLoteria/NomeTimeMania";
import ValorAcumuladoTimemania from "../valorAcumulado/valorAcumuladoLoto";

const EsquerdoTime = () => {
    const { resultado } = useContexto();
    return (
        <DivColuna2 >
            <NomeTimeMania img={trevoTimemania} titulo={"TIMEMANIA"} ></NomeTimeMania>
            <Descricao dado={resultado.timemania.dataProximoConcurso} />
            <ValorAcumuladoTimemania dado={resultado.timemania.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
        </DivColuna2>

    );
}

export default EsquerdoTime;