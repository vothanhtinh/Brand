import axiosConfig from '~/services/axiosConfig/axiosConfig';

import {
    loginFailed,
    loginStart,
    loginSuccess,
    registerFailed,
    registerStart,
    registerSuccess,
    logoutStart,
    logoutSuccess,
    logoutFailed,
} from './authSlice';
import { localStorageKey } from '~/constant/constant';

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axiosConfig.post('/v1/auth/login', user);
        console.log(res);
        dispatch(loginSuccess(res.data));
        localStorage.setItem(localStorageKey.USER, JSON.stringify(res.data));
        navigate('/');
    } catch (err) {
        dispatch(loginFailed(err));
    }
};
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(registerStart());
    try {
        const res = await axiosConfig.post('/v1/auth/register', user);
        dispatch(registerSuccess(res.data));
        localStorage.setItem(localStorageKey.USER, JSON.stringify(res.data));
        navigate('/login');
    } catch (err) {
        dispatch(registerFailed(err));
    }
};

export const logoutUser = async (dispatch, id, navigate, accessToken) => {
    dispatch(logoutStart());
    try {
        const res = await axiosConfig.post('/v1/auth/logout', id, {
            headers: { token: `Bearer ${accessToken}` },
        });
        localStorage.clear();
        dispatch(logoutSuccess(res.data));
        navigate('/');
    } catch (err) {
        dispatch(logoutFailed(err));
    }
};
