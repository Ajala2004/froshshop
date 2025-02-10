import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        products:[]
    },
    reducers: {
        showLoading: (state, action) => {
            state.loading = true;
        },
        hideLoading: (state, action) => {
            state.loading = false;
        },
        setUserdetails: (state, action) => {
            state.user = action.payload.data;  
            console.log("user    ",action.payload)
        },
       fetchproducts: (state, action) => {
            state.products = action.payload;
        },
        
    },
});
export const {showLoading, hideLoading, setUserdetails,fetchproducts } = userslice.actions;
export default userslice.reducer;  
