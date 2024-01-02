import { useState } from "react";

const InputsReceiver = () =>{
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
    return(
        <>
         <div className="container">
            
         </div>
        </>
    )
}