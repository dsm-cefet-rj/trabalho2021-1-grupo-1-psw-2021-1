import Card from '../../components/Card';

import "../../styles/ClientProfile.css";

export default function ClientProfile() {
    return (
        <main id="container">
            <header id="header-container">
                <section id="info-container">
                    <div id="img-container">
                        <img src="./img-profile.jpg" alt="Imagem de perfil do tatuador" />
                    </div>
                    <h2 id="username">Username</h2>
                    <button type="button" id="settings">
                        <img id="edit-icon" src="./edit.svg" />
                    </button>
                    <p> Minus consequuntur natus quo, dignissimos laboriosam veniam inventore recusandae, distinctio est tempore facere.</p>
                </section>

                <div id="rating-container">
                    <h3>Tatuagens</h3>
                    <h3>Seguidores</h3>
                    <h3>Seguindo</h3>
                    <p>3</p>
                    <p>127</p>
                    <p>63</p>
                </div>
            </header>

            <section id="cards-container">

                <div id="post-options">
                    <button>Minhas tattos</button>
                    <button>Tatuadores</button>
                </div>
                <Card image="./tattoo exemplo.jpg"preco="R$ 100,00"/>
                <Card image="./tattoo exemplo.jpg"preco="R$ 100,00"/>
                <Card image="./tattoo exemplo.jpg"preco="R$ 100,00"/>
                <Card image="./tattoo exemplo.jpg"preco="R$ 100,00"/>
            </section>
        </main>

    )
}