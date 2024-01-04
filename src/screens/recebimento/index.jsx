import InputsReceiver from "../../components/forms/formReceiver";
import HeaderPostaAqui from "../../components/header";
import Informacoes from "../../components/render";


function PageDestinatario(){
    const Dadospos= JSON.parse(localStorage.getItem('dados'))
    console.log(Dadospos)
    return(
        <>
            <HeaderPostaAqui/>
            <br />
            <br />
            <div>
                <Informacoes name="Origen" data={Dadospos} link="/" style="card-infor orange" />

            </div>
            <br />
            <br />

            <InputsReceiver />
        </>
    )
}
export default PageDestinatario;