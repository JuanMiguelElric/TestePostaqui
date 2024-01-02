import { useState } from "react";

function FormularioPacote({name,sender,receiver}){
    return(
        <div className="grid-container">
            <div className="title">
                <h2>{name}</h2>
            </div>
            <div className="InputsdePreenchimento">
                <div className="items-center vertical">
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
                <div className="items-center vertical">
                    <label htmlFor="">Logistica Reversa
                        <input type="checkbox" name="logistica Reversa" id="" />
                    </label>
                    <label htmlFor="">Logistica Reversa
                        <input type="checkbox" name="logistica Reversa" id="" />
                    </label>
                    <label htmlFor="">Logistica Reversa
                        <input type="checkbox" name="logistica Reversa" id="" />
                    </label>
                </div>
            </div>
        </div>
    )
}
export default FormularioPacote;