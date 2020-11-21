import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {db, getProducts} from './firebase';

export const getData = createAsyncThunk('getData', async(params, thunkAPI) => {
  const data = await getProducts();
  return data;
})

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
    },
    extraReducers: {
      [getData.fulfilled]: (state, action) => {
        state.push(action.payload);
      }
    }
})

const { actions, reducer } = productSlice;
export default reducer;