import React from "react";

function detalhesPainel({address}){
    return(
        <>
            <li><strong>CEP:</strong>{address.cep|| '-'}</li>
            <li><strong>Estado:</strong>{address.state||'-'}</li>
            <li><strong>Cidade:</strong>{address.city||'-'}</li>
            <li><strong>Bairro:</strong>{address.neighborhood||'-'}</li>
            <li><strong>Rua:</strong>{address.street||'-'}</li>
        </>
    )
}

function PainelPostaQui({data,title}){
    <div className="info-painel">
        <h2>{title}</h2>
        <ul>
            <li><strong>Nome</strong>{data.nome || '-'}</li>
            <li><strong>CPF:</strong>{data.cpf || '-'}</li>
            <li><strong>Celular:</strong>{data.cell || '-'}</li>
            <li><strong>Email:</strong>{data.email || '-'}</li>
            {data.address && <detalhesPainel address={data.address}/>}
        </ul>
    </div>
}
export default PainelPostaQui;