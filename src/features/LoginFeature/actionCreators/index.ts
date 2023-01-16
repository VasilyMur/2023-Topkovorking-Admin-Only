import { Dispatch } from 'redux';
import axios from 'axios';
import AuthService from '../../../services/AuthService';
import UserService from '../../../services/UserService';
import { AppThunkAction } from '../../../store/index';
import IRequestError from '../../../models/IRequestError';
import { setLoading, setAuthSuccess, setAlert, setAuthLogout, clearAlert } from '../actions';
import { AuthResponse } from '../../../models/response/AuthResponse';
import { URL_API_REFRESH, URL_BASE } from '../../../constants';

/** Логин. */
export const login = (email: string, password: string) => async (dispatch: Dispatch) => {
      try {
        dispatch(setLoading(true));
        const response = await AuthService.login(email, password);
        localStorage.setItem('token', response.data.accessToken);

        dispatch(setAuthSuccess(response.data.user));
        dispatch(setLoading(false));
      } catch(err) {
        // dispatch(setError(err.response.data.message));
        const e = err as IRequestError;
            console.log('login err', e);

        dispatch(setAlert(e.response?.data?.message));
        dispatch(setLoading(false));
      }
    }

/** Регистрация. */
export const register = (email: string, password: string) => async (dispatch: Dispatch) => {
      try {
        console.log('action register fire****')
        dispatch(setLoading(true));
        const response = await AuthService.register(email, password);
        localStorage.setItem('token', response.data.accessToken);

        dispatch(setAuthSuccess(response.data.user));
        dispatch(setLoading(false));

      } catch(err) {
        // dispatch(setError(err.response.data.message));
        const e = err as IRequestError;
            console.log(e);

        dispatch(setAlert(e.response?.data?.message));
        dispatch(setLoading(false));
      }
    }

/** Logout. */
export const logout = () => async (dispatch: Dispatch) => {
      try {
        console.log('action logout fire****')
        dispatch(setLoading(true));
        await AuthService.logout();
        console.log('action logout - finally rmoveving token')
        localStorage.removeItem('token');

        dispatch(setAuthLogout());
        dispatch(setLoading(false));

      } catch(err) {
        // dispatch(setError(err.response.data.message));
        const e = err as IRequestError;
            console.log(e);

        dispatch(setAlert(e.response?.data?.message));
        dispatch(setLoading(false));
      }
    }

  /** Проверка залогинен пользователь или нет. */
export const checkAuth = () => async (dispatch: Dispatch) => {
    try {
      dispatch(setLoading(true));
      const response = await axios.get<AuthResponse>(
        `${URL_BASE}${URL_API_REFRESH}`,
        { withCredentials: true }
        );

      localStorage.setItem('token', response.data.accessToken);

      dispatch(setAuthSuccess(response.data.user));
      dispatch(setLoading(false));

    } catch(err) {
      // dispatch(setError(err.response.data.message));
      const e = err as IRequestError;
          console.log('login action> ', e);

      dispatch(setAlert(e.response?.data?.message));
      dispatch(setLoading(false));
    }
  }

  /** Тестируем getUsers */
// export const fetchUsers = () => async (dispatch: Dispatch) => {
//     try {
//       dispatch(setLoading(true));
//       const response = await UserService.fetchUsers();
//       console.log('response users >>>>>>>>> ', response.data )
//       dispatch(setLoading(false));

//     } catch(err) {
//       // dispatch(setError(err.response.data.message));
//       const e = err as IRequestError;
//       console.log(e);

//       dispatch(setAlert(e.response?.data?.message));
//       dispatch(setLoading(false));
//     }
//   }

  export const setClearAlert = (): AppThunkAction =>
  (dispatch, getState) => {
      dispatch(clearAlert());
  };