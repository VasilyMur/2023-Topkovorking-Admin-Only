import { IUser } from '../../../../models/IUser';


export type UsersListState = {
    isLoading: boolean;
    alert: string;
    /** Данные карточки. */
    usersList: IUser[];
};

