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
        users: {},
        currentUser: ''
    },
    reducers: {
      saveUser: (state, action) => {
        state.currentUser = action.payload.uid;
        state.users  = action.payload;
      },
      removeUser: (state, action) => {
        state.users = {};
        state.currentUser = '';
      }
    },
    extraReducers: {
      [dangNhap.fulfilled]: (state, action) => {
        state.currentUser = (action.payload);
      }
    }
})

const { actions, reducer } = userSlice;
export const { saveUser, removeUser } = actions;
export default reducer;