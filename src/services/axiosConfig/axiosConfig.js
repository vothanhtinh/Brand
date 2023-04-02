import axios from 'axios';

const axiosConfig = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosConfig.interceptors.request.use(
    (config) => {
        const user = localStorage.getItem('user');
        const token = JSON.parse(user)?.accessToken;

        if (token) {
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

export default axiosConfig;
