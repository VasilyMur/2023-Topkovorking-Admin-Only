import { Dispatch } from 'redux';
import UserService from '../../../services/UserService';
import IRequestError from '../../../models/IRequestError';
import * as Actions from '../actions';
import { AppThunkAction } from '../../../store/index';

/** Сброс состояния к изначальному. */
export const resetPageState = (): AppThunkAction =>
    (dispatch, getState) => {
        dispatch(Actions.resetPageState());
    };

  /** Получаем запросы клиентов по всем пространствам пользователя */
export const getUsersList = () => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await UserService.fetchUsers();

      dispatch(Actions.setUsersList(response.data));
      dispatch(Actions.setLoading(false));

    } catch(err) {
      // dispatch(setError(err.response.data.message));
      const e = err as IRequestError;
      console.log(e);

      dispatch(Actions.setAlert(e.response?.data?.message));
      dispatch(Actions.setLoading(false));
    }
  }

  /** Удалить пользователя */
export const removeUser = (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await UserService.deleteUser(id);

      if (response && response.status === 200) {
        dispatch(Actions.setRemoveUser(id));
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

  /** Активировать пользователя */
export const activateUser = (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await UserService.activateUser(id);

      if (response && response.status === 200) {
        dispatch(Actions.setUpdatedUser(response.data));
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

  /** Пользователь может делать запросы */
export const toggleCanCreate = (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await UserService.toggleCanCreate(id);

      if (response && response.status === 200) {
        dispatch(Actions.setUpdatedUser(response.data));
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
