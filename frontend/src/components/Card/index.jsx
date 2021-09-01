import { connect, useDispatch } from 'react-redux';

import { addToCart } from '../../actions';

import "../../styles/Card.css";


function Card(props) {

    const dispatch = useDispatch();

    return (
        <article className="cards">
            <img src={props.image} alt="Imagem da tatuagem" />
            <div className="art-info">
                <h6>Nome da tatuagem e descrição</h6>
                <a href={props.link}>
                    Feita por: @{props.login}
                </a> 
                <p>{`R$ ${props.preco.toString()}`}</p>
                <button className="btn-salvar" onClick={() => dispatch(addToCart(props))}>Salvar</button>
            </div>
        </article>
    )
}

export default connect(state => ({itens: state}))(Card);