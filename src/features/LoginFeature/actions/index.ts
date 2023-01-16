import { createAction } from '@reduxjs/toolkit';
import { IUser } from '../../../models/IUser';

export const prefix = 'loginFeature';

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

/** Очистка Alert. */
export const clearAlert = createAction(
    `${prefix}/clearAlert`
  );  

/** Установка состояния успешной авторизации. */
export const setAuthSuccess = createAction(
    `${prefix}/setAuthSuccess`,
    (user: IUser ) =>
        ({ payload: { user } })
);

/** Установка состояния успешной авторизации. */
export const setAuthLogout = createAction(
    `${prefix}/setAuthLogout`);

/** Деавторизация. */
export const deauthorize = createAction(`${prefix}/deauthorize`);

