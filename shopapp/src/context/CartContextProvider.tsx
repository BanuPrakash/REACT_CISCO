import { createContext, useReducer } from "react"
import type CartItem from "../models/CartItem";
import cartReducer from "../reducers/cartReducer";
import type Product from "../models/Product";

type ContextType = {
    items: CartItem[],
    total: number,
    quantity: number,
    addToCart: (product:Product) => void,
    checkout: () => void
}

// central placeholder for data
export const CartContext = createContext<ContextType>({
    items: [],
    total: 0,
    quantity: 0,
    addToCart: (product:Product) => {},
    checkout: () => {}
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
  let [state, dispatch] = useReducer(cartReducer, initialState);

    function addToCart(product:Product) {
        dispatch({type:"ADD_TO_CART", payload: product})
    } 

    function checkout() {
         dispatch({type:"CLEAR_CART"})
    }

  return (
    <CartContext.Provider value={{...state, addToCart, checkout}}>
        {props.children}
    </CartContext.Provider>
  )
}
