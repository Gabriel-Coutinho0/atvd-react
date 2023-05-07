import trevoMega from '../assets/trevo-megasena.png'
import CabecalhoMega from '../components/nomeLoteria/cabecalhoMega';
import Concurso from '../components/concurso/concurso';
import Descricao from '../components/descricao/descricao';
import NmrSorteadoMega from '../components/nmrsSorteado/nmrSorteadoMega';
import ValorAcumuladoMega from '../components/valorAcumulado/valorAcumuladoMega';
import Vencedores from '../components/vencedores/vencedores';
import { useContexto } from '../hooks';
import { Linha } from '../styles/sytle';
import { mega } from '../styles/theme';
import styled from 'styled-components';




const Mega = () => {
    const { resultado } = useContexto();
    function verficarGanhadores() {
        if (resultado.megasena.quantidadeGanhadores === 1) {
            return " GANHADOR"
        }
        return " GANHADORES"
    }

    return (
        <>
            <div className='container'>
                {resultado.megasena && (
                    <p>{resultado.megasena.acumulado}</p>
                )}
                <DivEsquerdo >
                    <CabecalhoMega img={trevoMega} titulo="MEGA-SENA" />
                    <Descricao dado={resultado.megasena.dataProximoConcurso} />
                    <ValorAcumuladoMega dado={resultado.megasena.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
                </DivEsquerdo>
                <DivDireito >
                    <NmrSorteadoMega dado={resultado.megasena.dezenas} color={mega.bolafonte} background={mega.loteria} />
                    <Vencedores dado={resultado.megasena.acumulado} dado2={resultado.megasena.quantidadeGanhadores} info={verficarGanhadores()} />
                    <Concurso dado={`${resultado.megasena.numeroDoConcurso} - ${resultado.megasena.dataPorExtenso} `} />
                </DivDireito>
            </div>
            <Linha></Linha>
        </>
    );
}
const DivEsquerdo = styled.div`
width: 50%;
`
const DivDireito = styled.div`
width: 50%;
`
export default Mega;