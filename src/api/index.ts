import axios, { AxiosRequestConfig } from 'axios';
import { URL_BASE, URL_API_REFRESH } from '../constants';
import { AuthResponse } from '../models/response/AuthResponse';

const api = axios.create({
    withCredentials: true,
    baseURL: URL_BASE
})

api.interceptors.request.use((config: AxiosRequestConfig) => {
    console.log('********************************* 1 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ')
    config.headers = {
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    return config;
});


api.interceptors.response.use((config: AxiosRequestConfig) => {
    console.log('********************************* 2 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ', config)
    return config;
}, async (error) => {
    console.log('********************************* 3 >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ')

    try {
        const originalRequest = error.config;
        if (error.response.status === 401 && error.config && !error.config._isRetry) {
            console.log('its 401 lets refresh>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ')

            originalRequest._isRetry = true;
            const response = await axios.get<AuthResponse>(
                `${URL_BASE}${URL_API_REFRESH}`,
                { withCredentials: true }
                );
                
              localStorage.setItem('token', response.data.accessToken);
              return api.request(originalRequest);
        }
        throw error;
        
    } catch(e) {
        console.log('** Не авторизован **', e);
        throw error;
    }
});

export default api;