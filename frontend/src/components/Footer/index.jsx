import { Link } from "react-router-dom";
import "../../styles/Footer.css"

export default function Footer(props) {
    return (
        <>
            <footer id="footer-container">
                <div id="sign-in">
                    <Link to="/login">Entrar</Link>
                </div>
                <div id="social">
                    <a href="www.facebook.com"><img src={"/assets/images/facebook.svg"} alt="Logo" /></a>
                    <a href="www.instagram.com"><img src={"/assets/images/instagram.svg"} alt="Logo" /></a>
                    <a href="www.twitter.com"><img src={"/assets/images/twitter.svg"} alt="Logo" /></a>
                </div>
                <div id="copy">
                    <p>@Tatuando, 2021</p>
                </div>
            </footer>
        </>
    );
}