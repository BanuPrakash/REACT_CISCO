import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    "avatar": "banu.png",
    "displayName": "Banu Prakash"
}
const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {

    }
})

export default profileSlice.reducer