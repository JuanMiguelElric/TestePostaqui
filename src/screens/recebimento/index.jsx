import { useState } from "react";
import HeaderPostaAqui from "../../components/header";
import { cpfMask, phoneMask } from "../../components/mask";

const InputsReceiver = () =>{
    const [valorCpf, setValorCpf] = useState(''); // constantes para o input cpf
    const [phoneValor, setPhoneValor] = useState('')
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
    return(
        <>
            <HeaderPostaAqui />
            <div className="grid-container">
                <div className="title">
                    <h2>Daods</h2>
                </div>

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
            </div>
         
        </>
    )
}
export default InputsReceiver;