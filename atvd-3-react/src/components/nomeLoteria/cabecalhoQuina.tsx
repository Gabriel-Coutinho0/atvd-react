import './cabecalho.css'
const CabecalhoQuina = ({img, titulo}:any) => {
    return ( 
        <div className='header-container'>
                        <div className='imagem-header'><img src={img}></img></div>
                        <div className='titulo-quina'><h3 >{titulo}</h3></div>
                    </div>
     );
}
 
export default CabecalhoQuina;