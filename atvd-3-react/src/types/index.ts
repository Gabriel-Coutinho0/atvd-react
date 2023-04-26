export interface ResultadoContext {
    resultado: LoteriaProps,
    setResultado: Function
  }

export interface LoteriaProps {
    megasena: Props
    lotofacil: Props
    quina: Props
    timemania: Props

}
export interface Props {
    timeDoCoracao: string
    acumulado: boolean,
    concursoEspecial: boolean,
    dataApuracao: string,
    dataPorExtenso: string,
    dataProximoConcurso: string,
    dezenas: string[],
    numeroDoConcurso: number,
    quantidadeGanhadores: number,
    tipoJogo: string,
    valorEstimadoProximoConcurso: number,
    valorPremio: number,

}
    
  