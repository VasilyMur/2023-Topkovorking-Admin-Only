import { IUser } from "../../../../models/IUser";

export type AuthState = {
    isLoading: boolean;
    isAuthorized: boolean;
    alert: string;
    
    /** Данные авторизованного пользователя. */
    user: IUser;
};