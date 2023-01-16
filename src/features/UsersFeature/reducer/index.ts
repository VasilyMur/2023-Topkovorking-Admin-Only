import { createSlice } from '@reduxjs/toolkit';
import { UsersListState } from './types/usersListState';
import * as Actions from '../actions';

const initialState: UsersListState = {
    isLoading: false,
    alert: '',
    usersList: []
};

export const usersListSlice = createSlice({
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
        .addCase(Actions.setUsersList, (s, a) => {
            s.usersList = a.payload.users;
        })        
        .addCase(Actions.setRemoveUser, (s, a) => {            
            s.usersList = s.usersList.filter(r => r._id !== a.payload.id);
        })        
        .addCase(Actions.setUpdatedUser, (s, a) => {   
            const { user } = a.payload;         
            const userIndex = s.usersList.findIndex(u => u._id === user._id); 

            s.usersList = [
                ...s.usersList.slice(0, userIndex),
                user,
                ...s.usersList.slice(userIndex + 1),
            ];
        })        

});

export default usersListSlice.reducer;