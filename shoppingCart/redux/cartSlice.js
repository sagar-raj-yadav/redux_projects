import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const CartSlice = createSlice({
    name: 'mycart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item, index) => index !== action.payload);
        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;