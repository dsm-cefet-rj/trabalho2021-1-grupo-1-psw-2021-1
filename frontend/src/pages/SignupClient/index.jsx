import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api.js";

import { userSchema } from "../../schemas/userSchema.js";

import "../../styles/SignupClient.css";

export default function SignUpClient() {

    let [user, setUser] = useState({
        name: "",
        senha: "",
        confirm_senha: "",
        email: ""
    });
    let [error, setError] = useState([]);

    function onChange(event) {
        const { name, value } = event.target;
        if (name === "name") {
            setUser({ ...user, name: value })
        }
        else if (name === "password") {
            setUser({ ...user, senha: value })
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
        }
        else{
            const validate = userSchema.validate(user)
            setError(validate);
        }
    }
        return (
            < div className="main-container" >
                <form action="#" id="form-container" method="POST" >
                    <legend>Cadastro</legend>

                    <label for="name" class="form-content">Nome completo</label>
                    <input type="text" name="name" class="form-content" onChange={onChange} />

                    <label for="username" class="form-content">Nome de usuário</label>
                    <input type="text" name="username" class="form-content" onChange={onChange} />

                    <label class="form-content">E-mail</label>
                    <input type="email" class="form-content" name="email" onChange={onChange} />

                    <label class="form-content">Senha</label>
                    <input type="password" class="form-content" name="password" onChange={onChange} />

                    <label class="form-content">Confirme sua senha</label>
                    <input type="password" class="form-content" name="confirm_password" onChange={onChange} />


                    <div class="checkbox-content">
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
                <button type="submit" id="submit" onClick={onSubmit}>Cadastrar</button>
                </form >
            </div >
        )
    }