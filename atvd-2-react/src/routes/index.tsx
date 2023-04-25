import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mega from "../pages/mega";
import Loto from "../pages/loto";
import Quina from "../pages/quina";
import Menu from "../components/menu/menu";


function Erro() {
    return (
        <>
            <div className="notfoudn">
                <h1>Not found</h1>
            </div>
        </>
    )
}

const Rotas = () => {
    return (

        <>
            <BrowserRouter>
            <Menu/>
                <Routes>
                    <Route path="/" element={<Mega />} />
                    <Route path="/megasena" element={<Mega />} />
                    <Route path="/lotofacil" element={<Loto />} />
                    <Route path="/quina" element={<Quina />} />
                    <Route path="*" element={<Erro />} />

                </Routes>
            </BrowserRouter>
        </>

    );
}

export default Rotas; 