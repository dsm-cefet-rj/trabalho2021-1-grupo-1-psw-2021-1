import { connect } from 'react-redux';

function Cart({tamanho}) {
    return(
        <p>{}</p>
    )
}

export default connect(state => ({
    tamanho: state.lenght
}))(Cart)
