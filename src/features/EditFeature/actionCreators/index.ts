import { Dispatch } from 'redux';
import SpacesService from '../../../services/SpacesService';
import IRequestError from '../../../models/IRequestError';
import * as Actions from '../actions';
import { ISpaceOffer } from '../../../models/ISpace';
import { AppThunkAction } from '../../../store/index';
import { ValidateSpaceInfo, ValidateAddressInfo, ValidateDescriptionInfo } from '../Validations';
import { EDIT_FORM_STEPS } from '../../../constants';

/** Сброс состояния к изначальному. */
export const resetPageState = (): AppThunkAction =>
    (dispatch, getState) => {
        dispatch(Actions.resetPageState());
    };

export const setStepStart = (): AppThunkAction =>
    (dispatch, getState) => {
        dispatch(Actions.setStep(0));
    };

export const setClearErrors = (): AppThunkAction =>
    (dispatch, getState) => {
        dispatch(Actions.clearErrors());
    };

  /** Получаем карточки по email пользователя */
export const getUserSpace = (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await SpacesService.fetchUserSpace(id);
      dispatch(Actions.setUserSpace(response.data));
      dispatch(Actions.setLoading(false));

    } catch(err) {
      // dispatch(setError(err.response.data.message));
      const e = err as IRequestError;
      console.log(e);

      dispatch(Actions.setAlert(e.response?.data?.message));
      dispatch(Actions.setLoading(false));
    }
  }

  export const setInputChange = (field: string, value: string): AppThunkAction => 
  (dispatch: Dispatch, getState) => {
      dispatch(Actions.inputChange(field, value));

      // Очистка ошибок для изменённых полей.
      const { errors } = getState().edit;

      if (errors[field as keyof typeof errors]) {
        const newErrors = { ...errors };
        newErrors[field as keyof typeof errors] = '';

        dispatch(Actions.setInputErrors(newErrors));
      }
  }

  export const setAddressChange = 
  (value: string): AppThunkAction => (dispatch, getState) => {
    const { errors } = getState().edit;

      dispatch(Actions.inputAddressChange(value));

      if (errors.location?.address) {
        const newErrors = { 
          ...errors,
          location: { 
            ...errors.location, 
            address: ''
          }
        };

        dispatch(Actions.setInputErrors(newErrors));
      }
  }

  export const setCoordinatesChange = 
  (field: string, value?: string): AppThunkAction => (dispatch, getState) => {
      const { errors } = getState().edit;
 
      dispatch(Actions.inputCoordinatesChange(field, value));

      if (errors.location?.lat || errors.location?.lng) {
        const newErrors = { 
          ...errors,
          location: { 
            ...errors.location, 
            [field]: ''
          }
        };

        dispatch(Actions.setInputErrors(newErrors));
      }
  }

  export const setPhoneChange = 
  (field: string, value: string): AppThunkAction => (dispatch, getState) => {
      const { space, errors } = getState().edit;
      const { phone } = space;

      const newPhone = { ...phone, [field]: value };
      dispatch(Actions.inputPhoneChange(newPhone));


      if (errors.phone?.code || errors.phone?.number) {
        const newErrors = { 
          ...errors,
          phone: { 
            ...errors.phone, 
            [field]: ''
          }
        };

        dispatch(Actions.setInputErrors(newErrors));
      }

  }

  export const setLineChange = 
  (name: string, hex: string): AppThunkAction => (dispatch, getState) => {
      dispatch(Actions.inputLineChange(name, hex));
      dispatch(Actions.inputStationChange('', '', '', ''));
  }
  export const setStationChange = 
  (id: string, lat: number | null, lng: number | null, name: string, slug?: string): AppThunkAction => (dispatch, getState) => {
    const latString = lat ? lat.toString() : '';
    const lngString = lng ? lng.toString() : '';
      dispatch(Actions.inputStationChange(id, latString, lngString, name, slug));
  }

  export const setHoursOpenChange = 
  (day: string, time?: number): AppThunkAction => (dispatch, getState) => {
      dispatch(Actions.inputHoursOpenChange(day, time));
  }
  export const setHoursCloseChange = 
  (day: string, time?: number): AppThunkAction => (dispatch, getState) => {
    dispatch(Actions.inputHoursCloseChange(day, time));
}
  export const setOffer = 
  (offer: ISpaceOffer): AppThunkAction => (dispatch, getState) => {
    dispatch(Actions.addOffer(offer));
}
  export const setDeleteOffer = 
  (uid: number): AppThunkAction => (dispatch, getState) => {
    dispatch(Actions.deleteOffer(uid));
}

