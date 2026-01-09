import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import profileReducer from './profileSlice'
import { useSelector, type TypedUseSelectorHook } from "react-redux";

// By default REDUX_DEVTOOLS_EXTENSION is configured
const store = configureStore({
    // root reducer
    reducer: {
        cart: cartReducer,
        profile: profileReducer
    }
})
// ReturnType is a Typescript utility function to know 
// the return type of a  funciton

// type RootType = {
//     cart: CartState;
//     profile: {
//         avatar: string;
//         displayName: string;
//     };
// }

type RootType = ReturnType<typeof store.getState>

// useSelector is JS hook
// TypeSafe useSelector
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector;

export default store;

// function doTask() {
//     return {
//         "name" : "A",
//         "age": 42
//     }
// }

// type MyType = ReturnType<typeof doTask>