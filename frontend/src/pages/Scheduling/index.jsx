import "../../styles/Scheduling.css";
import { useEffect, useState } from 'react';
import { useParams, Link, useHistory} from 'react-router-dom';

import { api } from '../../services/api';

import { agendamentoSchema } from "../../schemas/agendamentoSchema.js";

export default function Scheduling() {
  
    const params = useParams();

    const history = useHistory()

    let [agend, setAgend] = useState({
        id_compra: null,
        data: "",
        horario:""
    });

    let [compra,setCompra] = useState({})

    useEffect(async () => {
        const { data } = await api.get("/buy?id=" + params.id_compra)
        setCompra(data);
    }, []);
 
    let [errors, setError] = useState({
        data: "",
        horario:""
    });
    

    async function onSubmit(event) {
        event.preventDefault();
        const valid_bool = await agendamentoSchema.isValid(agend)
        if(valid_bool)
        {
            agend = {
                id_compra: params.id_compra,
                data: agend.data,
                horario: agend.horario,
            }
            api.post(`/agendamentos/`, agend);
            alert("Agendamento concluído com sucesso")
            history.push("/me/")
        }
        else
        {
            agendamentoSchema.validate(agend, {abortEarly: false }).catch(function (err) {
                let data,horario = ""
                err.inner.forEach(e => {
                    let {path, message} = e;
                    if (path === "data") {
                        data = message
                    }
                    else if (path === "horario") {
                        horario = message
                    }
                })
                setError({
                    data,
                    horario,
                })
            })
        }
    }

    function onChange(event)
    {
        const { name, value} = event.target;

        if (name === "data") {
            setAgend({ ...agend, data: value })
        }
        else if (name === "horario") {
            setAgend({ ...agend, horario: value })
        }
    }

    function goBack(event){
        history.push("/me/")
    }

    return (
        <main>
            <h2> Agendamento </h2>
            <form action="#" method="POST" id="form-container">
               
               <div>
                    <div class="input-container description">
                        <label for="description" class="form-content">Nome tatuagem: </label>
                        <p>A MAIS BRABA</p>
                    </div>           
                    <div class="input-container description">
                        <label for="description" class="form-content">Dia:</label>
                    </div>
                        <select name="data" class="dia" onChange={onChange}>
                            <option value="" disabled selected>Escolha a data</option>
                            <option value="27/10/2021">27/10/2021</option>
                            <option value="28/10/202">28/10/2021</option>
                            <option value="29/10/2021">29/10/2021</option>
                        </select>
                        <p className="error"> {errors.data} </p>
                    <div class="input-container description">
                        <label for="description" class="form-content">Horário:</label>
                    </div>
                        <select name="horario" class="horario" onChange={onChange}>
                            <option value="" disabled selected>Escolha o horário</option>
                            <option value="08:00:00">8 horas</option>
                            <option value="09:00:00">9 horas</option>
                            <option value="10:00:00">10 horas</option>
                        </select>
                        <p className="error"> {errors.horario} </p>
                </div>

                <div id="button-container">
                    <button type="text" onClick={goBack}>
                        <Link href="/me">Voltar</Link>
                    </button>
                    <button type="submit" class="submit" onClick={onSubmit}>
                        <Link href={"/me"}>Agendar</Link>
                    </button>
                </div>

            </form>
        </main>
    )
}