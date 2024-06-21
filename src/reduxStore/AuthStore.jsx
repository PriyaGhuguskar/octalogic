import { createSlice } from '@reduxjs/toolkit'


const AuthStore = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        login: (state) => {
            state.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
        },
        logout: (state) => {
            state.isLoggedIn = false;
            localStorage.removeItem('isLoggedIn');
        },
    },
})
export const { login, logout } = AuthStore.actions;
export default AuthStore.reducer;