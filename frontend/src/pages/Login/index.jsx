import '../../styles/Login.css';
import {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { loginSchema } from "../../schemas/loginSchema.js";

export default function Login() {

    const history = useHistory()

    let [user,setUser] = useState({email:"",senha:""})
 
    let [errors, setError] = useState({
        email: "",
        senha: "",
    });
    
    console.log(errors)

    async function onSubmit(event) {
        event.preventDefault();
        let find = false
        const valid_bool = await loginSchema.isValid(user)
        if(valid_bool)
        {
            history.push("/me/")
        }
        else
        {
            loginSchema.validate(user, {abortEarly: false }).catch(function (err) {
                let email,senha = ""
                err.inner.forEach(e => {
                    let {path, message} = e;
                    if (path === "email") {
                        email = message
                    }
                    else if (path === "senha") {
                        senha = message
                    }
                })
                setError({
                    email,
                    senha,
                })
            })
        }
    }

    function onChange(event)
    {
        const {name, value} = event.target;
        if (name === "username") {
            setUser({ ...user, email: value })
        }
        else if (name === "password") {
            setUser({ ...user, senha: value })
        }
    }
    return (
        <div id="login-container">
            <div id="form-login-container">
                <div id="logo-login-container">
                    <img id="logo-login" src={"/assets/images/Logo_PSW_sem_texto.svg"}></img>
                </div>

                <h1>Login</h1>

                <form id="form-login" action="#" method="POST">
                    <input type="text" name="username" placeholder="Email" onChange={onChange}></input>
                    <p className="error"> {errors.email} </p>
                    <input type="password" name="password" placeholder="Senha" onChange={onChange}></input>
                    <p className="error"> {errors.senha} </p>
                    <button type="submit" id="login-button" onClick={onSubmit}><Link href="/me">Entrar</Link></button>
                </form>

                <a id="forgot-password" href="#">Esqueceu sua senha?</a>
            </div>
            <div id="image-login-container">
                <img id="image-login" src={"/assets/images/banner-login.jpg"}></img>
            </div>
        </div>
    )
}