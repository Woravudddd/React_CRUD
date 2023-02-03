import { createSlice } from "@reduxjs/toolkit";
//import { useReducer } from "react";
//import { Action } from "@remix-run/router";

export const UseReducersFunc = createSlice({
    name : 'users',
    initialState:{
         user : 'Hello',
         value: 0,
    },
   
reducers:{
    increment : (state , action) => {
          state.user = action.payload  

        
    },
    decrement : state =>{
        state.user = 'Logout'
    },

    incrementAmount : (state,action) => {
        state.user  = action.payload
    },
},

});

export const {increment , decrement , incrementAmount} = UseReducersFunc.actions;

export default UseReducersFunc.reducer;