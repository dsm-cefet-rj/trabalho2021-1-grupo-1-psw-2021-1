import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

import { api } from '../../services/api';


import "../../styles/EditTattoo.css";


export default function EditTattoo() {
    
    let [tattoo, setTattoo] = useState([]);
    console.log(tattoo)
    const params = useParams();
    let cont = 0
    useEffect(async () => {

        let {data} = await api.get("/tattoos/?user_id="+params.id_tatuador+"&id="+params.id_tatuagem);
        console.log(data);
        setTattoo(data[0])
        
    }, [])


    return (
        <main>
            <form action="#" method="POST" id="form-container">
                <div class="title">
                    <input type="text" placeholder={tattoo.name}/>
                </div>

                <div class="input-container image">
                    <img src={tattoo.image} alt="Imagem da arte da nova tatuagem" />
                    <input type="file" />
                </div>

                <div class="input-container description">
                    <label for="description" class="form-content">Descrição:</label>
                   <div class="content-textarea"> <textarea name="description" placeholder={tattoo.description}></textarea> </div>
                </div>

                <div class="input-container tag">
                    <label class="form-content">Tags:</label>
                    <div id="tag-labels">                 
                    {
                        tattoo.tags.map(tag => {
                                return <span> <label>{tag}</label><input type="checkbox" value="on"/></span>
                            }) 
                    }     
                        <button>Adicionar outro</button>
                    </div>
                </div>

                <div class="input-container price">
                    <label for="price">R$</label>
                    <input type="number" placeholder={tattoo.preco.substring(3)}/>
                </div>

                <div id="button-container">
                    <button type="text">
                        <a href="tatuadorId/">VOLTAR</a>
                    </button>
                    <button type="text" class="submit">
                        <a href="tatuadorId/">SALVAR</a>
                    </button>
                </div>

            </form>
        </main>
    )
}