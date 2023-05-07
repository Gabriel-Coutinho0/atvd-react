import styled from 'styled-components';
import './valorAcumulado.css'
import { timemaniaSld } from '../../styles/theme';
const ValorAcumuladoTimemania = ({ dado }: any) => {
    return (
        <DivValor className='quina-valor'>
            <h2>{dado}</h2>
        </DivValor>
    );
}
const DivValor = styled.div`
color:${timemaniaSld.estimativa};
padding: 0em 2em 2em 3em;
`
export default ValorAcumuladoTimemania;