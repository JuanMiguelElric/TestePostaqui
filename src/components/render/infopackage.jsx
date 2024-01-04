import "./style/index.css"
export default function InformacoesPacote({ name, data, link, style }) {
    console.log("Dados em Informacoes:", data);

    return (
        <a href={link}>
            <div className={style}>
                <h3 >{name}</h3>
                <p>AxLxC: {data.weight}-{data.height}-{data.width} <br />
                    Logistica Reversa: {data.reverse}<br/>
                    Mãos Próprias: {data.information.ownhands} <br />
                    valor Mercadoria :R$ {data.information.amount}
                    </p>
            </div>
        </a>
    );
}
