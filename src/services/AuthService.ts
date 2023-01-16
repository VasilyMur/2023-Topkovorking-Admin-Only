import { AxiosResponse } from 'axios';
import api from '../api';
import { AuthResponse } from '../models/response/AuthResponse';
import { 
    URL_BASE, 
    URL_API_LOGIN, 
    URL_API_REGISTER, 
    URL_API_LOGOUT,
    URL_API_ACTIVATE,
} from '../constants';

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>(`${URL_BASE}${URL_API_LOGIN}`, { email, password });
    }

    static async register(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>(`${URL_BASE}${URL_API_REGISTER}`, { email, password });
    }

    static async logout(): Promise<void> {
        return api.post(`${URL_BASE}${URL_API_LOGOUT}`);
    }

    static async activate(token: string): Promise<void> {
        return api.post(`${URL_BASE}${URL_API_ACTIVATE}`);
    }
}