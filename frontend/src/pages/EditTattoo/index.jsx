import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import axios from "axios";


import "../../styles/EditTattoo.css";


export default function EditTattoo() {

    useEffect(async () => {
        const params = await axios.get("http://localhost:3000/editTattoo")
        console.log(params);
    })

    return (
        <main>
            <form action="#" method="POST" id="form-container">
                <div class="title">
                    <input type="text" placeholder="Nome Tatuagem" />
                </div>

                <div class="input-container image">
                    <img src="#" alt="Imagem da arte da nova tatuagem" />
                    <input type="file" />
                </div>

                <div class="input-container description">
                    <label for="description" class="form-content">Descrição:</label>
                   <div class="content-textarea"> <textarea name="description" placeholder="Descrição da tatuagem"></textarea> </div>
                </div>

                <div class="input-container tag">
                    <label class="form-content">Tags:</label>
                    <div id="tag-labels">
                        <span>
                            <label>Tribais</label>
                            <input type="checkbox" />
                        </span>
                        <span>
                            <label>Tribais</label>
                            <input type="checkbox" />
                        </span>
                        <span>
                            <label>Tribais</label>
                            <input type="checkbox" />
                        </span>
                        <span>
                            <label>Tribais</label>
                            <input type="checkbox" />
                        </span>
                        <span>
                            <label>Tribais</label>
                            <input type="checkbox" />
                        </span>

                        <button>Adicionar outro</button>
                    </div>
                </div>

                <div class="input-container price">
                    <label for="price">R$</label>
                    <input type="number" />
                </div>

                <div id="button-container">
                    <button type="text">
                        <a href="Perfil_tatuador.html">VOLTAR</a>
                    </button>
                    <button type="text" class="submit">
                        <a href="Perfil_tatuador.html">SALVAR</a>
                    </button>
                </div>

            </form>
        </main>
    )
}