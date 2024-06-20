import { createSlice } from '@reduxjs/toolkit'


const AuthStore = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,

    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.isLoggedIn = false;

        },
    }
})
export const { login, logout } = AuthStore.actions;
export default AuthStore.reducer;