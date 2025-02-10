import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./slice"
import cartReducer from "./cart"
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({ 
    reducer: {
        user: userReducer, 
        cart:cartReducer,  
    } 
})
export default store