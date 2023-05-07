import styled from 'styled-components';
import './vencedores.css'
import { mega } from '../../styles/theme';

const Vencedores = ({ dado,dado2,info }: any) => {
    return (
        <DivVencedores className='vencedores' >
            <p>{dado ? "ACUMULADO" : dado2 + info}</p>
        </DivVencedores >
    )
}
const DivVencedores = styled.div`
color:${mega.acumulou}
font-size: 30px;
text-transform: uppercase;
`

export default Vencedores;