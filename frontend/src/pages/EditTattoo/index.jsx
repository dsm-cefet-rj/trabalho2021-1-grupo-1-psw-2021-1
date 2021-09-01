import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { api } from '../../services/api';


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
    const params = useParams();

    useEffect(async () => {
        let { data } = await api.get(`/tattoos/?user_id=${params.id_tatuador}&id=${params.id_tatuagem}`);
        setTattoo(data[0]);
    }, []);

    function onChange(event) {
        const { name, value, label } = event.target
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
    };

    function onSubmit(event) {
        event.preventDefault();
        api.put(`/tattoos/${params.id_tatuagem}`, tattoo);
    }

    function addTag(){
        
    }

    return (
        <main>
            <form action="#" method="POST" id="form-container">
                <div className="title">
                    <input type="text" name="title" value={tattoo.name} onChange={onChange} />
                </div>

                <div className="input-container image">
                    <img src={tattoo.image} alt="Imagem da arte da nova tatuagem" onChange={onChange} />
                    <input type="file" name="image" />
                </div>

                <div className="input-container description">
                    <label for="description" className="form-content">Descrição:</label>
                    <div className="content-textarea"> <textarea name="description" onChange={onChange} value={tattoo.description}></textarea></div>
                </div>

                <div className="input-container tag">
                    <label className="form-content">Tags:</label>
                    <div class="input-container image">
                        <img src={tattoo.image} alt="Imagem da arte da nova tatuagem" />
                        <input type="file" />
                    </div>

                    <div class="input-container description">
                        <label for="description" class="form-content">Descrição:</label>
                        <div class="content-textarea"> <textarea name="description"></textarea> </div>
                    </div>

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

                    <div className="input-container price">
                        <label for="price">R$</label>
                        <input type="number" name="price" value={tattoo.preco} onChange={onChange} />
                    </div>

                    <div id="button-container">
                        <button type="submit">
                            <Link to={"/profile/" + tattoo.user_id}>VOLTAR</Link>
                        </button>
                        <button type="submit" className="submit" onClick={onSubmit}><Link to={"/profile/" + tattoo.user_id}>SALVAR</Link></button>
                    </div>
                </div>
            </form>
        </main>
            )
}