import { useState } from "react";
import "../../../index.css"
import { useNavigate } from "react-router-dom";
import CurrencyInput from 'react-currency-masked-input';

function FormularioPacote({name}){
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
    const Navigate = useNavigate();
    
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
        localStorage.setItem("pacote",JSON.stringify(pacote))
        Navigate({
            pathname:"/finally"
        })
    }
    function ValorMercadoria(event){
        setvalorMerca(event.target.value);

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
                        <input type="text" value={peso} onChange={(e) => setPeso(e.target.value)}  placeholder="                                               Peso"  />
                    </label>
                    <label htmlFor="">
                        Altura <br />
                        <input type="text" value={altura} placeholder="                                               Altura" onChange={(e)=>setAltura(e.target.value)} />
                    </label>
                    <label htmlFor="">Largura <br />
                        <input type="text" value={largura} placeholder="                                            Largura" onChange={(e)=>setLargura(e.target.value)} />
                    </label>
                    <label htmlFor="">Comprimento <br />
                        <input type="text" value={comprimento} placeholder="                                   Comprimento" onChange={(e)=>setComprimento(e.target.value)} />
                    </label>

                </div>

            </div>
            <div className="InputsdePreenchimento">
                
                <div className=" items-center vertical">
                    
                    <div className="formInput items-center">
                        <label htmlFor="">Logistica Reversa</label>
                        <input type="checkbox" className="checkInput" value={log} onChange={(e)=>setlog(e.target.value)} />

                    </div>
                    <div className="formInput items-center">
                        <label htmlFor="">Aviso de Recebimento</label>
                        <input className="checkInput" type="checkbox" value={alertReceber} onChange={(e)=>setAlertReceber(e.target.value)} />

                    </div>
                    <div className="formInput items-center">
                        <label htmlFor="">Mãos próprias</label>
                        <input type="checkbox" value={retirada} onChange={(e)=>setRetirada(e.target.value)} />

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
                                    <CurrencyInput
                                        prefix={"$"}
                                        id="input-example"
                                        name="input-name"
                                        decimalsLimit="2"
                                        value={valorMerca}
                                        onValueChange={ValorMercadoria}
                                    />
                                

                                </label>

                            </div>
                            <div className="formInput">

                                <label htmlFor="">
                                    Quantidade de items <br />
                                <input type="text" name="" value={quanti} onChange={(e)=>setQuantity(e.target.value)} />
                                </label>
                            </div>

                        </div>
                        <div className="flexBox widthTotal">
                            <div className="formInput">
                                <label htmlFor="">descrição <br />
                                <textarea  className="descricao" value={descri} onChange={DescricaoInput} cols="30" rows="10"></textarea>
                   
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