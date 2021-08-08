import Card from "../../components/Card"
import "../../styles/Home.css"

export default function Home() {
    return (
        <>
            <header>
                <a id="logo" href="Index.html">
                    <img src="./Logo PSW.svg" alt="Logotipo do Tatuando" id="logo"/>
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
                    <Card image="./exemplo1.jpg" preco="R$ 500,00"/>
                    <Card image="./exemplo2.jpg" preco="R$ 100,00"/>
                    <Card image="./exemplo3.jpg" preco="R$ 350,00"/>
                    <Card image="./exemplo4.jpg" preco="R$ 300,00"/>
                    <Card image="./exemplo5.jpg" preco="R$ 270,00"/>
                    <Card image="./exemplo6.jpg" preco="R$ 800,00"/>
                </div>
            </section>
            <nav>
                <ul id="ul">
                    <a href="Perfil_cliente.html" className="nav-link">
                        <li>Meu perfil</li>
                    </a>
                    <a href="Perfil_tatuador.html" className="nav-link">
                        <li>Tatuador</li>
                    </a>
                    <a href="#" className="nav-link">
                        <li>Configurações</li>
                    </a>
                </ul>
            </nav>
        </>
    )
}