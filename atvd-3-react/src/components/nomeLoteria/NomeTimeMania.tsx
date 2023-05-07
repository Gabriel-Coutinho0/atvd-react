import styled from 'styled-components';
import { timemaniaSld } from '../../styles/theme';
const NomeTimemania = ({ img, titulo }: any) => {
    return (
        <div className='header-container'>
            <div className='imagem-header'><img src={img}></img></div>
            <DivTitulo className='titulo-quina'><h3 >{titulo}</h3></DivTitulo>
        </div>
    );
}
const DivTitulo = styled.div`
display: inline-block;
padding-top: 6px;
font-size: 1.4em;
color:${timemaniaSld.loteria}
`
export default NomeTimemania;