import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { api } from '../../services/api';


import "../../styles/EditTattoo.css";


export default function EditTattoo() {

    let [tattoo, setTattoo] = useState({ tags: [], preco: "", name: "" });
    const params = useParams();

    useEffect(async () => {
        let { data } = await api.get(`/tattoos/?user_id=${params.id_tatuador}&id=${params.id_tatuagem}`);
        setTattoo(data[0]);
    }, []);


    return (
        <main>
            <form action="#" method="POST" id="form-container">
                <div className="title">
                    <input type="text"/>
                </div>

                <div className="input-container image">
                    <img src={tattoo.image} alt="Imagem da arte da nova tatuagem" />
                    <input type="file" />
                </div>

                <div className="input-container description">
                    <label for="description" className="form-content">Descrição:</label>
                    <div className="content-textarea"> <textarea name="description">{tattoo.description}</textarea></div>
                </div>

                <div className="input-container tag">
                    <label className="form-content">Tags:</label>
                    <div id="tag-labels">
                        {
                            tattoo.tags.map(tag => {
                                return <span> <label>{tag}</label><input type="checkbox" value="on"/></span>
                            })
                        }
                        <button>Adicionar outro</button>
                    </div>
                </div>

                <div className="input-container price">
                    <label for="price">R$</label>
                    <input type="number" placeholder={tattoo.preco.substring(3)} />
                </div>

                <div id="button-container">
                    <button type="text">
                        <Link to={"profile/" + tattoo.user_id}>VOLTAR</Link>
                    </button>
                    <button type="text" className="submit">
                        <Link to={"profile/" + tattoo.user_id}>SALVAR</Link>
                    </button>
                </div>

            </form>
        </main>
    )
}