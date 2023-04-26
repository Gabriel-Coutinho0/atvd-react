import { DivValorAcumuladoTime, H2 } from '../../styles/sytle';
import './valorAcumulado.css'
const ValorAcumuladoTimemania = ({dado}:any) => {
    return (
        <DivValorAcumuladoTime>
            <H2>{dado}</H2>
        </DivValorAcumuladoTime>);
}

export default ValorAcumuladoTimemania;