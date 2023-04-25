import { Link } from "react-router-dom";
import "./menu.css"

const Menu = () => {
    return ( 
        <div className="menu">
            <Link to={"/lotofacil"} className="link lotoFacil">LotoFácil</Link>
            <Link to={"/megasena"} className="link megaSena">MegaSena</Link>
            <Link to={"/quina"} className="link quina">Quina</Link>


        </div>
     );
}
 
export default Menu;