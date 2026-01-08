import type CartItem from "../models/CartItem"
import type Product from "../models/Product"

type Action = {
    type: 'ADD_TO_CART',
    payload: Product
} | {type: 'INCREMENT', payload: number} |
{ type: 'CLEAR_CART'}

type CartState = {
    items: CartItem[],
    quantity: number,
    total: number
}

export default function cartReducer(state: CartState, action:Action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            let item:CartItem = {
                ...action.payload,
                qty: 1,
                amount: action.payload.price
            }
            return {
                items: [...state.items, item],
                total: state.total + item.amount,
                quantity: state.quantity + 1
            }
        case 'INCREMENT':
            // TODO identify product based on payload
            // increment qty, update amount and total
            return state;
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