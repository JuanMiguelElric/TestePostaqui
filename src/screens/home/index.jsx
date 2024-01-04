import React from "react";
import FormularioRemetente from "../../components/forms/formSender";
import HeaderPostaAqui from "../../components/header";


export default function PageHome(){
    
    return(
        <>
            <HeaderPostaAqui />

            <FormularioRemetente name="origem do pedido" />
        </>
    )
}