import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { api } from '../../services/api';

import { tattooSchema } from "../../schemas/tattooSchema.js";

import "../../styles/EditTattoo.css";


export default function EditTattoo() {

    const inicialValues = {
        tags: [],
        preco: 0,
        name: "",
        description: "",
        imge: ""
    }

    let [tattoo, setTattoo] = useState(inicialValues);
    console.log(tattoo)
    let [errors, setError] = useState({
        name: "",
        description: "",
        preco:""
    });

    const params = useParams();

    useEffect(async () => {
        let { data } = await api.get(`/tattoos/?user_id=${params.id_tatuador}&id=${params.id_tatuagem}`);
        setTattoo(data[0]);
    }, []);

    function onChange(event) {
        const { name, value,type, label } = event.target
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
        else if (type === "checkbox")
        {
            console.log(event.target)
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
        if(valid_bool)
        {
            api.put(`/tattoos/${params.id_tatuagem}`, tattoo);
            alert("Tatuagem atualizada com sucesso")
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
                        preco = "O valor da tatuagem é obrigatório"
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
    function addTag(){
        
    }

    return (
        <main>
            <form action="#" method="POST" id="form-container">
                <div className="title">
                    <input type="text" name="title" value={tattoo.name} onChange={onChange} />
                    <p className="error"> {errors.name} </p>
                </div>

                <div class = "img-content" className="input-container image">
                    <img id= "img-input" src={tattoo.image} alt="Imagem da arte da nova tatuagem" onChange={onChange} />
                    <input type="file" name="image" />
                </div>

                <div className="input-container description">
                    <label for="description" className="form-content">Descrição:</label>
                    <div className="content-textarea"> <textarea name="description" onChange={onChange} value={tattoo.description}></textarea></div>
                    <p className="error"> {errors.description} </p>
                </div>

                <div className="input-container tag">

                    <div class="input-container tag">
                        <label class="form-content">Tags:</label>
                        <div id="tag-labels">
                            {
                                tattoo.tags.map(tag => {
                                    return <span> <label>{tag}</label><input type="checkbox" value="on" onChange={onChange} /></span>
                                })
                            }
                            <button type="button" onClick={addTag()}>Adicionar outro</button>
                        </div>
                    </div>

                    <div id="price-container" className="input-container price">
                        <label for="price">R$</label>
                        <input type="number" name="price" value={tattoo.preco} onChange={onChange} />
                        <p className="error"> {errors.preco} </p>
                    </div>

                    <div id="button-container">
                        <button type="submit">
                            <Link to={"/profile/" + tattoo.user_id}>VOLTAR</Link>
                        </button>
                        <button type="submit" className="submit" onClick={onSubmit}><Link href={"/profile/" + tattoo.user_id}>SALVAR</Link></button>
                    </div>
                </div>
            </form>
        </main>
            )
}