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
    const[compremento,setCompremento]= useState();

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
                comprement:compremento,
            
            }
        }
        
        localStorage.setItem('Receber', JSON.stringify(receiver))
        navigate({
            pathname:'/pacote'
        })

    }
    const nameBlur= (event) =>{
        setNome(event.target.value)
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
                            <input type="text" onChange={nameBlur}   value={nome} id="" />
                        </label>
                        <label htmlFor="">
                            CPF <br />
                            <input type="text" onChange={CampoCpf} required value={valorCpf}  id="" />
                        </label>
                        <label htmlFor="">
                            Telefone <br />
                            <input type="text" onChange={CampoPhone} required value={phoneValor}  id="" />
                        </label>
                        <label htmlFor="">
                            email <br />
                            <input type="text" name="" required onChange={EmailChange} {...register("email")} id="" />
                        </label>
                    </div>
                    
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            CEP <br />
                            <input {...register("cep")} onChange={checkCEP} value={cep} required type="text" />
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
                            <input type="text"  value={numero} onChange={(e) => setNumero(e.target.value)}  />
                        </label>
                        <label htmlFor="">
                            Complemento <br />
                            <input type="text" value={compremento} onChange={(e) => setCompremento(e.target.value)}  />
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