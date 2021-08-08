export default function Card(props) {

    return (
        <article className="cards">
            <img src={props.image} alt="Imagem da tatuagem" />
            <div>
                <h6>Nome da tatuagem e descrição</h6>
                <a href="Perfil_tatuador.html">
                    <p>Username do tatuador</p>
                </a>
                <p>{props.preco}</p>
                <button className="btn-salvar">Salvar</button>
            </div>
        </article>
    )
}