import "../../styles/Footer.css"

export default function Footer(props) {
    return (
        <>
            <footer id="footer-container">
                <div id="sign-in">
                    <a href="#">Entrar</a>
                </div>
                <div id="social">
                    <a href="#"><img src="./facebook.svg" alt="Logo" /></a>
                    <a href="#"><img src="./instagram.svg" alt="Logo" /></a>
                    <a href="#"><img src="./twitter.svg" alt="Logo" /></a>
                </div>
                <div id="copy">
                    <p>@Tatuando, 2021</p>
                </div>
            </footer>
        </>
    );
}