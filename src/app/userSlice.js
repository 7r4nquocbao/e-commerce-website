import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sighIn } from './firebase';

export const dangNhap = createAsyncThunk('dangNhap', async(account, thunkAPI) => {
    const { email, password } = account;
    const user = await sighIn(email, password);
    console.log(user);
    return user;
})

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        currentUser: ''
    },
    reducers: {
    },
    extraReducers: {
      [dangNhap.fulfilled]: (state, action) => {
        state.currentUser = (action.payload);
      }
    }
})

const { actions, reducer } = userSlice;
export default reducer;