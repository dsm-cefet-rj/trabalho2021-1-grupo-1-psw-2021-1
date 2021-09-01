import { createStore } from "redux";

function reducer(state = [], action ) {
    console.log(state);
    if(action.type === "ADD_TO_CART"){
        state.push(action.itens);
        return state;
    }

    // if(action.type === "REMOVE_FROM_CART"){

    // }
    return state;
}

const store = createStore(reducer);

export default store;