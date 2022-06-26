import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: '',
    password: '',
    isLogin: false
}

const admin = createSlice({
    name: 'adminSlice',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        login: (state, action) => {
            state.isLogin = true
        },
        logout: (state, action) => {
            state.isLogin = false
        }
    }
});

export const { setUsername, setPassword, login, logout } = admin.actions

export default admin.reducer