import TrevoQuina from "../assets/trevo-quina.png"
import Concurso from "../components/concurso/concurso";
import Descricao from "../components/descricao/descricao";
import Vencedores from "../components/vencedores/vencedores";
import "../components/pagesCss/page.css"
import { useContexto } from "../hooks";
import { Linha } from '../styles/sytle';
import CabecalhoQuina from "../components/nomeLoteria/cabecalhoQuina";
import ValorAcumuladoQuina from "../components/valorAcumulado/valorAcumuladoQuina";
import NmrSorteadoQuina from "../components/nmrsSorteado/nmrSorteadoQuina";
import { quinaSld } from "../styles/theme";
import styled from "styled-components";



const Quina = () => {
    const { resultado } = useContexto();

    function verficarGanhadores() {
        if (resultado.quina.quantidadeGanhadores === 1) {
            return " GANHADOR"
        }
        return " GANHADORES"
    }


    return (

        <>
            <div className='container'>
                <DivEsquerdo>
                    <CabecalhoQuina img={TrevoQuina} titulo={"QUINA"} ></CabecalhoQuina>
                    <Descricao dado={resultado.quina.dataProximoConcurso} />
                    <ValorAcumuladoQuina dado={resultado.quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
                </DivEsquerdo>
                <DivDireito>
                    <NmrSorteadoQuina dado={resultado.quina.dezenas} color={quinaSld.bolafonte} background={quinaSld.bola} />
                    <Vencedores dado={resultado.quina.acumulado} dado2={resultado.quina.quantidadeGanhadores} info={verficarGanhadores()} />
                    <Concurso dado={`${resultado.quina.numeroDoConcurso} - ${resultado.quina.dataPorExtenso} `} />

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
export default Quina;