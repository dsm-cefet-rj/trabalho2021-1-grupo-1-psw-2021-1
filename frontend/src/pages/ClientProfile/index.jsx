import Card from '../../components/Card';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import jwt from 'jsonwebtoken';
import "../../styles/ClientProfile.css";
import { api } from "../../services/api.js";
import axios from 'axios';



export default function ClientProfile() {
    let [tattoos, setTattoos] = useState([]);
    let [user, setUser] = useState([]);
    let [tatuadores, setTatuadores] = useState([])

    console.log(user)
    console.log(tattoos)
    let token = "Bearer "+ localStorage.getItem("token")
    let id = jwt.decode(localStorage.getItem("token")).id
    console.log(id)
    useEffect( async () => {
        
        const { data } = await api.get("/tattoos/?_id="+id,{headers: {"auth": token,"Access-Control-Allow-Origin":"*"}});
        setTattoos(data);
    }, []);
    useState( async () => {
        const { data } = await api.get("/users/"+id,{headers: {"auth": token}});
        setUser(data[0]);
    }, []);
    useState(async () => {
        const { data } = await api.get("/users",{headers: {"Authorization": token}});
        setTatuadores(data);
    }, []);
    return (
        <main id="container">
            <header id="header-container">
                <section id="info-container">
                    <div id="img-container">
                        <img src={"/assets/images/img-profile.jpg"} alt="Imagem de perfil do tatuador" />
                    </div>
                    <h2 id="username">{user.username}</h2>
                    <button type="button" id="settings">
                        <Link to={"/profile/"+ id + "/newTattoo"}><img id="edit-icon" src={"/assets/images/edit.svg"} alt="Editar perfil" /></Link>
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
                {
                        tattoos.map(tattoo => {
                            return (
                                <Card  id={tattoo._id} name={tattoo.name} disc={tattoo.description} image={"/assets/images/tattoo exemplo.jpg"} preco={tattoo.preco} link={"profile/" + tattoo.user_id} login={tatuadores.map(tatuador => { if (tatuador.id == tattoo.user_id) { return tatuador.name }})} />
                            )
                        })
                }
            </section>
        </main>

    )
}