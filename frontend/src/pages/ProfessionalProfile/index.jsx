import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { api } from "../../services/api";
import Card from "../../components/Card";

import "../../styles/ProfessionalProfile.css";

export default function ProfessionalProfile() {

    let [follower, setFollower] = useState(818);
    let [follow, setFollow] = useState("Seguir");
    let [tatuagens, setTatuagens] = useState([]);

    

    function handleFollow(){
        if(follow === "Seguindo"){
            return(setFollower(follower - 1), setFollow("Seguir"));
        } else {
            return(setFollower(follower + 1), setFollow("Seguindo"));
        }
    }

    useEffect(async () => {
        const {data} = await api.get("/tatuador?:2")
        setTatuagens(data[0].tattoos);
        console.log(data[0].tattoos)
    }, []);

    return (
        <main id="container">
            <header id="header-container">
                <section id="info-container">
                    <div id="img-container">
                        <img src="./img-profile.jpg" alt="Imagem de perfil do tatuador" />
                    </div>
                    <h2 id="username">Username</h2>
                    <button type="button" id="settings">
                        <img id="edit-icon" src="./edit.svg" alt="editar" />
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

                {
                    tatuagens.map(tatuagem => {
                            const id_tattoo = tatuagem.id
                            const link = "/editTattoo/2/"+ id_tattoo
                            return (<Link to={link}> <Card image={tatuagem.image} preco={tatuagem.preco} /> </Link>)}
                        ) 
                }
            </section>


             {/* COMENTANDO APENAS O SEGUNDO MENU, NÃO COMPONENTIZADO 

             <nav id="nav-container">
                <ul>
                    <Link to="/">
                        <img src="./home.svg" alt="Home"/>
                    </Link>
                    <Link to="/signUp">
                        <img src="./plus.svg" alt="Adicionar"/>
                    </Link>
                    <Link to="#">
                        <img src="./message.svg" alt="Mensagem"/>
                    </Link>
                </ul>
            </nav>
            
            */}
        </main>
    )
}