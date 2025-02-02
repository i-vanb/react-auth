import axios from 'axios';
import {getToken} from "@/utils/token.ts";


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});


axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();

        if (token)
            config.headers['Authorization'] = token;

        return config;
    },
    (error) => {
        Promise.reject(error)
    }
);


export default axiosInstance;
