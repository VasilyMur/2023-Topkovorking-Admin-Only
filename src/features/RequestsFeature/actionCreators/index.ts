import { Dispatch } from 'redux';
import SpacesService from '../../../services/SpacesService';
import IRequestError from '../../../models/IRequestError';
import * as Actions from '../actions';
import { AppThunkAction } from '../../../store/index';

/** Сброс состояния к изначальному. */
export const resetPageState = (): AppThunkAction =>
    (dispatch, getState) => {
        dispatch(Actions.resetPageState());
    };


  /** Получаем запросы клиентов по всем пространствам пользователя */
export const setUserSpaceRequets = () => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await SpacesService.fetchUserSpaceCustomerRequests();

      dispatch(Actions.setUserSpaceRequets(response.data));
      dispatch(Actions.setLoading(false));

    } catch(err) {
      // dispatch(setError(err.response.data.message));
      const e = err as IRequestError;
      console.log(e);

      dispatch(Actions.setAlert(e.response?.data?.message));
      dispatch(Actions.setLoading(false));
    }
  }

  /** Удалить запрос */
export const deleteCustomerRequest = (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await SpacesService.deleteUserSpaceCustomerRequest(id);

      if (response && response.status === 200) {
        dispatch(Actions.setRemoveSpaceRequet(id));
        dispatch(Actions.setLoading(false));
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
