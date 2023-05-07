import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import "./menu.css"
import { mega, quinaSld, timemaniaSld } from "../../styles/theme";

const Menu = () => {
    const location = useLocation().pathname;
    return (
        <DivMenu className="menu">
            <SpanTitulo>
                {location === "/timemania" ?
                    <IsActive to="/timemania">Timemania</IsActive> : <CorPag color={timemaniaSld.loteria} to="/timemania">Timemania</CorPag>
                }
            </SpanTitulo>

            <SpanTitulo>
                {location === "/megasena" ?
                    <IsActive to="/megasena">Megasena</IsActive> : <CorPag color={mega.loteria} to="/megasena">Megasena</CorPag>
                }
            </SpanTitulo>

            <SpanTitulo>
                {location === "/quina" ?
                    <IsActive to="/quina">Quina</IsActive> : <CorPag color={quinaSld.loteria} to="/quina">Quina</CorPag>
                }
            </SpanTitulo>
        </DivMenu>
    );
}
const DivMenu = styled.div`
padding: 15px;
text-decoration: none;
font-weight: bold;
font-size: large;
`
const SpanTitulo = styled.span`
    padding: 15px;
    font-size: 19px;
`
const IsActive = styled(Link)`
color: #aaa;
text-decoration: none;
`

const CorPag = styled(Link)`
color: ${(props) => props.color};
text-decoration: none;
`
export default Menu;