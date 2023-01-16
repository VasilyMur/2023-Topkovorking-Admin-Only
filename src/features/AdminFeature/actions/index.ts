import { createAction } from '@reduxjs/toolkit';
import { ISpace } from '../../../models/ISpace';

export const prefix = 'adminFeature';

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

/** Загрузка карточек. */
export const setUserSpaces = createAction(
    `${prefix}/setUserSpaces`,
    (spaces: ISpace[] ) =>
        ({ payload: { spaces } })
);

/** Меняем статус публикции. */
export const toggleSpacePublishStatus = createAction(
    `${prefix}/toggleSpacePublishStatus`,
    (space: ISpace ) =>
        ({ payload: { space } })
);

/** Меняем администратора заведения. */
export const assignSpaceAdminEmail = createAction(
    `${prefix}/assignSpaceAdminEmail`,
    (space: ISpace ) =>
        ({ payload: { space } })
);

/** Загрузка карточек. */
export const deleteUserSpace = createAction(
    `${prefix}/deleteUserSpace`,
    (id: string ) =>
        ({ payload: { id } })
);

