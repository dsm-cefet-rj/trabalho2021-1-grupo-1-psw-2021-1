import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Card from "../../components/Card"

import { api } from "../../services/api";

import "../../styles/Home.css"

export default function Home() {
    
    let token = "Bearer "+ localStorage.getItem("token")
    console.log(token)
    let [tattoos, setTattoos] = useState([]);
    let [tatuadores, setTatuadores] = useState([])
    
    useEffect(async () => {
        const { data } = await api.get("/tattoos",{headers: {"Authorization": token}});
        setTattoos(data);
    }, []);

    return (
        <div>
            <header>
                <Link id="logo" to="/">
                    <img src={"/assets/images/Logo_PSW.svg"} alt="Logotipo do Tatuando" id="logo" />
                </Link>
            </header>
            <section>
                <div id="search-container">
                    <input type="search" placeholder="Encontre o que procura" id="search-input" />
                </div>
                <div id="feed-container">
                    {
                        tattoos.map(tattoo => {
                            return (
                                <Card  id={tattoo._id} name={tattoo.name} disc={tattoo.description} image={tattoo.image} preco={tattoo.preco} link={"profile/" + tattoo.user_id} login={tatuadores.map(tatuador => { if (tatuador.id == tattoo.user_id) { return tatuador.name }})} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}