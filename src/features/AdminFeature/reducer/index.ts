import { createSlice } from '@reduxjs/toolkit';
import { AdminState } from './types/adminState';
import * as Actions from '../actions';

const initialState: AdminState = {
    isLoading: false,
    alert: '',
    spaces: [],
};

export const adminSlice = createSlice({
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
        .addCase(Actions.setUserSpaces, (s, a) => {
            s.spaces = a.payload.spaces;
            s.alert = '';
        })
        .addCase(Actions.deleteUserSpace, (s, a) => {
            s.spaces = s.spaces.filter(r => r._id !== a.payload.id);
            s.alert = '';
        })
        .addCase(Actions.toggleSpacePublishStatus, (s, a) => {
            const spaceIndex = s.spaces.findIndex(space => space.slug === a.payload.space.slug)
            s.spaces = [
                ...s.spaces.slice(0, spaceIndex),
                a.payload.space,
                ...s.spaces.slice(spaceIndex + 1),

            ];
            s.alert = '';
        })
        .addCase(Actions.assignSpaceAdminEmail, (s, a) => {
            const spaceIndex = s.spaces.findIndex(space => space.slug === a.payload.space.slug)
            s.spaces = [
                ...s.spaces.slice(0, spaceIndex),
                a.payload.space,
                ...s.spaces.slice(spaceIndex + 1),

            ];
            s.alert = '';
        })

});

export default adminSlice.reducer;