import { Dispatch } from 'redux';
import { AppThunkAction } from '../../../store/index';
import SpacesService from '../../../services/SpacesService';
import IRequestError from '../../../models/IRequestError';
import * as Actions from '../actions';

  /** Получаем карточки по email пользователя */
export const getUserSpaces = () => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await SpacesService.fetchUserSpaces();
      // console.log('response spaces >>>>>>>>> ', response.data )
      dispatch(Actions.setUserSpaces(response.data));
      dispatch(Actions.setLoading(false));

    } catch(err) {
      // dispatch(setError(err.response.data.message));
      const e = err as IRequestError;
      console.log(e);

      dispatch(Actions.setAlert(e.response?.data?.message));
      dispatch(Actions.setLoading(false));
    }
  }

  /** Филтруем карточки карточки */
export const filterUserSpaces = (pending: boolean | null, text: string | null, ) => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await SpacesService.fetchFilteredUserSpaces(pending, text);
      
      dispatch(Actions.setUserSpaces(response.data));
      dispatch(Actions.setLoading(false));

    } catch(err) {
      // dispatch(setError(err.response.data.message));
      const e = err as IRequestError;
      console.log(e);

      dispatch(Actions.setAlert(e.response?.data?.message));
      dispatch(Actions.setLoading(false));
    }
  }

  /** Филтруем карточки карточки по email */
export const filterUserSpacesEmail = (email: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(Actions.setLoading(true));
      const response = await SpacesService.fetchFilteredUserSpacesByEmail(email);
      
      dispatch(Actions.setUserSpaces(response.data));
      dispatch(Actions.setLoading(false));

    } catch(err) {
      // dispatch(setError(err.response.data.message));
      const e = err as IRequestError;
      console.log(e);

      dispatch(Actions.setAlert(e.response?.data?.message));
      dispatch(Actions.setLoading(false));
    }
  }

// Delete Space 
export const setDeleteSpaceData = (_id: string): AppThunkAction => async (dispatch, getState) => {
  try {
    dispatch(Actions.setLoading(true));
    const response = await SpacesService.deleteUserSpace(_id);

    if (response.status === 200) {
      const { data } = response;
      dispatch(Actions.deleteUserSpace(data));
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

// Toggle Publish Status
export const toggleSpacePublishStatus = (slug: string): AppThunkAction => async (dispatch, getState) => {
  try {

    dispatch(Actions.setLoading(true));
    const response = await SpacesService.toggleSpacePublishStatus(slug);
    const { data } = response;

    dispatch(Actions.toggleSpacePublishStatus(data))
    dispatch(Actions.setLoading(false));

  } catch(err) {
    // dispatch(setError(err.response.data.message));
    const e = err as IRequestError;
    console.log(e);

    dispatch(Actions.setAlert(e.response?.data?.message));
    dispatch(Actions.setLoading(false));
  }
}

// Change Space admin
export const assignSpaceAdminEmail = (slug: string, email: string): AppThunkAction => async (dispatch, getState) => {
  try {

    dispatch(Actions.setLoading(true));
    const response = await SpacesService.assignSpaceAdminEmail(slug, email);
    const { data } = response;

    dispatch(Actions.assignSpaceAdminEmail(data))
    dispatch(Actions.setLoading(false));

  } catch(err) {
    // dispatch(setError(err.response.data.message));
    const e = err as IRequestError;
    console.log(e);

    dispatch(Actions.setAlert(e.response?.data?.message));
    dispatch(Actions.setLoading(false));
  }
}