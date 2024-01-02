import React from "react";
import LogoPostAqui from "../../image/postaqui.png";



const HeaderPostaAqui = () =>{
    return(
        <>
            <div className="container">
                <div className="containerLogo">
                    <img src={LogoPostAqui} className="logo" alt="" />
                    <h1 style={{ fontSize: "36px" }}>Teste Calculadora Postaqui</h1>
                    
                </div>

            </div>
        </>
    )
}
export default HeaderPostaAqui;