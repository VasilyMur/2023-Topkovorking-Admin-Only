import { createAction } from '@reduxjs/toolkit';
import { ICustomerRequest } from '../../../models/ICustomerRequest';

export const prefix = 'requestsFeature';

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

/** Загрузка заказов для всех пространств пользователя. */
export const setUserSpaceRequets = createAction(
    `${prefix}/setUserSpaceRequets`,
    (requests: ICustomerRequest[] ) =>
        ({ payload: { requests } })
);

/** Удалить запрос на станице. */
export const setRemoveSpaceRequet = createAction(
    `${prefix}/setRemoveSpaceRequet`,
    (id: string ) =>
        ({ payload: { id } })
);
