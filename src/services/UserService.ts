import { AxiosResponse } from 'axios';
import api from '../api';
import { 
    URL_BASE, URL_API_GET_USERS, 
    URL_API_DELETE_USER, 
    URL_API_ACTIVATE_USER, 
    URL_API_TOGGLE_CAN_CREATE_USER } from '../constants';
import { IUser } from '../models/IUser';

export default class UserService {
    static fetchUsers(): Promise<AxiosResponse<IUser[]>> {
        return api.get<IUser[]>(`${URL_BASE}${URL_API_GET_USERS}`);
    }

    static deleteUser(id: string): Promise<AxiosResponse<IUser>> {
        return api.get<IUser>(`${URL_BASE}${URL_API_DELETE_USER}/${id}`);
    }
    
    static activateUser(id: string): Promise<AxiosResponse<IUser>> {
        return api.get<IUser>(`${URL_BASE}${URL_API_ACTIVATE_USER}/${id}`);
    }

    static toggleCanCreate(id: string): Promise<AxiosResponse<IUser>> {
        return api.get<IUser>(`${URL_BASE}${URL_API_TOGGLE_CAN_CREATE_USER}/${id}`);
    }
}