import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './types/authState';
import * as Actions from '../actions';

const initialState: AuthState = {
    isLoading: false,
    alert: '',
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
        .addCase(Actions.clearAlert, (s, a) => {
            s.alert = '';
        })
});

export default authSlice.reducer;