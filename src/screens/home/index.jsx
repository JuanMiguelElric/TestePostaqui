import React,{useState}from "react";
import LogoPostAqui from "../../image/postaqui.png";
import "../../App.css";
import { cpfMask,phoneMask } from "../../components/mask";


const PageHome=()=>{
    const [valor, setValor] = useState('');// constantes para o input cpf
    const [phoneValor, setPhoneValor] = useState('');

    function CampoCpf(event){
        const {value}= event.target;
        setValor(cpfMask(value)) // mascara campo cpf
    }
    function handlePhone(event){
        const {value} = event.target;
        setPhoneValor(phoneMask(value))
    }

    return(
        <>
            <div className="container">
                <div className="containerLogo">
                    <img src={LogoPostAqui} className="logo" alt="" />
                    <h1 style={{fontSize:"36px"}}>Teste Calculadora Postaqui</h1>

                </div>
                
            </div>
            <div className="grid-container">
                <div className="title">
                 <h2>Dados de Origem</h2>

                </div>
                <br />
                {/*inputs de preenchimento Postaqui */}
                <div className="InputsdePreenchimento">
                  
                    <label htmlFor="">
                        Nome completo <br /> 
                        <input type="text" />
                    </label>
            
                  
                    <label htmlFor="">
                        CPF: <br />
                        <input onChange={CampoCpf} value={valor} type="text" />
                     </label>
                  
                   
                    <label htmlFor="">
                        Telefone: <br />
                        <input type="text" onChange={handlePhone} value={phoneValor} />
                    </label>
               
                   
                    <label htmlFor="">
                        E-mail <br />
                        <input type="text" />
                    </label>
            

                    
                </div>
                <div className="InputsdePreenchimento">
                  
                    <label htmlFor="">
                        CEP <br /> 
                        <input type="text" />
                    </label>
            
                  
                    <label htmlFor="">
                        Estado <br />
                        <input type="text" />
                     </label>
                  
                   
                    <label htmlFor="">
                        Cidade <br />
                        <input type="text" />
                    </label>
               
                   
                    <label htmlFor="">
                        Bairro <br />
                        <input type="text" />
                    </label>
            
                    <label htmlFor="">
                        Rua <br />
                        <input type="text" />
                    </label>
            

                    
                </div>
                <div className="InputsdePreenchimento">
                  
                    <label htmlFor="">
                        Numero <br /> 
                        <input type="text" />
                    </label>
            
                  
                    <label htmlFor="">
                        Complemento <br />
                        <input type="text" />
                     </label>
            

                    
                </div>
            </div>
            
        </>
    )
}
export default PageHome;