import styled from 'styled-components';
import './valorAcumulado.css'
import { quinaSld } from '../../styles/theme';
const ValorAcumuladoQuina = ({ dado }: any) => {
    return (
        <DivValor className='quina-valor'>
            <h2>{dado}</h2>
        </DivValor>
    );
}
const DivValor = styled.div`
color:${quinaSld.estimativa};
padding: 0em 2em 2em 3em;
`
export default ValorAcumuladoQuina;