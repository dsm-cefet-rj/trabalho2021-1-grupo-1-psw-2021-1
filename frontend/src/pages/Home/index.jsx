import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Card from "../../components/Card"

import { api } from "../../services/api";

import "../../styles/Home.css"

export default function Home() {

    let [tattoos, setTattoos] = useState([]);
    let [tatuadores, setTatuadores] = useState([])

    useEffect(() => {
        const cards = document.querySelectorAll(".cards");

        Array.from(cards);
        cards.forEach(card => {
            card.addEventListener("mouseenter", (e) => {
                card.lastChild.classList.add("art-info-animation");
                card.lastChild.childNodes[2].style.fontSize = "initial";
                card.lastChild.childNodes[2].style.fontWeight = "initial";
                card.lastChild.childNodes[2].style.marginTop = "0";
                card.lastChild.childNodes[2].style.backgroundColor = "transparent";
            })

            card.addEventListener("mouseleave", (e) => {
                card.lastChild.classList.remove("art-info-animation");
                card.lastChild.childNodes[2].style.backgroundColor = "rgba(255, 255, 255, 0.875)";
                card.lastChild.childNodes[2].style.fontSize = "20px";
                card.lastChild.childNodes[2].style.fontWeight = "bold";
                card.lastChild.childNodes[2].style.marginTop = "150px";
            })
        })
    })

    useEffect(async () => {
        const { data } = await api.get("/tattoos");
        setTattoos(data);
    }, []);

    useEffect(async () => {
        const { data } = await api.get("/users")
        setTatuadores(data)
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
                                <Card  key={tattoo.id} name={tattoo.name} disc={tattoo.description} image={tattoo.image} preco={tattoo.preco} link={"profile/" + tattoo.user_id} login={tatuadores.map(tatuador => { if (tatuador.id == tattoo.user_id) { return tatuador.name }})} />
                            )
                        })
                    }
                </div>
            </section>
        </div>
    )
}