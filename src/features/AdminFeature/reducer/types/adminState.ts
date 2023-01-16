import { ISpace } from '../../../../models/ISpace';

export type AdminState = {
    isLoading: boolean;
    alert: string;
    
    /** Данные авторизованного пользователя. */
    spaces: ISpace[];
};