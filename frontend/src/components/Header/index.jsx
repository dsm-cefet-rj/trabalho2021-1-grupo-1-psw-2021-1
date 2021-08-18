import "../../styles/Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header id="profile-settings">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/me">me</Link>
                </li>
                <li>
                    <Link to="/tatuadorId"> Seguindo </Link>
                </li>
                <li>
                    <Link to="#"> Para Você </Link>
                </li>
            </ul>
        </header>
    )
}