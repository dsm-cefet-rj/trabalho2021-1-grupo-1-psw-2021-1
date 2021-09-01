import { connect } from 'react-redux';

const Cart = ({tamanho}) => {
    return(
        <p>{tamanho}</p>
    )
}

export default connect(state => ({
    tamanho: state.length
}))(Cart)
