import trevoTimemania from '../assets/trevo-timemania.png'
import Concurso from "../components/concurso/concurso";
import Descricao from "../components/descricao/descricao";
import Vencedores from "../components/vencedores/vencedores";
import "../components/pagesCss/page.css"
import { useContexto } from "../hooks";
import { Linha } from '../styles/sytle';
import NmrSorteadoMega from '../components/nmrsSorteado/nmrSorteadoMega';
import NomeTimeMania from '../components/nomeLoteria/NomeTimeMania';
import ValorAcumuladoTimemania from '../components/valorAcumulado/valorAcumuladoLoto';
import EsquerdoTime from '../components/esquerdo/esquerdoTime';



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
            {/* <EsquerdoTime/> */}
            <div className='coluna-2'>
                <NomeTimeMania img={trevoTimemania} titulo={"TIMEMANIA"} ></NomeTimeMania>
                <Descricao dado={resultado.timemania.dataProximoConcurso} />
                <ValorAcumuladoTimemania dado={resultado.timemania.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
            </div>
            <div className='coluna-3'>
                <NmrSorteadoMega dado={resultado.timemania.dezenas} />
                <Vencedores dado={resultado.timemania.acumulado} dado2={resultado.timemania.quantidadeGanhadores} info={verficarGanhadores()}/>
                <Concurso dado={`${resultado.timemania.numeroDoConcurso} - ${resultado.timemania.dataPorExtenso} `} />

            </div>
            </div>
            <Linha />

        </>

    );
}

export default Loto;