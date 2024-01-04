import React, { useState } from "react";

import "../../../App.css";
import { useForm } from 'react-hook-form';
import { cpfMask, phoneMask } from "../../mask";
import { useNavigate } from "react-router-dom";


const FormularioRemetente = ({name}) => {
    const[nome,setNome] = useState();
    const [valorCpf, setValorCpf] = useState(''); // constantes para o input cpf
    const [phoneValor, setPhoneValor] = useState('')
    const [email,SetEmail] = useState();
    const [cep,SetCep] = useState();
    const [estado,Setestado]=useState();
    const [cidade,SetCidade]=useState();
    const [rua,setRua]=useState();
    const [bairro,setBairro]=useState();
    const[numero,setNumero]= useState();
    const[compremento,setCompremento]=useState()
    const { register, setValue } = useForm();
    
    const Navigate = useNavigate();
    const ReceiverInforms= ()=>{
        const sender ={
            fullname:nome,
            cpf:valorCpf,
            phone:phoneValor,
            email:email,
            address:{
                cep:cep,
                state:estado,
                city:cidade,
                neighborhood: bairro,
                street:rua,
                number:numero,
                comprement:compremento
            }
            
            
        }
        localStorage.setItem('dados', JSON.stringify(sender));
        console.log(sender)
        Navigate({
            pathname:'/destino'
        })
    }

    const nameBlur= (event) =>{
        setNome(event.target.value)
    }


    function CampoCpf(event) {
        const { value } = event.target;
        setValorCpf(cpfMask(value)); // mascara campo cpf
    }

    function handlePhone(event) {
        const { value } = event.target;
        setPhoneValor(phoneMask(value));
    }
    const emailBlur = (event)=>{
        SetEmail(event.target.value)
    }

    //mascara de cpf + consumo da api de cep e preenchimento automatico da mesma
    function checkCEP(e) {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json())
        .then(data => {
            if(data && !data.erro){
                console.log(data);
                setValue('cep',data.cep)
                setValue('address', data.logradouro);
                setValue('neighborhood', data.bairro);
                setValue('city', data.localidade);
                setValue('uf', data.uf);
                SetCep(data.cep);
                setBairro(data.bairro);
                SetCidade(data.localidade);
                setRua(data.logradouro)
                Setestado(data.uf)


    
                

            }else{
                //tratando cep invalido
                alert("Cep Invalido ou não encontrado");
                console.error("cep Invalido ou não encontrado")
            }
        })
        .catch(error=>{
            console.error("Cep invalido",error)
        })
        
    }

    return (
        <>
            <div className="grid-container">
                <div className="title">
                    <h2>{name}</h2>
                </div>
                <br />
                <form >
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Nome completo <br />
                            <input type="text"   onChange={nameBlur} value={nome} />
                        </label>
                        <label htmlFor="">
                            CPF: <br />
                            <input onChange={CampoCpf}  value={valorCpf} name="cpf"   type="text" />
                        </label>
                        <label htmlFor="">
                            Telefone: <br />
                            <input type="text" onChange={handlePhone} value={phoneValor}  />
                        </label>
                        <label htmlFor="">
                            E-mail <br />
                            <input type="text" onChange={emailBlur} {...register("email")}  />
                        </label>
                    </div>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            CEP <br />
                            <input {...register("cep")} onChange={checkCEP}   type="text" />
                        </label>
                        <label htmlFor="">
                            Estado <br />
                            <input type="text"   {...register("state")}  />
                        </label>
                        <label htmlFor="">
                            Cidade <br />
                            <input type="text"  {...register("city")}  />
                        </label>
                        <label htmlFor="">
                            Bairro <br />
                            <input type="text"  {...register("neighborhood")}  />
                        </label>
                        <label htmlFor="">
                            Rua <br />
                            <input type="text"   {...register("address")}  />
                        </label>
                    </div>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Numero <br />
                            <input type="text"  value={numero} onChange={(e) => setNumero(e.target.value)}  />
                        </label>
                        <label htmlFor="">
                            Compremento <br />
                            <input type="text" value={compremento} onChange={(e) => setCompremento(e.target.value)}  />
                        </label>
                    </div>
                    <div className="flexBox">
                        <div className="formInput">
                            <button type="submit" className="buttonSubmit" onClick={ReceiverInforms}>Avançar</button>
                        </div>
                    </div>
                </form>-
            </div>
        </>
    );
}

export default FormularioRemetente;
