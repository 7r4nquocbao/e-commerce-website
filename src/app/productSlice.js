import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

let data = axios.get('https://jkbc8.sse.codesandbox.io/products')
.then(res => res.data)
.then(data => {console.log(data); return data});

const productSlice = createSlice({
    name: 'products',
    initialState: data,
    reducers: {
      
    }
})

export const { getData } = productSlice.actions;
export default productSlice.reducer;