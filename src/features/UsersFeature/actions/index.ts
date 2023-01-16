import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';

export const prefix = 'usersFeature';

/** Сброс состояния страницы к изначальному */
export const resetPageState = createAction(`${prefix}/resetPageState`);

/** Отображение загрузки. */
export const setLoading = createAction(
    `${prefix}/setLoading`,
    (isLoading: boolean) => ({ payload: { isLoading } })
);

/** Изменение Alert. */
export const setAlert = createAction(
  `${prefix}/setAlert`,
  (alert: string) => ({ payload: { alert } })
);

/** Загрузка заказов всех пользователей. */
export const setUsersList = createAction(
    `${prefix}/setUsersList`,
    (users: IUser[] ) =>
        ({ payload: { users } })
);

/** Удалить пользователя. */
export const setRemoveUser = createAction(
    `${prefix}/setRemoveUser`,
    (id: string ) =>
        ({ payload: { id } })
);
/** Обновить функционал пользователя. */
export const setUpdatedUser = createAction(
    `${prefix}/setUpdatedUser`,
    (user: IUser ) =>
        ({ payload: { user } })
);
