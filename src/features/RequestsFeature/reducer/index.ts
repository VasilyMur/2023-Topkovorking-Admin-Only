import { createSlice } from '@reduxjs/toolkit';
import { CustomerRequestsState } from './types/customerRequestsState';
import * as Actions from '../actions';

const initialState: CustomerRequestsState = {
    isLoading: false,
    alert: '',
    userRequests: []
};

export const requestsSlice = createSlice({
    name: Actions.prefix,
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(Actions.resetPageState, (s, a) => ({ ...initialState }))
        .addCase(Actions.setLoading, (s, a) => {
            s.isLoading = a.payload.isLoading;
        })
        .addCase(Actions.setAlert, (s, a) => {
            s.alert = a.payload.alert;
        })
        .addCase(Actions.setUserSpaceRequets, (s, a) => {
            s.userRequests = a.payload.requests;
        })        
        .addCase(Actions.setRemoveSpaceRequet, (s, a) => {            
            s.userRequests = s.userRequests.filter(r => r._id !== a.payload.id);
        })        

});

export default requestsSlice.reducer;