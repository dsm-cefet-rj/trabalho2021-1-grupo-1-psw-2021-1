export default function ClientProfile() {
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

                <article class="article-cards">
                    <img src="public/images/tattoo exemplo.jpg" alt="Imagem da tatuagem 1" class="tattoo-art" />
                    <h4>Feita por <a href="Perfil_tatuador.html">@cleitin</a></h4>
                    <p>R$ 100,00</p>
                    <button type="button">
                        <img src="public/images/pen.svg" />
                    </button>
                </article>
                <article class="article-cards">
                    <img src="public/images/tattoo exemplo.jpg" alt="Imagem da tatuagem 2" class="tattoo-art" />
                    <h4>Feita por <a href="Perfil_tatuador.html">@cleitin</a></h4>
                    <p>R$ 100,00</p>
                    <button type="button">
                        <img src="public/images/pen.svg" />
                    </button>
                </article>
                <article class="article-cards">
                    <img src="public/images/tattoo exemplo.jpg" alt="Imagem da tatuagem 3" class="tattoo-art" />
                    <h4>Feita por <a href="Perfil_tatuador.html">@cleitin</a></h4>
                    <p>R$ 100,00</p>
                    <button type="button">
                        <img src="public/images/pen.svg" />
                    </button>
                </article>
                <article class="article-cards">
                    <img src="public/images/tattoo exemplo.jpg" alt="Imagem da tatuagem 3" class="tattoo-art" />
                    <h4>Feita por <a href="Perfil_tatuador.html">@cleitin</a></h4>
                    <p>R$ 100,00</p>
                    <button type="button">
                        <img src="public/images/pen.svg" />
                    </button>
                </article>
            </section>

            <nav id="nav-container">
                <ul>
                    <a href="Index.html">
                        <img src="public/images/home.svg" style="color: white;" />
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