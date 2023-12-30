import React, { useState } from "react";
import LogoPostAqui from "../../image/postaqui.png";
import "../../App.css";
import { cpfMask, phoneMask } from "../../components/mask";
import { useForm } from 'react-hook-form';

const PageHome = () => {
    const { register, handleSubmit, setValue, focus } = useForm();
    const [valor, setValor] = useState(''); // constantes para o input cpf
    const [phoneValor, setPhoneValor] = useState('')
    const [senderUser,setSenderuser] = useState({
        name:'',
        cpf:'',
        phone:'',
        email:'',
        address:{
            cep:'',
            state:'',
            uf:'',
            city:'',
            neighborhood:'',
            street:'',
            number:'',
            complement:''
        }
    });
    const MudacasInputs =(e)=>{
        const {name,value}= e.target;
        setSenderuser({
            ...senderUser,
            [name]:value,
        });
    };
    function onSubmit(e) {
        console.log(e);
    }

    function CampoCpf(event) {
        const { value } = event.target;
        setValor(cpfMask(value)); // mascara campo cpf
    }

    function handlePhone(event) {
        const { value } = event.target;
        setPhoneValor(phoneMask(value));
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
            <div className="container">
                <div className="containerLogo">
                    <img src={LogoPostAqui} className="logo" alt="" />
                    <h1 style={{ fontSize: "36px" }}>Teste Calculadora Postaqui</h1>
                </div>
            </div>
            <div className="grid-container">
                <div className="title">
                    <h2>Dados de Origem</h2>
                </div>
                <br />
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Nome completo <br />
                            <input type="text" {...register("fullName")} />
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
                            <input type="text" {...register("email")} />
                        </label>
                    </div>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            CEP <br />
                            <input {...register("cep")} onChange={checkCEP} type="text" />
                        </label>
                        <label htmlFor="">
                            Estado <br />
                            <input type="text" {...register("uf")} />
                        </label>
                        <label htmlFor="">
                            Cidade <br />
                            <input type="text" {...register("city")} />
                        </label>
                        <label htmlFor="">
                            Bairro <br />
                            <input type="text" {...register("neighborhood")} />
                        </label>
                        <label htmlFor="">
                            Rua <br />
                            <input type="text" {...register("address")} />
                        </label>
                    </div>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Numero <br />
                            <input type="text" {...register("addressNumber")} />
                        </label>
                        <label htmlFor="">
                            Complemento <br />
                            <input type="text" {...register("complement")} />
                        </label>
                    </div>
                </form>
            </div>
        </>
    );
}

export default PageHome;
