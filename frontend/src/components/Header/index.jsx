import { Link } from "react-router-dom";
import Cart from '../Cart';


import "../../styles/Header.css";

export default function Header() {

    function menu() {
        let nav = document.querySelector(".nav-menu");
        nav.classList.toggle("nav-menu-animation");
        if (nav.classList.length == 2) {
            nav.parentNode.style.height = "100%";
            nav.childNodes[0].style.height = "30%";
        }
        else {
            nav.parentNode.style.height = "auto";
            nav.childNodes[0].style.height = "0";
        }
    }


    return (
        <header id="profile-settings">
            <span id="botao-span" onClick={menu}><img src={"/assets/images/menu.svg"} alt="Botão menu" id="menu-img"></img></span>
            <nav className="nav-menu">
                <ul id="nav-ul">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/me">Me</Link>
                    </li>
                    <li>
                        <Link to="/tatuadorId"> Seguindo </Link>
                    </li>
                    <li>
                        <Link to="#"> Para Você </Link>
                    </li>
                    <li>
                        <Cart></Cart>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

