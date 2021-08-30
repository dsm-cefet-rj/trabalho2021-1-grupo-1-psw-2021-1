import "../../styles/SignupTattoo.css";
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { api } from '../../services/api';

export default function SignUpTattoo() {
    const params = useParams();
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
            tattoo.tags.push(label)
            setTattoo({ ...tattoo, tags: tattoo.tags})
        }
    };

    function onSubmit(event) {
        event.preventDefault();
        api.post(`/tattoos/`, tattoo);
    }

    return (
        <main>
            <form action="#" method="POST" id="form-container">
                <div class="title">
                    <input type="text" name="title" placeholder="Nome Tatuagem" onChange={onChange}/>
                </div>

                <div class="input-container image">
                    <img src="#" alt="Imagem da arte da nova tatuagem" />
                    <input type="file" name="image" onChange={onChange}/>
                </div>

                <div class="input-container description">
                    <label for="description" class="form-content">Descrição:</label>
                    <div class="content-textarea"> <textarea name="description" placeholder="Descrição da tatuagem" onChange={onChange}></textarea> </div>
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
                </div>

                <div id="button-container">
                    <button type="text">
                        <a href="Perfil_tatuador.html">VOLTAR</a>
                    </button>
                    <button type="submit" class="submit" onClick={onSubmit}>
                        <a href="Perfil_tatuador.html">CADASTRAR</a>
                    </button>
                </div>

            </form>
        </main>
    )
}