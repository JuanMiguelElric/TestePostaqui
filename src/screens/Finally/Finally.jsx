import React, { useEffect, useState } from "react";
import HeaderPostaAqui from "../../components/header";
import Informacoes from "../../components/render";
import seta from "../../image/arrow.png"
import InformacoesPacote from "../../components/render/infopackage";
import ForFinally from "../../components/forms/finally";
import axios from 'axios';

function FinallyPage() {
    // URL para a requisição POST
    const baseURL = "https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate";
    
    // Estado para armazenar os dados da requisição
    const [data, setDados] = useState();

    // Recupera os dados do armazenamento local
    const DadosdeEnvio = JSON.parse(localStorage.getItem('dados'))
    const DadosdeRecebimento = JSON.parse(localStorage.getItem('Receber'))
    const DadosdePacote = JSON.parse(localStorage.getItem('pacote'))

    // Efeito que é executado quando o componente é montado
    useEffect(() => {
        // Realiza a requisição POST usando a biblioteca Axios
        axios.post(baseURL, {
            DadosdeEnvio: DadosdeEnvio,
            DadosdeRecebimento: DadosdeRecebimento,
            DadosdePacote: DadosdePacote
        })
        .then((Response) => {
            // Atualiza o estado com os dados da resposta
            setDados(Response.data);
        })
        .catch((error) => {
            // Manipula erros na requisição
            console.error("Erro na requisição:", error);
        });
    }, []); // O array vazio significa que o efeito é executado apenas uma vez, equivalente a componentDidMount

    return (
        <>  
            {/* Renderiza o componente HeaderPostaAqui */}
            <HeaderPostaAqui/>
            
            {/* Renderiza uma série de quebras de linha para espaçamento */}
            <br />
            <br />
            <br />

            {/* Container para renderizar as informações */}
            <div className="container-infos">
                {/* Renderiza o componente Informacoes para os dados de envio */}
                <Informacoes name="origem" data={DadosdeEnvio} link="/" style="card-infor orange" />
                
                {/* Renderiza uma seta */}
                <img src={seta} alt="" />

                {/* Renderiza o componente Informacoes para os dados de recebimento */}
                <Informacoes name="origem" data={DadosdeRecebimento} link="/" style="card-infor blue" />
                
                {/* Renderiza outra seta */}
                <img src={seta} alt="" />
                
                {/* Renderiza o componente InformacoesPacote para os dados do pacote */}
                <InformacoesPacote name="pacote" data={DadosdePacote} link="/pacote" style="card-infor green" />
            </div>

            {/* Mais quebras de linha para espaçamento */}
            <br />
            <br />
            <br />
            <br />

            {/* Renderiza o componente ForFinally para exibir o valor final do frete */}
            <ForFinally name="Valor Final do frete" shipment={data && data.shipment} />
        </>
    )
}

// Exporta o componente FinallyPage
export default FinallyPage;
