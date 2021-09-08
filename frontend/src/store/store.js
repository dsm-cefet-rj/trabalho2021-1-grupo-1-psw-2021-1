import cartSlice from './cart';

export default store = configureStore({
    reducer: {
        cart: cartSlice.reducer
    }
});