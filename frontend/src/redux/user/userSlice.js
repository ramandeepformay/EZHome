import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    loading: false,
    error: null,
    currentUser: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        signinStart: (state) =>{
            state.loading=true
        },
        signinFailue: (state, action) =>{
            state.loading= false,
            state.error = action.payload
        },
        signinSuccess: (state, action) =>{
            state.loading = false,
            state.currentUser = action.payload
        }
    }
})

export const {signinStart, signinFailue, signinSuccess} = userSlice.actions
export default userSlice.reducer
