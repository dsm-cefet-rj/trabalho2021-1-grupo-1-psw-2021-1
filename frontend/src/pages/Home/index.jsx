export default function Home() {
    return (
        <>
            <header>
                <a id="logo" href="Index.html">
                    <img src="public/images/Logo PSW.svg" alt="Logotipo do Tatuando" id="logo" />
                </a>
            </header>

            <section>
                <div id="search-container">
                    <input type="search" placeholder="Encontre o que procura" />
                </div>
                <div id="profile-settings">
                    <button>Seguindo</button>
                    <button>Para você</button>
                </div>
                <div id="feed-container">

                    <article class="cards">
                        <img src="./public//images/exemplo1.jpg" alt="Imagem da tatuagem" />
                        <div>
                            <h6>Nome da tatuagem e descrição</h6>
                            <a href="Perfil_tatuador.html">
                                <p>Username do tatuador</p>
                            </a>
                            <p>R$ 100,00</p>
                            <button class="btn-salvar">Salvar</button>
                        </div>
                    </article>
                    <article class="cards">
                        <img src="./public/images/exemplo2.jpg" alt="Imagem da tatuagem" />
                        <div>
                            <h6>Nome da tatuagem e descrição</h6>
                            <a href="Perfil_tatuador.html">
                                <p>Username do tatuador</p>
                            </a>
                            <p>R$ 100,00</p>
                            <button class="btn-salvar">Salvar</button>
                        </div>
                    </article>
                    <article class="cards">
                        <img src="./public/images/exemplo3.jpg" alt="Imagem da tatuagem" />
                        <div>
                            <h6>Nome da tatuagem e descrição</h6>
                            <a href="Perfil_tatuador.html">
                                <p>Username do tatuador</p>
                            </a>
                            <p>R$ 100,00</p>
                            <button class="btn-salvar">Salvar</button>
                        </div>
                    </article>
                    <article class="cards">
                        <img src="./public/images/exemplo4.jpg" alt="Imagem da tatuagem" />
                        <div>
                            <h6>Nome da tatuagem e descrição</h6>
                            <a href="Perfil_tatuador.html">
                                <p>Username do tatuador</p>
                            </a>
                            <p>R$ 100,00</p>
                            <button class="btn-salvar">Salvar</button>
                        </div>
                    </article>
                    <article class="cards">
                        <img src="./public/images/exemplo5.jpg" alt="Imagem da tatuagem" />
                        <div>
                            <h6>Nome da tatuagem e descrição</h6>
                            <a href="Perfil_tatuador.html">
                                <p>Username do tatuador</p>
                            </a>
                            <p>R$ 100,00</p>
                            <button class="btn-salvar">Salvar</button>
                        </div>
                    </article>
                    <article class="cards">
                        <img src="./public/images/exemplo6.jpg" alt="Imagem da tatuagem" />
                        <div>
                            <h6>Nome da tatuagem e descrição</h6>
                            <a href="Perfil_tatuador.html">
                                <p>Username do tatuador</p>
                            </a>
                            <p>R$ 100,00</p>
                            <button class="btn-salvar">Salvar</button>
                        </div>
                    </article>
                </div>
            </section>
            <nav>
                <ul id="ul">
                    <a href="Perfil_cliente.html" class="nav-link">
                        <li>Meu perfil</li>
                    </a>
                    <a href="Perfil_tatuador.html" class="nav-link">
                        <li>Tatuador</li>
                    </a>
                    <a href="#" class="nav-link">
                        <li>Configurações</li>
                    </a>
                </ul>
            </nav>
        </>
    )
}