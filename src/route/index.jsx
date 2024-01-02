import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageHome from "../screens/home";
import PageDestinatario from "../screens/recebimento";
//criaçção de rotas para o desenvolvimento das telas 
const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<PageHome/>}/>
                    <Route path="/isso" element={<PageDestinatario />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;