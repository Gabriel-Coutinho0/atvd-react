import trevoTimemania from '../assets/trevo-timemania.png'
import Concurso from "../components/concurso/concurso";
import Descricao from "../components/descricao/descricao";
import Vencedores from "../components/vencedores/vencedores";
import "../components/pagesCss/page.css"
import { useContexto } from "../hooks";
import { Linha } from '../styles/sytle';
import NomeTimeMania from '../components/nomeLoteria/NomeTimeMania';
import ValorAcumuladoTimemania from '../components/valorAcumulado/valorAcumuladoLoto';
import NmrSorteadoTime from '../components/nmrsSorteado/nmrSorteadoTime';
import { timemaniaSld } from '../styles/theme';
import styled from 'styled-components';



const Loto = () => {
    const { resultado } = useContexto();

    function verficarGanhadores() {
        if (resultado.timemania.quantidadeGanhadores === 1) {
            return " GANHADOR"
        }
        return " GANHADORES"
    }


    return (

        <>
            <div className='container'>
                <DivEsquerdo>
                    <NomeTimeMania img={trevoTimemania} titulo={"TIMEMANIA"} ></NomeTimeMania>
                    <Descricao dado={resultado.timemania.dataProximoConcurso} />
                    <ValorAcumuladoTimemania dado={resultado.timemania.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
                </DivEsquerdo>
                <DivDireito>
                    <NmrSorteadoTime dado={resultado.timemania.dezenas} color={timemaniaSld.bolafonte} background={timemaniaSld.bola} />
                    <Vencedores dado={resultado.timemania.acumulado} dado2={resultado.timemania.quantidadeGanhadores} info={verficarGanhadores()} />
                    <Concurso dado={`${resultado.timemania.numeroDoConcurso} - ${resultado.timemania.dataPorExtenso} `} />

                </DivDireito>
            </div>
            <Linha />

        </>

    );
}
const DivEsquerdo = styled.div`
width: 50%;
`
const DivDireito = styled.div`
width: 50%;
`
export default Loto;