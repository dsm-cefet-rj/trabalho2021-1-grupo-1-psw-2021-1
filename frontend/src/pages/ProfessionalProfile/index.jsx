import "../../styles/ProfessionalProfile.css"
import Card from "../../components/Card"

export default function ProfessionalProfile() {
    return (
        <main id="container">
            <header id="header-container">
                <section id="info-container">
                    <div id="img-container">
                        <img src="public/images/img-profile.jpg" alt="Imagem de perfil do tatuador" />
                    </div>
                    <h2 id="username">Username</h2>
                    <button type="button" id="settings">
                        <img id="edit-icon" src="public/images/edit.svg" />
                    </button>
                    <p> Minus consequuntur natus quo, dignissimos laboriosam veniam inventore recusandae, distinctio est tempore facere.</p>
                </section>

                <div id="rating-container">
                    <h3>Nota</h3>
                    <h3>Fãs</h3>
                    <h3>Seguindo</h3>
                    <p>4.9</p>
                    <p>818</p>
                    <p>320</p>
                </div>
            </header>

            <section id="cards-container">

                <div id="post-options">
                    <button>Meu catálogo</button>
                    <button>Mais vendidas</button>
                </div>

                <Card image="./pen.svg" preco="R$ 100,00"/>
                <Card image="./pen.svg" preco="R$ 100,00"/>
                <Card image="./pen.svg" preco="R$ 100,00"/>
                <Card image="./pen.svg" preco="R$ 100,00"/>
            </section>

            <nav id="nav-container">
                <ul>
                    <a href="Index.html">
                        <img src="public/images/home.svg" style="color: white" />
                    </a>
                    <a href="Cadastro_tatuagem.html">
                        <img src="public/images/plus.svg" />
                    </a>
                    <a href="#">
                        <img src="public/images/message.svg" />
                    </a>
                </ul>
            </nav>
        </main>
    )
}