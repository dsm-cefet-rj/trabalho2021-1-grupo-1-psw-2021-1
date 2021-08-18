import {useState} from 'react';

import Card from "../../components/Card";

import "../../styles/ProfessionalProfile.css";

export default function ProfessionalProfile() {

    let [follower, setFollower] = useState(818);
    let [follow, setFollow] = useState("Seguir");

    function handleFollow(){
        if(follow === "Seguindo"){
            return(setFollower(follower - 1), setFollow("Seguir"));
        } else {
            return(setFollower(follower + 1), setFollow("Seguindo"));
        }
    }

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
                    <button onClick={handleFollow}>{`${follow}`}</button>
                    <p>4.9</p>
                    <p>{follower}</p>
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
                        <img src="public/images/home.svg"/>
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