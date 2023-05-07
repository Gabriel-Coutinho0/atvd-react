import styled from 'styled-components';
import './valorAcumulado.css'
import { mega } from '../../styles/theme';
const ValorAcumuladoMega = ({ dado }: any) => {
    return (
        <DivMega className='mega-valor'>
            <h2>{dado}</h2>
        </DivMega>
    );
}
const DivMega = styled.div`
color:${mega.estimativa};
padding: 0em 2em 2em 3em;
`
export default ValorAcumuladoMega;