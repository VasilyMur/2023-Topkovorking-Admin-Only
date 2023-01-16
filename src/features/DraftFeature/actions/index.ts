import { createAction } from '@reduxjs/toolkit';
import { ISpace } from '../../../models/ISpace';
import { EditErrors } from '../reducer/types/draftState';

export const prefix = 'draftFeature';

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

/** Изменение input формы. */
export const inputChange = createAction(
  `${prefix}/inputChange`,
  (field: string, value: string ) =>
      ({ payload: { field, value } })
);

/** Изменение input address формы. */
export const inputAddressChange = createAction(
  `${prefix}/inputAddressChange`,
  (value: string ) =>
      ({ payload: { value } })
);

/** Изменение phone code & number формы. */
export const inputPhoneChange = createAction(
  `${prefix}/inputPhoneChange`,
  (phone: {}) =>
    ({ payload: { phone } }) 
);
/** Изменение координат формы. */
export const inputCoordinatesChange = createAction(
  `${prefix}/inputCoordinatesChange`,
  (field: string, value?: string ) =>
      ({ payload: { field, value } })
);

/** NAVIGATION & VALIDATION. */
export const setInputErrors = createAction(
  `${prefix}/setInputErrors`,
  (errors: EditErrors) => 
    ({ payload: { errors } })
  
);

export const clearErrors = createAction(
  `${prefix}/clearErrors`
);
