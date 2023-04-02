import { createSlice } from '@reduxjs/toolkit';
const authSlide = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            //loading
            isFetching: false,
            error: false, // khong co loi
            msg: '',
        },
        register: {
            //loading
            isFetching: false,
            error: false, // khong co loi
            success: true,
        },
        logout: {
            isFetching: false,
            error: false, // khong co loi
        },
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = false;
        },
        loginFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = true;
            state.login.msg = action.payload.response.data;
        },
        registerStart: (state) => {
            state.register.isFetching = true;
        },
        registerSuccess: (state, action) => {
            state.register.isFetching = false;
            state.register.error = false;
            state.register.success = false;
        },
        registerFailed: (state) => {
            state.register.isFetching = false;
            state.register.success = false;
            state.register.error = true;
        },
        logoutStart: (state) => {
            state.register.isFetching = true;
        },
        logoutSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.error = false;
        },
        logoutFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = true;
        },
    },
});

export const {
    loginFailed,
    loginStart,
    loginSuccess,
    registerStart,
    registerSuccess,
    registerFailed,
    logoutFailed,
    logoutStart,
    logoutSuccess,
} = authSlide.actions;

export default authSlide.reducer;
