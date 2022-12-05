import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

export const fetchProducts = createAsyncThunk("products/fetchProducts", async ()=>{
    const response = axios.get('https://bob-shop-server.vercel.app/products')
    return (await response).data;
})

const productSlice = createSlice({
    name: "products",
    initialState:{
        isLading:false,
        products:[],
        error:null
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchProducts.pending, (state)=>{
            state.isLading = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action)=>{
            state.isLading = false;
            state.products = action.payload;
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state, action)=>{
            state.isLading = false;
            state.products = [];
            state.error = action.error.message;
        });
    }
})


export default productSlice.reducer;