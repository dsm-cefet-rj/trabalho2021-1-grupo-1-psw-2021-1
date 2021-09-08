import "../../styles/Scheduling.css";
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { api } from '../../services/api';

import { tattooSchema } from "../../schemas/tattooSchema.js";

export default function Scheduling() {
  
    const params = useParams();
    const inicialValues = {
        preco: 0,
        name: "",
        description: "",
        image: "",
        user_id: params.id_tatuador
    }
    let [tattoo, setTattoo] = useState(inicialValues);
    useEffect(async () => {
    }, []);

    let [errors, setError] = useState({
        name: "",
        description: "",
        preco:""
    });
    

    async function onSubmit(event) {
        event.preventDefault();
        const valid_bool = await tattooSchema.isValid(tattoo)
        if(valid_bool)
        {
            api.post(`/tattoos/`, tattoo);
            alert("Tatuagem cadastrada com sucesso")
        }
        else
        {
            tattooSchema.validate(tattoo, {abortEarly: false }).catch(function (err) {
                let name, description,preco = ""
                err.inner.forEach(e => {
                    let {path, message} = e;
                    console.log(path,message)
                    if ( path === "name") {
                        name = message
                    }
                    else if (path === "description") {
                        description = message
                    }
                    else if (path === "preco") {
                        preco = message
                    }
                })
                setError({
                    name,
                    description,
                    preco,
                })
            })
        }
    }

    return (
        <main>
            <h2> Agendamento </h2>
            <form action="#" method="POST" id="form-container">
               
               <div>
                    <div class="input-container description">
                        <label for="description" class="form-content">Profissional:</label>
                    </div>
                        <select name="tatuador" class="tatuador">
                            <option value="Tatuador1">Carlin</option>
                            <option value="Tatuador2">Cleitin</option>
                            <option value="Tatuador3">Douglinha</option>
                        </select>
                

               
                    <div class="input-container description">
                        <label for="description" class="form-content">Dia:</label>
                    </div>
                        <select name="dia" class="dia">
                            <option value="dia1">27/10/2021</option>
                            <option value="dia2">28/10/2021</option>
                            <option value="dia3">29/10/2021</option>
                        </select>
                

               
                    <div class="input-container description">
                        <label for="description" class="form-content">Horário:</label>
                    </div>
                        <select name="horario" class="horario">
                            <option value="horario1">8 horas</option>
                            <option value="horario2">9 horas</option>
                            <option value="horario3">10 horas</option>
                        </select>
                </div>

                <div id="button-container">
                    <button type="text">
                        <Link href={"/profile/"+tattoo.user_id}>Voltar</Link>
                    </button>
                    <button type="submit" class="submit" onClick={onSubmit}>
                        <Link href={"/profile/"+tattoo.user_id}>Agendar</Link>
                    </button>
                </div>

            </form>
        </main>
    )
}