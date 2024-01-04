import "./style/index.css"
export default function Informacoes({ name, data, link, style }) {
    console.log("Dados em Informacoes:", data);

    return (
        <a href={link}>
            <div className={style}>
                <h3 >{name}</h3>
                <p>{data.fullname}-{data.cpf} <br />
                    {data.address.cep}-{data.address.state}- {data.address.neighborhood}
                    {data.address.city}-{data.address.street}-{data.address.number}-{data.address.comprement} <br />
                    </p>
            </div>
        </a>
    );
}
