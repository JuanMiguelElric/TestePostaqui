import { useState } from "react";
import "../../../index.css"

function FormularioPacote({name,sender,receiver}){
    const baseURL = "https://f29faec4-6487-4b60-882f-383b4054cc32.mock.pstmn.io/shipping_calculate";

    const[peso, setPeso]=useState();
    const[altura,setAltura]=useState();
    const[largura,setLargura]=useState();
    const[comprimento,setComprimento]=useState();
    const[log,setlog]=useState();
    const[alertReceber,setAlertReceber]=useState();
    const[retirada, setRetirada]=useState();
    const[valorMerca,setvalorMerca]=useState();
    const[quanti, setQuantity]=useState();
    const[descri,setDescri]=useState()
    
    const envioPacoteFinal=()=>{
        const pacote={
            weight: peso,
            height: altura,
            width: largura,
            length: comprimento,
            reverse: false,
            ar: false,
            own_hands: false,
            information: {
                amount: valorMerca,
                quantity:quanti ,
                description:descri

       
            }
        }
        const searchParams = new URLSearchParams();
        searchParams.append('sender',JSON.stringify(sender))
        searchParams.append('receiver',JSON.stringify(receiver))
        searchParams.append('pacote',JSON.stringify(pacote))
    }
    function PesoINput(event){
        setPeso(event.target.value);

    }
    function AlturaInput(event){
        setAltura(event.target.value);

    }
    function LarguraInput(event){
        setLargura(event.target.value)
    }
    function ComprimentoInput(event){
        setComprimento(event.target.value)
    }
    function LogisticaInput(event){
        setlog(event.target.value)
    }
    function ReceberInput(event){
        setAlertReceber(event.target.value)
    }
    function MaosPropriasInput(event){
        setRetirada(event.target.value)
    }
    function valorMercadoria(event){
        setvalorMerca(event.target.value)
    }
    function QuantidadeDeItens(event){
        setQuantity(event.target.value)
    }
    function DescricaoInput(event){
        let tamanho = event.target.value.length;
        if(tamanho >10){
            alert("maior que 10")
        }
        setDescri(event.target.value)
    }
    return(
        <div className="grid-container">
            <div className="title">
                <h2>{name}</h2>
            </div>
            <div className="InputsdePreenchimento">
                <div className="  items-center vertical">
                    <label htmlFor="">Peso <br />
                        <input type="text" value={peso} onChange={PesoINput} />
                    </label>
                    <label htmlFor="">
                        Altura <br />
                        <input type="text" value={altura} onChange={AlturaInput} />
                    </label>
                    <label htmlFor="">Largura <br />
                        <input type="text" value={largura} onChange={LarguraInput} />
                    </label>
                    <label htmlFor="">Comprimento <br />
                        <input type="text" value={comprimento} onChange={ComprimentoInput} />
                    </label>

                </div>

            </div>
            <div className="InputsdePreenchimento">
                
                <div className=" items-center vertical">
                    
                    <div className="formInput items-center">
                        <label htmlFor="">Logistica Reversa</label>
                        <input type="checkbox" className="checkInput" value={log} onChange={LogisticaInput} />

                    </div>
                    <div className="formInput items-center">
                        <label htmlFor="">Aviso de Recebimento</label>
                        <input className="checkInput" type="checkbox" value={alertReceber} onChange={ReceberInput} />

                    </div>
                    <div className="formInput items-center">
                        <label htmlFor="">Mãos próprias</label>
                        <input type="checkbox" value={retirada} onChange={MaosPropriasInput} />

                    </div>

                </div>
            </div>
            <div className="InputsdePreenchimento ">
                <div className="flex widthTotal">
                    <div className="flexBox items-center vertical">
                        <div className=" horizontal">
                            <div className=" formInput" >
                                <label htmlFor="">
                                    valor da mercadoria <br />
                                <input type="text" value={valorMerca} onChange={valorMercadoria} />

                                </label>

                            </div>
                            <div className="formInput">

                                <label htmlFor="">
                                    Quantidade de items <br />
                                <input type="text" name="" value={quanti} onChange={QuantidadeDeItens} />
                                </label>
                            </div>

                        </div>
                        <div className="flexBox widthTotal">
                            <div className="formInput">
                                <label htmlFor="">descrição <br />
                                <input type="text" className="descricao" value={descri} onChange={DescricaoInput} />
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                    <div className="flexBox">
                        <div className="formInput">
                            <button className="buttonSubmit" onClick={envioPacoteFinal} >Avançar</button>
                        </div>

                    </div>
            </div>
        </div>
    )
}
export default FormularioPacote;