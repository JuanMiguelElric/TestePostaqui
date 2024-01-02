import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputsReceiver from "../screens/recebimento";
import PageHome from "../screens/home";
//criaçção de rotas para o desenvolvimento das telas 
const Rotas=()=>{
    return(
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<PageHome/>}/>
                    <Route path="/isso" element={<InputsReceiver />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;