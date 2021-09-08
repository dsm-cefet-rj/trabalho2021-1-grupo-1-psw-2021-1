import '../../styles/Login.css';

export default function Login() {
    return (
        <div id="login-container">
            <div id="form-login-container">
                <div id="logo-login-container">
                    <img id="logo-login" src={"/assets/images/Logo_PSW_sem_texto.svg"}></img>
                </div>

                <h1>Login</h1>

                <form id="form-login" action="#" method="POST">
                    <input type="text" name="username" placeholder="Nome de usuário"></input>
                    <input type="password" name="password" placeholder="Senha"></input>
                    <button type="submit" id="login-button">Entrar</button>
                </form>

                <a id="forgot-password" href="#">Esqueceu sua senha?</a>
            </div>
            <div id="image-login-container">
                <img id="image-login" src={"/assets/images/banner-login.jpg"}></img>
            </div>
        </div>
    )
}