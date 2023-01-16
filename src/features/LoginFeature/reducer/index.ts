import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types/authState';
import { IUser } from '../../../models/IUser';
import * as Actions from '../actions';

const initialState: AuthState = {
    isLoading: false,
    isAuthorized: false,
    alert: '',
    user: {} as IUser,
};

export const authSlice = createSlice({
    name: Actions.prefix,
    initialState,
    reducers: {},
    extraReducers: builder => builder
    
        .addCase(Actions.setLoading, (s, a) => {
            s.isLoading = a.payload.isLoading;
        })
        .addCase(Actions.setAlert, (s, a) => {
            s.alert = a.payload.alert;
        })
        .addCase(Actions.setAuthSuccess, (s, a) => {
            s.isAuthorized = true;
            s.user = a.payload.user;
            s.alert = '';
        })
        .addCase(Actions.setAuthLogout, (s, a) => {
            s.isAuthorized = false;
            s.user = {} as IUser;
        })
        .addCase(Actions.clearAlert, (s, a) => {
            s.alert = '';
        })
});

export default authSlice.reducer;