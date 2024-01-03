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
    const { register, setValue, focus } = useForm();
    
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
                complement:null
            }
            
            
        }
        localStorage.setItem('dados', JSON.stringify(sender));
        console.log(sender)
        Navigate({
            pathname:'/destino'
        })
    }

    const nameBlur= (event) =>{
        setNome("nome",event.target.value)
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
    const estadoBlur = (event)=>{
        Setestado(event.target.value)
    }
    const cidadeBlur = (event)=>{
        SetCidade(event.target.value)
    }
    const bairroBlur =(event)=>{
        setBairro(event.target.value)
        
    }
    const ruaBlur = (event)=>{
        setRua(event.target.value)
    }
    const numeroBlur = (event)=>{
        setNumero(event.target.value)
    }

    function checkCEP(e) {
        const cep = e.target.value.replace(/\D/g, '');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            console.log(data);
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setValue('uf', data.uf);
            focus('addressNumber');
        });
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
                            <input type="text"  name="nome" onChange={nameBlur} {...register("name")} />
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
                            <input {...register("cep")} onChange={checkCEP}  type="text" />
                        </label>
                        <label htmlFor="">
                            Estado <br />
                            <input type="text" onChange={estadoBlur} {...register("uf")}  />
                        </label>
                        <label htmlFor="">
                            Cidade <br />
                            <input type="text" onChange={cidadeBlur} {...register("city")}  />
                        </label>
                        <label htmlFor="">
                            Bairro <br />
                            <input type="text" onChange={bairroBlur} {...register("neighborhood")}  />
                        </label>
                        <label htmlFor="">
                            Rua <br />
                            <input type="text" onChange={ruaBlur} {...register("address")}  />
                        </label>
                    </div>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Numero <br />
                            <input type="text" onChange={numeroBlur} {...register("addressNumber")}  />
                        </label>
                        <label htmlFor="">
                            Complemento <br />
                            <input type="text" {...register("complement")}  />
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
