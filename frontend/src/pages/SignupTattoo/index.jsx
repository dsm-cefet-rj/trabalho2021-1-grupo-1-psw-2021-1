import "../../styles/SignupTattoo.css";
import { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

import { api } from '../../services/api';

import { tattooSchema } from "../../schemas/tattooSchema.js";

export default function SignUpTattoo() {
    const params = useParams();
    const history = useHistory();

    const inicialValues = {
        tags: [],
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
    
    function onChange(event) {
        const {name, value, type} = event.target;
        const label = event.target.parentNode.childNodes[0].textContent;
        if (name === "title") {
            setTattoo({ ...tattoo, name: value })
        }
        else if (name === "image") {
            setTattoo({ ...tattoo, image: value })
        }
        else if (name === "price") {
            setTattoo({ ...tattoo, preco: value })
        }
        else if (name === "description") {
            setTattoo({ ...tattoo, description: value })
        }
        else if (type === "checkbox"){
            const idx = tattoo.tags.indexOf(label)
            if (idx == -1)
            {
                tattoo.tags.push(label)
                setTattoo({ ...tattoo, tags: tattoo.tags})
            }
            else{
                tattoo.tags.pop(idx)
                setTattoo({ ...tattoo, tags: tattoo.tags})
            }

        }
    };

    async function onSubmit(event) {
        event.preventDefault();
        const valid_bool = await tattooSchema.isValid(tattoo)
        console.log(tattoo)
        if(valid_bool)
        {
            api.post(`/tattoos/`, tattoo);
            alert("Tatuagem cadastrada com sucesso")
            history.push("/profile/"+tattoo.user_id)
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

    function goBack(){
        history.push("/profile/"+tattoo.user_id)
    }

    return (
        <main>
            <form action="#" method="POST" id="form-container">
                <div class="title">
                    <input type="text" name="title" placeholder="Nome Tatuagem" onChange={onChange}/>
                    <p className="error"> {errors.name} </p>
                </div>

                <div class="input-container image">
                    <img src="#" alt="Imagem da arte da nova tatuagem" />
                    <input type="file" name="image" onChange={onChange}/>
                </div>

                <div class="input-container description">
                    <label for="description" class="form-content">Descrição:</label>
                    <div class="content-textarea"> <textarea name="description" placeholder="Descrição da tatuagem" onChange={onChange}></textarea> </div>
                    <p className="error"> {errors.description} </p>
                </div>

                <div class="input-container tag">
                    <label class="form-content">Tags:</label>
                    <div id="tag-labels">
                        <span>
                            <label>Tribais</label>
                            <input type="checkbox" name="Tribais" onChange={onChange}/>
                        </span>
                        <span>
                            <label>Colorido</label>
                            <input type="checkbox" name="Colorido" onChange={onChange}/>
                        </span>
                        <span>
                            <label>Old School</label>
                            <input type="checkbox" name="Old School" onChange={onChange}/>
                        </span>
                        <span>
                            <label>Geek</label>
                            <input type="checkbox" name="Geek" onChange={onChange}/>
                        </span>
                        <span>
                            <label>New School</label>
                            <input type="checkbox" name="New School" onChange={onChange}/>
                        </span>

                        <button>Adicionar outro</button>
                    </div>
                </div>

                <div class="input-container price">
                    <label for="price">R$</label>
                    <input type="number" name="price" onChange={onChange}/>
                    <p className="error"> {errors.preco} </p>
                </div>

                <div id="button-container">
                    <button type="text" onClick={goBack}>
                        <Link href={"/profile/"+tattoo.user_id}>VOLTAR</Link>
                    </button>
                    <button type="submit" class="submit" onClick={onSubmit}>
                        <Link href={"/profile/"+tattoo.user_id}>CADASTRAR</Link>
                    </button>
                </div>

            </form>
        </main>
    )
}