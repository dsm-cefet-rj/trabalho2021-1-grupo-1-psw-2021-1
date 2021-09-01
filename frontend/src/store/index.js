import { createStore } from "redux";

function reducer(state = [], action ) {
    if(action.type === "ADD_TO_CART"){
        state.push(action.itens);
        return [...state]
    }

    // if(action.type === "REMOVE_FROM_CART"){

    // }
    return state;
}

const store = createStore(reducer);

export default store;