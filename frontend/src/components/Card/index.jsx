import { connect, useDispatch } from "react-redux";

import cartSlice from "../../store/cart";

import "../../styles/Card.css";

function Card(props) {
    const dispatch = useDispatch()

    const buyTattoo = (props) => {
        dispatch(cartSlice.actions.tattooAdd({id: props.id}))
        console.log(props)
    }

    return (
        <article className="cards">
            <img src={props.image} alt="Imagem da tatuagem" />
            <div className="art-info">
                <h6>{props.name}, {props.disc}</h6>
                <a href={props.link}>
                    Feita por: @{props.login}
                </a> 
                <p>{`R$ ${props.preco.toString()}`}</p>
                <button className="btn-salvar">Salvar</button>
                <button className="btn-comprar" onClick={buyTattoo}>Comprar</button>
            </div>
        </article>
    )
}

export default Card;