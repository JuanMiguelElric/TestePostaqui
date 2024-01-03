import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageHome from "../screens/home";
import PageDestinatario from "../screens/recebimento";
import PagePackage from "../screens/pacoteinfo";
//criaçção de rotas para o desenvolvimento das telas 
const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<PageHome/>}/>
                    <Route path="/destino" element={<PageDestinatario />}/>
                    <Route path="/pacote" element={<PagePackage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;