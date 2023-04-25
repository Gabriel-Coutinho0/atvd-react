import TrevoQuina from "../assets/trevo-quina.png"
import Concurso from "../components/concurso/concurso";
import Descricao from "../components/descricao/descricao";
import Vencedores from "../components/vencedores/vencedores";
import "../components/pagesCss/page.css"
import { useContexto } from "../hooks";
import { Linha } from '../styles/sytle';
import CabecalhoQuina from "../components/cabecalho/cabecalhoQuina";
import ValorAcumuladoQuina from "../components/valorAcumulado/valorAcumuladoQuina";
import NmrSorteadoQuina from "../components/nmrsSorteado/nmrSorteadoQuina";



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
            <div className='coluna-2'>
                <CabecalhoQuina img={TrevoQuina} titulo={"QUINA"} ></CabecalhoQuina>
                <Descricao dado={resultado.quina.dataProximoConcurso} />
                <ValorAcumuladoQuina dado={resultado.quina.valorEstimadoProximoConcurso.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} />
            </div>
            <div className='coluna-3'>
                <NmrSorteadoQuina dado={resultado.quina.dezenas} />
                <Vencedores dado={resultado.quina.acumulado} dado2={resultado.quina.quantidadeGanhadores} info={verficarGanhadores()}/>
                <Concurso dado={`${resultado.quina.numeroDoConcurso} - ${resultado.quina.dataPorExtenso} `} />

            </div>
            </div>
            <Linha />

        </>

    );
}

export default Quina;