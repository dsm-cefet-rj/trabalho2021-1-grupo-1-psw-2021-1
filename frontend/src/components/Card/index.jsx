import "../../styles/Card.css";

export default function Card(props) {

    return (
        <article className="cards">
            <img src={props.image} alt="Imagem da tatuagem" />
            <div className="art-info">
                <h6>Nome da tatuagem e descrição</h6>
                <a href="Perfil_tatuador.html">
                    Feita por: {props.login}
                </a>
                <p>{props.preco}</p>
                <button className="btn-salvar">Salvar</button>
            </div>
        </article>
    )
}