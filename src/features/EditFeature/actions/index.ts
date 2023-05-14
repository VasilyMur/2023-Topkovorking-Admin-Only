import { createAction } from '@reduxjs/toolkit';
import { ISpace, ISpaceOffer } from '../../../models/ISpace';
import { EditErrors } from '../reducer/types/editState';

export const prefix = 'editFeature';

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

/** Загрузка карточки пространства. */
export const setUserSpace = createAction(
    `${prefix}/setUserSpace`,
    (space: ISpace ) =>
        ({ payload: { space } })
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

/** Изменение линии метро. */
export const inputLineChange = createAction(
  `${prefix}/inputLineChange`,
  // eslint-disable-next-line camelcase
  (name: string, hex: string) =>
      ({ payload: { name, hex } })
);

/** Изменение станции метро. */
export const inputStationChange = createAction(
  `${prefix}/inputStationChange`,
  (id: string, lat: string, lng: string, name: string, slug?: string) =>
      ({ payload: { id, lat, lng, name, slug } })
);

/** Изменение часов открытия. */
export const inputHoursOpenChange = createAction(
  `${prefix}/inputHoursOpenChange`,
  (day: string, time?: number) =>
      ({ payload: { day, time } })
);

/** Изменение часов закрытия. */
export const inputHoursCloseChange = createAction(
  `${prefix}/inputHoursCloseChange`,
  (day: string, time?: number) =>
  ({ payload: { day, time } })
);

/** Офферы */
/** Изменение названия оффера. */
export const addOffer = createAction(
  `${prefix}/addOffer`,
  (offer: ISpaceOffer) =>
  ({ payload: { offer } })
);
export const deleteOffer = createAction(
  `${prefix}/deleteOffer`,
  (uid: number) =>
  ({ payload: { uid } })
);

/** Add upload image data to state */
export const addUploadMainImageData = createAction(
  `${prefix}/addUploadMainImage`,
  (url: string, fileName: string, fileId: string) =>
  ({ payload: { url, fileName, fileId } })
);
export const addUploadTitleImageData = createAction(
  `${prefix}/addUploadTitleImage`,
  (url: string, fileName: string, fileId: string) =>
  ({ payload: { url, fileName, fileId } })
);
export const setImageUploadData = createAction(
  `${prefix}/setImageUploadData`,
  (token: string, uploadUrl: string) =>
  ({ payload: { token, uploadUrl } })
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


export const setStep = createAction(
  `${prefix}/setStep`,
  (step: number) => 
  ({ payload: { step } })
);

export const actionStepBack = createAction(
  `${prefix}/actionStepBack`
);

export const addTag = createAction(
  `${prefix}/addTag`,
  (tag: string) => 
  ({ payload: { tag } })
);

export const removeTag = createAction(
  `${prefix}/removeTag`,
  (tag: string) => 
  ({ payload: { tag } })
);

export const addBeautyType = createAction(
  `${prefix}/addBeautyType`,
  (type: string) => 
  ({ payload: { type } })
);

export const removeBeautyType = createAction(
  `${prefix}/removeBeautyType`,
  (type: string) => 
  ({ payload: { type } })
);


