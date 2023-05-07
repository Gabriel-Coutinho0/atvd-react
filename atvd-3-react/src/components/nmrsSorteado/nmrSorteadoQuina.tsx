import styled from 'styled-components';
import './nmrSorteado.css'

const NmrSorteadoQuina = ({dado,color,background}:any) => {
    return (
        <div className="coluna-dezenas-quina">
            <ul>{dado ? dado.map((elementos:any) =>
                <LiStyle color={color} background={background}>
                    {elementos}
                </LiStyle>
            ) : ""}</ul>
        </div>
    );
}
interface Props {
    color: string;
    background: string;
};

const LiStyle = styled.li<Props>`
display: inline-block;
font-weight: 100;
font-size: 1.2rem;
padding: 9px 0px;
height: 2rem;
width: 3rem;
border-radius: 100%;
margin-right: 25px;
text-align: center;
line-height: 2em;
font-weight: bold;
color: ${(props) => props.color};
background-color: ${(props) => props.background};
`

export default NmrSorteadoQuina;