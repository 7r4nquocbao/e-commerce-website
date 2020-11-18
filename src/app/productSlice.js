import { createSlice } from "@reduxjs/toolkit";
import {db} from './firebase'

const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
      getData(state, action){
        state = action.payload;
      },
    }
})

const { actions, reducer } = productSlice;
export const { getData } = actions;
export default reducer;