// NAVIGATION & VALIDATION
export const confirmSpaceInfo = 
(): AppThunkAction => (dispatch, getState) => {
  const { space } = getState().edit

  const validation = ValidateSpaceInfo(space);

  if (validation.hasErrors) {
    dispatch(Actions.setInputErrors(validation.errors));
    return;
  }

  dispatch(Actions.setStep(EDIT_FORM_STEPS.Address));
}

export const confirmAddressInfo = 
(): AppThunkAction => (dispatch, getState) => {
  const { space } = getState().edit

  const validation = ValidateAddressInfo(space);

  if (validation.hasErrors) {
    dispatch(Actions.setInputErrors(validation.errors));
    return;
  }

  dispatch(Actions.setStep(EDIT_FORM_STEPS.Description));
}

export const confirmDescriptionInfo = 
(): AppThunkAction => (dispatch, getState) => {
  const { space } = getState().edit;

  const validation = ValidateDescriptionInfo(space);

  if (validation.hasErrors) {
    dispatch(Actions.setInputErrors(validation.errors));
    return;
  }

  dispatch(Actions.setStep(EDIT_FORM_STEPS.Hours));
}

export const confirmHoursInfo = 
(): AppThunkAction => (dispatch, getState) => {
  dispatch(Actions.setStep(EDIT_FORM_STEPS.Offers));
}

export const confirmOffersInfo = 
(): AppThunkAction => (dispatch, getState) => {
  dispatch(Actions.setStep(EDIT_FORM_STEPS.Images));
}

export const setActionStepBack = 
(): AppThunkAction => (dispatch, getState) => {
  dispatch(Actions.actionStepBack());
  dispatch(Actions.setAlert(''));
}

// Save Space Data
export const setSaveSpaceData = (): AppThunkAction => async (dispatch, getState) => {
  try {
    const { space } = getState().edit;
    dispatch(Actions.setLoading(true));
    dispatch(Actions.setAlert(''));

    const response = await SpacesService.saveUserSpace(space);

    if (Object.keys(response.data).length) {
      dispatch(Actions.setUserSpace(response.data));
      dispatch(Actions.setAlert('Данные сохранены'));
    }

    dispatch(Actions.setLoading(false));

  } catch(err) {
    // dispatch(setError(err.response.data.message));
    const e = err as IRequestError;
    console.log(e);

    dispatch(Actions.setAlert(e.response?.data?.message));
    dispatch(Actions.setLoading(false));
  }
}

export const addTag = 
(tag: string): AppThunkAction => (dispatch, getState) => {
  const { tags } = getState().edit.space;
  if (!tags.includes(tag)) {
    dispatch(Actions.addTag(tag));
  }
}

export const removeTag = 
(tag: string): AppThunkAction => (dispatch, getState) => {
  dispatch(Actions.removeTag(tag));
}

// AUTH BACKBLAZE
export const getUploadImageUrl = (): AppThunkAction => async (dispatch, getState) => {
  try {
    dispatch(Actions.setLoading(true));
    dispatch(Actions.setAlert(''));

    const response = await SpacesService.getUploadImageUrl();

    const { authorizationToken, uploadUrl } = response.data;
    dispatch(Actions.setImageUploadData(authorizationToken, uploadUrl));
    dispatch(Actions.setLoading(false));
  } catch(err) {
    const e = err as IRequestError;
    console.log(e);

    dispatch(Actions.setAlert(e.response?.data?.message));
    dispatch(Actions.setLoading(false));
  }
}

// IMAGE UPLAOD
export const updateSpaceMainImage = 
(url: string, fileName: string, fileId: string): AppThunkAction => async (dispatch, getState) => {
  const { space } = getState().edit
  const { imgMain } = space;

  if (imgMain.fileName && imgMain.fileId) {
    await SpacesService.deleteImage(imgMain.fileName, imgMain.fileId);
  }

  if (space._id) {
    await SpacesService.updateSpaceMainImage(url, fileName, fileId, space._id);
  }
 
  dispatch(Actions.addUploadMainImageData(url, fileName, fileId));
}

export const updateSpaceTitleImage = 
(url: string, fileName: string, fileId: string): AppThunkAction => async (dispatch, getState) => {
  const { space } = getState().edit
  const { imgTitle } = space;

  if (imgTitle.fileName && imgTitle.fileId) {
    await SpacesService.deleteImage(imgTitle.fileName, imgTitle.fileId);
  }

  if (space._id) {
    await SpacesService.updateSpaceTitleImage(url, fileName, fileId, space._id);
  }

  dispatch(Actions.addUploadTitleImageData(url, fileName, fileId));
}
