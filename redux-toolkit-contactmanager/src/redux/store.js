import { configureStore } from "@reduxjs/toolkit";
import contactReducer from './contactSlice'
import profileReducer from './profileSlice'

// By default REDUX_DEVTOOLS_EXTENSION is configured
export const store = configureStore({
    // root reducer
    reducer: {
        contacts: contactReducer,
        profile: profileReducer
    }
})

