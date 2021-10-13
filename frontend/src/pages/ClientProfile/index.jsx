import Card from '../../components/Card';

import { useEffect } from 'react';

import "../../styles/ClientProfile.css";
import { api } from "../../services/api.js";
import axios from 'axios';



export default function ClientProfile() {
    let req = [];
    
    useEffect( async () => {
        console.log(axios.defaults.headers)
        req = {}  
    }, []);
    return (
        <main id="container">
            <header id="header-container">
                <section id="info-container">
                    <div id="img-container">
                        <img src={"/assets/images/img-profile.jpg"} alt="Imagem de perfil do tatuador" />
                    </div>
                    <h2 id="username">{req}</h2>
                    <button type="button" id="settings">
                        <img id="edit-icon" src={"/assets/images/edit.svg"} alt="Editar pergil" />
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
                <Card image="/assets/images/tattoo exemplo.jpg" preco="100,00" />
                <Card image="/assets/images/tattoo exemplo.jpg" preco="100,00" />
                <Card image="/assets/images/tattoo exemplo.jpg" preco="100,00" />
                <Card image="/assets/images/tattoo exemplo.jpg" preco="100,00" />
            </section>
        </main>

    )
}