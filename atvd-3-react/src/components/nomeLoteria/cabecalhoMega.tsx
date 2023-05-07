import styled from 'styled-components';
import { mega } from '../../styles/theme';
import './cabecalho.css'
const CabecalhoMega = ({ img, titulo }: any) => {
    return (
        <div className='header-container'>
            <div className='imagem-header'><img src={img}></img></div>
            <DivTitulo className='titulo-mega'><h3 >{titulo}</h3></DivTitulo>
        </div>
    );
}
const DivTitulo = styled.div`
display: inline-block;
padding-top: 6px;
font-size: 1.4em;
color:${mega.loteria};
`
export default CabecalhoMega;

