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

// axiosConfig.interceptors.response.use(
//     function (response) {
//         // Any status code that lie within the range of 2xx cause this function to trigger
//         // Do something with response data
//         return response.data;
//     },
//     async function (error) {
//         if (error.response.status === 403) {
//             const access_token = await axiosConfig.post('/refresh');
//             axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token;
//             localStorage.setItem('access_token', access_token);
//             return Promise.reject(error);
//         }
//     },
// );
export default axiosConfig;
