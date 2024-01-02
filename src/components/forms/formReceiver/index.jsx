import { useState } from "react";
import "../../../App.css"

import { useForm } from "react-hook-form";
import { cpfMask, phoneMask } from "../../mask";

const InputsReceiver = () =>{
    const [valorCpf, setValorCpf] = useState(''); // constantes para o input cpf
    const [phoneValor, setPhoneValor] = useState('')
    const {register, setValue, focus} = useForm();
    const[nome,setNome] = useState();
    const [email,SetEmail] = useState();
    const [estado,Setestado]=useState();
    const [cidade,SetCidade]=useState();
    const [rua,setRua]=useState();
    const [bairro,setBairro]=useState();
    function EnviarPacote(){
        const receiver = {
            fullname:nome,
            cpf:valorCpf,
            phone:phoneValor,
            email: email,
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
        const searchParams = new URLSearchParams();
        searchParams.append('sender',JSON.stringify(sender));
        searchParams.append('receiver',JSON.stringify(receiver))

    }

    function Nomechange(event){
        setNome("nome",event.target.value)
    }
    function CampoPhone(event){
        const {value} = event.target;
        setPhoneValor(phoneMask(value));
    }
    function CampoCpf(event){
        const {value}=event.target;
        setValorCpf(cpfMask(value));
    }
    function EmailChange(event){
        SetEmail(event.target.value)
    }
    function estadoChange(event){
        Setestado(event.target.value)
    }
    function cidadeChange(event){
        SetCidade(event.target.value)
    }
    function RuaChange(event){
        setRua(event.target.value)
    }
    const CheckCep =(e)=>{
        const cep = e.target.value.replace(/\D/g,'');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res=>res. json()).then(data=>{
            console.log(data);
            setValue('address',data.logradouro);
            setValue('neighbirhood',data.bairro);
            setValue('city',data.localidade);
            setValue('uf',data.uf);
            focus('addressNumber')
            
        });
    }
    return(
        <>

            <div className="grid-container">
                <div className="title">
                    <h2>Daods</h2>
                </div>
                <form action="">
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Nome Completo <br />
                            <input type="text" onChange={Nomechange} name="name" {...register("name")} id="" />
                        </label>
                        <label htmlFor="">
                            CPF <br />
                            <input type="text" onChange={CampoCpf} value={valorCpf} name="cpf" id="" />
                        </label>
                        <label htmlFor="">
                            Telefone <br />
                            <input type="text" onChange={CampoPhone} value={phoneValor} name="" id="" />
                        </label>
                        <label htmlFor="">
                            email <br />
                            <input type="text" name="" onChange={EmailChange} {...register("email")} id="" />
                        </label>
                    </div>
                    
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            CEP <br />
                            <input {...register("cep")} onChange={CheckCep}  type="text" />
                        </label>
                        <label htmlFor="">
                            Estado <br />
                            <input type="text" onChange={estadoChange} {...register("uf")}  />
                        </label>
                        <label htmlFor="">
                            Cidade <br />
                            <input type="text" onChange={cidadeChange} {...register("city")}  />
                        </label>
                        <label htmlFor="">
                            Bairro <br />
                            <input type="text"  {...register("neighborhood")}  />
                        </label>
                        <label htmlFor="">
                            Rua <br />
                            <input type="text" onChange={RuaChange} {...register("address")}  />
                        </label>
                    </div>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Numero <br />
                            <input type="text"  {...register("addressNumber")}  />
                        </label>
                        <label htmlFor="">
                            Complemento <br />
                            <input type="text" {...register("complement")}  />
                        </label>
                    </div>
                    <div className="flexBox">
                        <div className="formInput">
                            <button className="buttonSubmit" onClick={EnviarPacote}>Avançar</button>
                        </div>

                    </div>
                    

                </form>

            </div>
         
        </>
    )
}
export default InputsReceiver;