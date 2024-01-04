import React, { useEffect, useState } from "react";
import HeaderPostaAqui from "../../components/header";
import Informacoes from "../../components/render";
import seta from "../../image/arrow.png"
import InformacoesPacote from "../../components/render/infopackage";
import ForFinally from "../../components/forms/finally";
import axios from 'axios';


function FinallyPage(){
    const baseURL = "https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate";
    const [data, setDados]=useState();

    const DadosdeEnvio = JSON.parse(localStorage.getItem('dados'))
    const DadosdeRecebimento = JSON.parse(localStorage.getItem('Receber'))
    const DadosdePacote = JSON.parse(localStorage.getItem('pacote'))
    useEffect(() => {
        axios.post(baseURL, {
            DadosdeEnvio: DadosdeEnvio,
            DadosdeRecebimento: DadosdeRecebimento,
            DadosdePacote: DadosdePacote
        })
        .then((Response) => {
            setDados(Response.data);
        })
        .catch((error) => {
            console.error("Erro na requisição:", error);
            
        });
    }, []);
    
    return(
        <>  
            <HeaderPostaAqui/>
            <br />
            <br />
            <br />
            <div className="container-infos">
                <Informacoes name="origem" data={DadosdeEnvio} link="/" style="card-infor orange" />
                <img src={seta} alt="" />
                <Informacoes name="origem" data={DadosdeRecebimento} link="/" style="card-infor blue" />
                <img src={seta} alt="" />
                <InformacoesPacote name="pacote" data={DadosdePacote} link="/pacote" style="card-infor green" />

            </div>
            <br />
            <br />
            <br />
            <br />
            <ForFinally name="Valor Final do frete" shipment={data && data.shipment} />

          
        
        </>
    )
}
export default FinallyPage