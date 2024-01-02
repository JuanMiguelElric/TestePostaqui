import InputsReceiver from "../../components/forms/formReceiver";
import HeaderPostaAqui from "../../components/header";
import Informacoes from "../../components/render";


function PageDestinatario(){
    return(
        <>
            <HeaderPostaAqui/>{/*
            <div className="infor">
                <Informacoes />
    </div>*/}
            <InputsReceiver />
        </>
    )
}
export default PageDestinatario;