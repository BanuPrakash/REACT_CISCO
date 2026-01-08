import type CartItem from "../models/CartItem"
import type Product from "../models/Product"

type Action = {
    type: 'ADD_TO_CART',
    payload: Product
} | {type: 'INCREMENT', payload: number} |
{ type: 'CLEAR_CART'}

type CartState = {
    items: CartItem,
    quantity: number,
    total: number
}

export default function cartReducer(state: CartState, action:Action) {
    switch(action.type) {
        case 'ADD_TO_CART':
        case 'INCREMENT':
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0,
                quantity: 0
            }
        default:
            return state;
    }
}