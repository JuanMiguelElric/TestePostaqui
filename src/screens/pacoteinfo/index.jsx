import React from "react";
import FormularioPacote from "../../components/forms/formPackage";
import HeaderPostaAqui from "../../components/header";
import Informacoes from "../../components/render";
import "../../index.css";
import Setarrow from "../../image/arrow.png"

export default function PagePackage(){
    const receber = JSON.parse(localStorage.getItem('Receber'));
    const Dadospos = JSON.parse(localStorage.getItem('dados'));
    console.log(receber)
    return(
        
        <>
            <HeaderPostaAqui/>
            <div className="container-infos">
                <Informacoes name="Origen" data={Dadospos} link="/" style="card-infor orange" />
                <img src={Setarrow} alt="seta"  />
                <Informacoes name="Destinatario" data={receber} link="/destino" style="card-infor blue" />

            </div>
            <br />
            <br />
            <br />
            
            <FormularioPacote name="caracterisitcas do pacote"/>
        </>
    )
}