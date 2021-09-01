export const addToCart = itens => {
    return {
        type: 'ADD_TO_CART', 
        itens
    }
}

export const remove = itens => {
    return {
        type: 'REMOVE_FROM_CART', 
        itens
    }
}