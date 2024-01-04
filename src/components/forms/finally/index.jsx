import React from "react";

export default function ForFinally({ name, shipment }) {
  if (!shipment || shipment.length === 0) {
    // Adicione verificação para garantir que há envios para processar
    return <p>Nenhum envio disponível.</p>;
  }

  let price = shipment[0].price; // Inicialize com o primeiro preço do envio
  let cheaper = shipment[0]; // Inicialize com o primeiro envio

  for (let i = 1; i < shipment.length; i++) {
    if (shipment[i].price < price) {
      price = shipment[i].price;
      cheaper = shipment[i];
    }
  }

  return (
    <>
      <div className="grid-container">
        <div className="widthTotal vertical">
          <h3 >{name}</h3>
          <p>
            O melhor frete para o seu destino é da {cheaper.carrier} e tem o valor de
            R${cheaper.price} com entrega no prazo de 5 dias úteis.
          </p>
          <p>Sua economia foi de R${cheaper.discount}</p>
        <div className="flexBox ">
          <div className="formInput">
            <button className="buttonSubmit"  >Avançar</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
