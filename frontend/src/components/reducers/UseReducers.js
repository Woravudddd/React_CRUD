import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";
//import { Action } from "@remix-run/router";

export const UseReducersFunc = createSlice({
    name : 'test',
    initialState:{
         value : 0
    },
   
reducers:{
    increment : state => {

        state.value++
    },
    decrement : state =>{
        state.value--
    },

    incrementAmount : (state,action) => {
        state.value += action.payload
    },
},

});

export const {increment , decrement , incrementAmount} = UseReducersFunc.actions;

export default UseReducersFunc.reducer;