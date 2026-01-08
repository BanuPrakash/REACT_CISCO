import { createContext, useReducer } from "react"
import type CartItem from "../models/CartItem";
import cartReducer from "../reducers/cartReducer";
import type Product from "../models/Product";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
type ContextType = {
    items: CartItem[],
    total: number,
    quantity: number,
    addToCart: (product:Product) => void,
    checkout: () => void,
    increment: (id:number) => void
}

// central placeholder for data
export const CartContext = createContext<ContextType>({
    items: [],
    total: 0,
    quantity: 0,
    addToCart: (product:Product) => {},
    checkout: () => {},
    increment: (id: number) => {}
});

const initialState = {
    items: [],
    total: 0,
    quantity: 0
}

type Props = {
    children: React.ReactNode
}

export default function CartContextProvider(props: Props) {
 let navigate = useNavigate();
  let [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(product:Product) {
        dispatch({type:"ADD_TO_CART", payload: product})
    } 
    function increment(id: number) {
        dispatch({type: 'INCREMENT', payload: id})
    }
    function checkout() {
        // my assumption is on use login success, we will store user data in
        // window.sessionStorage
        // window.sessionStorage.setItem("customer", "banu@gmail.com");
        let order = {
            customer: window.sessionStorage.getItem("customer"),
            order_date: new Date(),
            items: state.items.map(item => { return {
                product: item.title,
                price: item.price,
                qty: item.qty
            }}),
            total: state.total
        }

        axios.post("http://localhost:1234/orders", order).then(response => {
            console.log("Order placed!!!");
             dispatch({type:"CLEAR_CART"})
             navigate("/");
        })
       
    }

  return (
    <CartContext.Provider value={{...state, addToCart, checkout, increment}}>
        {props.children}
    </CartContext.Provider>
  )
}
