import { useState } from "react";
import "../../../index.css"

function FormularioPacote({name,sender,receiver}){
    return(
        <div className="grid-container">
            <div className="title">
                <h2>{name}</h2>
            </div>
            <div className="InputsdePreenchimento">
                <div className="  items-center vertical">
                    <label htmlFor="">Peso <br />
                        <input type="text" />
                    </label>
                    <label htmlFor="">
                        Peso <br />
                        <input type="text" />
                    </label>
                    <label htmlFor="">Peso <br />
                        <input type="text" />
                    </label>
                    <label htmlFor="">Peso <br />
                        <input type="text" />
                    </label>

                </div>

            </div>
            <div className="InputsdePreenchimento">
                
                <div className=" items-center vertical">
                    
                    <div className="formInput items-center">
                        <label htmlFor="">Logistica Reversa</label>
                        <input type="checkbox" className="checkInput" />

                    </div>
                    <div className="formInput items-center">
                        <label htmlFor="">Aviso de Recebimento</label>
                        <input className="checkInput" type="checkbox" />

                    </div>
                    <div className="formInput items-center">
                        <label htmlFor="">Mãos próprias</label>
                        <input type="checkbox" />

                    </div>

                </div>
            </div>
            <div className="InputsdePreenchimento ">
                <div className="flex widthTotal">
                    <div className="flexBox items-center vertical">
                        <div className=" horizontal">
                            <div className=" formInput" >
                                <label htmlFor="">
                                <input type="text" />

                                </label>

                            </div>
                            <div className="formInput">

                                <label htmlFor="">

                                <input type="text" name="" id="" />
                                </label>
                            </div>

                        </div>
                        <div className="flexBox widthTotal">
                            <div className="formInput">
                                <input type="text" className="descricao" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default FormularioPacote;