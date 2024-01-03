import { useState } from "react";
import "../../../App.css"
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { cpfMask, phoneMask } from "../../mask";

const InputsReceiver = () =>{
    const [valorCpf, setValorCpf] = useState(''); // constantes para o input cpf
    const [phoneValor, setPhoneValor] = useState('')
    const {register, setValue, focus} = useForm();
    const [cep,SetCep] = useState();
    const[nome,setNome] = useState();
    const [email,SetEmail] = useState();
    const [estado,Setestado]=useState();
    const [cidade,SetCidade]=useState();
    const[numero,setNumero]= useState();
    const [rua,setRua]=useState();
    const [bairro,setBairro]=useState();

    const navigate = useNavigate();
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
                complement:null,
            
            }
        }
        
        localStorage.setItem('Receber', JSON.stringify(receiver))
        navigate({
            pathname:'/pacote'
        })

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
    const bairroBlur =(event)=>{
        setBairro(event.target.value)
        
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
            setValue('neighborhood', data.bairro);
            setValue('city',data.localidade);
            setValue('uf',data.uf);
            focus('addressNumber')
            
        });
        
    }
    const numeroBlur = (event)=>{
        setNumero(event.target.value)
    }
    return(
        <>

            <div className="grid-container">
                <div className="title">
                    <h2>Dados</h2>
                </div>
                <form>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Nome Completo <br />
                            <input type="text" onChange={Nomechange} required name="name" {...register("name")} id="" />
                        </label>
                        <label htmlFor="">
                            CPF <br />
                            <input type="text" onChange={CampoCpf} required value={valorCpf} name="cpf" id="" />
                        </label>
                        <label htmlFor="">
                            Telefone <br />
                            <input type="text" onChange={CampoPhone} required value={phoneValor} name="" id="" />
                        </label>
                        <label htmlFor="">
                            email <br />
                            <input type="text" name="" required onChange={EmailChange} {...register("email")} id="" />
                        </label>
                    </div>
                    
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            CEP <br />
                            <input {...register("cep")} onChange={CheckCep} required type="text" />
                        </label>
                        <label htmlFor="">
                            Estado <br />
                            <input type="text" onChange={estadoChange} required {...register("uf")}  />
                        </label>
                        <label htmlFor="">
                            Cidade <br />
                            <input type="text" onChange={cidadeChange} required {...register("city")}  />
                        </label>
                        <label htmlFor="">
                            Bairro <br />
                            <input type="text" onChange={bairroBlur} required {...register("neighborhood")}  />
                        </label>
                        <label htmlFor="">
                            Rua <br />
                            <input type="text" onChange={RuaChange} required {...register("address")}  />
                        </label>
                    </div>
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Numero <br />
                            <input type="text" required onChange={numeroBlur} {...register("addressNumber")}  />
                        </label>
                        <label htmlFor="">
                            Complemento <br />
                            <input type="text"  {...register("complement")}  />
                        </label>
                    </div>
                    <div className="flexBox">
                        <div className="formInput">
                            <button type="button" className="buttonSubmit" onClick={EnviarPacote}>Avançar</button>
                        </div>

                    </div>
                    

                </form>

            </div>
         
        </>
    )
}
export default InputsReceiver;