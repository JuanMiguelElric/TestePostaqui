import { useState } from "react";
import "../../App.css"
import HeaderPostaAqui from "../../components/header";
import { cpfMask, phoneMask } from "../../components/mask";
import { useForm } from "react-hook-form";

const InputsReceiver = () =>{
    const [valorCpf, setValorCpf] = useState(''); // constantes para o input cpf
    const [phoneValor, setPhoneValor] = useState('')
    const {register, setValue, focus} = useForm();
    {/*
    const[nome,setNome] = useState();
    const [email,SetEmail] = useState();
    const [cep,SetCep] = useState();
    const [estado,Setestado]=useState();
    const [cidade,SetCidade]=useState();
    const [rua,setRua]=useState();
    const [bairro,setBairro]=useState();
    const[numero,setNumero]= useState();

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
    */}
    function CampoPhone(event){
        const {value} = event.target;
        setPhoneValor(phoneMask(value));
    }
    function CampoCpf(event){
        const {value}=event.target;
        setValorCpf(cpfMask(value));
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
            <HeaderPostaAqui />
            <div className="grid-container">
                <div className="title">
                    <h2>Daods</h2>
                </div>
                <form action="">
                    <div className="InputsdePreenchimento">
                        <label htmlFor="">
                            Nome Completo <br />
                            <input type="text" name="" id="" />
                        </label>
                        <label htmlFor="">
                            CPF <br />
                            <input type="text" onChange={CampoCpf} value={valorCpf} name="" id="" />
                        </label>
                        <label htmlFor="">
                            Telefone <br />
                            <input type="text" onChange={CampoPhone} value={phoneValor} name="" id="" />
                        </label>
                        <label htmlFor="">
                            email <br />
                            <input type="text" name="" id="" />
                        </label>
                    </div>
                    
                    <div className="InputsPreenchimento">
                        <label htmlFor="">
                            Cep 
                            <input {...register("cep")} onChange={CheckCep} type="text" />
                        </label>
                        <label htmlFor="">
                            Estado 
                            <input {...register("uf")} type="text" />
                        </label>
                        <label htmlFor="">
                            cidade 
                            <input {...register("city")} type="text" />
                        </label>
                        <label htmlFor="">
                            bairro
                            <input {...register("neighbothood")} type="text" />
                        </label>
                        <label htmlFor="">
                            rua 
                            <input type="text" name="" id="" />
                        </label>
                        
                    </div>
                    <div className="InputsPreenchimento">
                        <label htmlFor="">
                            Numero
                            <input type="text" {...register("addressNumber")} />
                        </label>
                        <label htmlFor="">
                            Complemento
                            <input type="text" />
                        </label>
                        
                    </div>
                    

                </form>

            </div>
         
        </>
    )
}
export default InputsReceiver;