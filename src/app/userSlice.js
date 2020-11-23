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
        currentUser: '',
        isAdmin: false,
        isLogged: false
    },
    reducers: {
      setAdmin: (state, action) => {
        state.isAdmin = action.payload;
      },
      setLogged: (state, action) => {
        state.isLogged = action.payload;
      }
    },
    extraReducers: {
    }
})

const { actions, reducer } = userSlice;
export const { setAdmin, setLogged } = actions;
export default reducer;