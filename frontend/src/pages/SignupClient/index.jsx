import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../services/api.js";

import { userSchema } from "../../schemas/userSchema.js";

import "../../styles/SignupClient.css";

export default function SignUpClient() {

    const history = useHistory();

    let [user, setUser] = useState({
        name: "",
        username: "",
        senha: "",
        confirm_senha: "",
        email: ""
    });
    let [errors, setError] = useState({
        name: "",
        username: "",
        senha: "",
        confirm_senha: "",
        email: ""
    });

    function onChange(event) {
        const { name, value } = event.target;
        if (name === "name") {
            setUser({ ...user, name: value })
        }
        else if (name === "password") {
            setUser({ ...user, senha: value })
        }
        else if (name === "username") {
            setUser({ ...user, username: value })
        }
        else if (name === "confirm_password") {
            setUser({ ...user, confirm_senha: value })
        }
        else if (name === "email") {
            setUser({ ...user, email: value })
        }
    };

    async function onSubmit(event) {
        event.preventDefault();
        const valid_bool = await userSchema.isValid(user)
        if (valid_bool) {
            await api.post(`/users/`, user);
            alert("Usuário cadastrado com sucesso")
            history.push("/login/")
        }
        else {
            userSchema.validate(user, {abortEarly: false }).catch(function (err) {
                let name, username, confirm_senha, senha, email;
                err.inner.forEach(e => {
                    let {path, message} = e;
                    if ( path === "name") {
                        name = message
                    }
                    else if (path === "senha") {
                        senha = message
                    }
                    else if (path === "username") {
                        username =  message 
                    }
                    else if (path === "confirm_senha") {
                        confirm_senha = message
                    }
                    else if (path === "email") {
                        email = message
                    }
                })
                setError({
                    name,
                    username,
                    senha,
                    confirm_senha,
                    email
                })
            })
    }
}
return (
    < div className="main-container" >
        <form action="#" id="form-container" method="POST" >
            <legend>Cadastro</legend>

            <label for="name" className="form-content">Nome completo</label>
            <input type="text" name="name" className="form-content" onChange={onChange} />
            <p className="error"> {errors.name} </p>

            <label for="username" className="form-content">Nome de usuário</label>
            <input type="text" name="username" className="form-content" onChange={onChange} />
            <p className="error"> {errors.username} </p>

            <label className="form-content">E-mail</label>
            <input type="email" className="form-content" name="email" onChange={onChange} />
            <p className="error"> {errors.email} </p>

            <label className="form-content">Senha</label>
            <input type="password" className="form-content" name="password" onChange={onChange} />
            <p className="error"> {errors.senha} </p>

            <label className="form-content">Confirme sua senha</label>
            <input type="password" className="form-content" name="confirm_password" onChange={onChange} />
            <p className="error"> {errors.confirm_senha} </p>


            <div className="checkbox-content">
                <label>Interesses</label>
                <label>Tribais</label>
                <input type="checkbox" />
                <label>New school</label>
                <input type="checkbox" />
                <label>Minimalista</label>
                <input type="checkbox" />
                <label>Formas geométricas</label>
                <input type="checkbox" />
                <label>Old school</label>
                <input type="checkbox" onChange={onChange} />
                <button>Adicionar outro</button>
            </div>
            <button type="submit" id="submit" onClick={onSubmit}> <Link href="/home">CADASTRAR</Link></button>
        </form >
    </div >
)
}