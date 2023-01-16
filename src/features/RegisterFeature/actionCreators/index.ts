import { Dispatch } from 'redux';
import AuthService from '../../../services/AuthService';
import IRequestError from '../../../models/IRequestError';
import { setAuthSuccess } from '../../LoginFeature/actions';
import * as Actions from '../actions'


/** Регистрация. */
export const register = (email: string, password: string) => async (dispatch: Dispatch) => {
      try {
        dispatch(Actions.setLoading(true));
        dispatch(Actions.clearAlert());

        const response = await AuthService.register(email, password);
        localStorage.setItem('token', response.data.accessToken);

        if (response.status === 200) {
          dispatch(setAuthSuccess(response.data.user));
          dispatch(Actions.setLoading(false));
          dispatch(Actions.setAlert('Вы успешно зарегистрировались! Пройдите по ссылке в вашем почтовом ящике, для подтверждения email.'));
        }


      } catch(err) {
        // dispatch(setError(err.response.data.message));
        const e = err as IRequestError;
            console.log(e);

        dispatch(Actions.setAlert(e.response?.data?.message));
        dispatch(Actions.setLoading(false));
      }
    }
