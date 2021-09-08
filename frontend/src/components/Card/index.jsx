import "../../styles/Card.css";

export default function Card(props) {

    return (
        <article className="cards">
            <img src={props.image} alt="Imagem da tatuagem" />
            <div className="art-info">
                <h6>{props.name}, {props.disc}</h6>
                <a href={props.link}>
                    Feita por: @{props.login}
                </a> 
                <p>{`R$ ${props.preco.toString()}`}</p>
                <button className="btn-salvar">Salvar</button>
                <button className="btn-comprar">Comprar</button>
            </div>
        </article>
    )
}
