import { DivContainer, DivImage, DivImg, DivTituloTime, H2 } from '../../styles/sytle';
const NomeTimemania = ({img, titulo}:any) => {
    return ( 
        <DivContainer className='header-container'>
                        <DivImage className='imagem-header'><DivImg src={img}></DivImg></DivImage>
                        <DivTituloTime ><H2 >{titulo}</H2></DivTituloTime>
                    </DivContainer>
     );
}
 
export default NomeTimemania;