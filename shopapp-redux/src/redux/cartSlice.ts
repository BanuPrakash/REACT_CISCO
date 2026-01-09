import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type CartItem from '../models/CartItem';
import type Product from '../models/Product';

export interface CartState  {
    items: CartItem[],
    total: number,
    quantity: number
}
const initialState :CartState = {
    items: [],
    total: 0,
    quantity: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<Product>) => {
        // Redux toolkit will pass a clone of state
        state.items.push({...action.payload, qty: 1, amount: action.payload.price});
        state.total += action.payload.price;
        state.quantity++;
    },
    increment: (state, action:PayloadAction<number>) => {
        const item  = state.items.find(item => item.id === action.payload);
        if(item) {
            item.qty ++;
            item.amount = item.price * item.qty
        }
        state.total = state.items.map(item => item.amount).reduce( (v1, v2) => v1 + v2, 0.0);
    },
    checkout: (state) => {
        state.total = 0;
        state.items = [];
        state.quantity = 0;
    }
  },
})

// for view
export const { addToCart, increment, checkout } = cartSlice.actions

//store
export default cartSlice.reducer

