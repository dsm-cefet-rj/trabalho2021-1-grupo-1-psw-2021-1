import { createEntityAdapter, createSlice, configureStore } from '@reduxjs/toolkit';

const cartAdapter = createEntityAdapter({
    selectId: (tattoo) => tattoo.id, 
    sortComparer: (tattooA, tattooB) => tattooA.price.localeCompare(tattooB.price)
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartAdapter.getInitialState(), 
    reducers: {
        tattooAdd: cartAdapter.addOne, 
        tattoRemove: cartAdapter.removeOne
    }
});

export default cartSlice;

