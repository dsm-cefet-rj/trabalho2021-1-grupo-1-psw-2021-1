import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Card from "../../components/Card"

import { api } from "../../services/api";

import "../../styles/Home.css"

export default function Home() {

    let [tattoos, setTattoos] = useState({});

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

    useEffect( async () => {
        setTattoos( await api.get("/tattoos"));
        console.log(tattoos)
    }, {});

    return (
        <>
            <header>
                <Link id="logo" to="/">
                    <img src="./Logo PSW.svg" alt="Logotipo do Tatuando" id="logo" />
                </Link>
            </header>
            <section>
                <div id="search-container">
                    <input type="search" placeholder="Encontre o que procura" />
                </div>
                <div id="feed-container">
                    <Card image="./exemplo2.jpg" preco="R$ 100,00" />
                    <Card image="./exemplo3.jpg" preco="R$ 350,00" />
                    <Card image="./exemplo4.jpg" preco="R$ 300,00" />
                    <Card image="./exemplo5.jpg" preco="R$ 270,00" />
                    <Card image="./exemplo6.jpg" preco="R$ 800,00" />
                    <Card image="./exemplo5.jpg" preco="R$ 270,00" />
                    <Card image="./exemplo6.jpg" preco="R$ 800,00" />
                </div>
            </section>
        </>
    )
}