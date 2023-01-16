import { Dispatch } from 'redux';
import SpacesService from '../../../services/SpacesService';
import IRequestError from '../../../models/IRequestError';
import * as Actions from '../actions';
import { ISpaceOffer } from '../../../models/ISpace';
import { AppThunkAction } from '../../../store/index';
import { ValidateSpaceInfo, ValidateAddressInfo, ValidateDescriptionInfo } from '../Validations';

/** Сброс состояния к изначальному. */
export const resetPageState = (): AppThunkAction =>
    (dispatch, getState) => {
        dispatch(Actions.resetPageState());
    };

export const setClearErrors = (): AppThunkAction =>
    (dispatch, getState) => {
        dispatch(Actions.clearErrors());
    };

export const setInputChange = (field: string, value: string): AppThunkAction => 
  (dispatch: Dispatch, getState) => {
      dispatch(Actions.inputChange(field, value));

      // Очистка ошибок для изменённых полей.
      const { errors } = getState().draft;

      if (errors[field as keyof typeof errors]) {
        const newErrors = { ...errors };
        newErrors[field as keyof typeof errors] = '';

        dispatch(Actions.setInputErrors(newErrors));
      }
  }

export const setAddressChange = 
  (value: string): AppThunkAction => (dispatch, getState) => {
    const { errors } = getState().draft;

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
      const { errors } = getState().draft;
 
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
      const { space, errors } = getState().draft;
      const { phone } = space;
      console.log('phone ORIGINAL >>>> ', phone);
      console.log('phone field >>>> ', field);
      console.log('phone value  >>>> ', value);

      const newPhone = { ...phone, [field]: value };

      console.log('newPhone >>>> ', newPhone);
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


// Save Space Data
export const setSaveSpaceData = (): AppThunkAction => async (dispatch, getState) => {
  try {
    const { space } = getState().draft;
    dispatch(Actions.setAlert(''));

    const validation = ValidateSpaceInfo(space);

    if (validation.hasErrors) {
      dispatch(Actions.setInputErrors(validation.errors));
      return;
    }

    dispatch(Actions.setLoading(true));
  
    const response = await SpacesService.saveUserSpace(space);

    if (Object.keys(response.data).length) {
      dispatch(Actions.resetPageState());
      dispatch(Actions.setAlert('Запрос успешно отправлен! Карточка пространства доступна в разделе "Пространства"'));
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

