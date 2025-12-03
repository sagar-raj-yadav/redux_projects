import { createSlice } from '@reduxjs/toolkit'


export const CartSlice = createSlice({
    name: 'mycart',
    initialState:[],
    reducers: {
        addToCart (state, action)  {
            state.push(action.payload);
        },
        removeFromCart (state, action) {
            state.splice(action.payload, 1);
        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;

/*
 state.splice(action.payload, 1) -> 
 Here state means, us slice ke current state ka array ko refer karta hai.
 Ye array me tumhare products objects stored hain.
 action.payload → index of item jo remove karna hai
 1 → matlab sirf 1 item us index se remove karo


Example:-
intialState bhi to ek state hi hota h,agar array empty rahega to intialState bolte h \
and agar usme data add ho jayega to usko state bolne lagte h.

state = [
  {id:1, title:'Product 1'},
  {id:2, title:'Product 2'},
  {id:3, title:'Product 3'}
];

action.payload = 1;  // user ne 2nd product(i.e, 1st index) remove karna click kiya
state.splice(action.payload, 1);


Result:
state = [
  {id:1, title:'Product 1'},
  {id:3, title:'Product 3'}
];

*/




/*

import { createSlice } from '@reduxjs/toolkit'

const initialState:{
items:[];
}


export const CartSlice = createSlice({
    name: 'mycart',
    initialState,
    reducers: {
        addToCart (state, action)  {
            state.push(action.payload);
        },
        removeFromCart (state, action) {
            state.splice(action.payload, 1);
        }
    }
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;

*/
