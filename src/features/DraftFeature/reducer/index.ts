import { createSlice } from '@reduxjs/toolkit';
import { DraftState } from './types/draftState';
import * as Actions from '../actions';

export const initialState: DraftState = {
    isLoading: false,
    alert: '',
    errors: {},
    space: {
        _id: '',
        slug: '',
        url: '',
        name: '',
        type: '',
        city: '',
        admin: null,
        adminDetails: null,
        created: undefined,
        publishStatus: '',
        description: '',
        country: '',
        priceDay: '',
        tags: [],
        phone: { code: '', number: '' },
        gallery: [],
        offers: [],
        location: {
            address: '',
            lat: '',
            lng: ''
        },
        actions: {},
        subway: {
            hex_color: '',
            id: '',
            lineName: '',
            name: '',
            lat: '',
            lng: ''
        },
        schedule: {
            monday: {
                open: 1660546800000,
                close: 1660582800000,
            },
            tuesday: {
                open: 1660546800000,
                close: 1660582800000,
            },
            wednesday: {
                open: 1660546800000,
                close: 1660582800000,
            },
            thursday: {
                open: 1660546800000,
                close: 1660582800000,
            },
            friday: {
                open: 1660546800000,
                close: 1660582800000,
            },
            saturday: {
                open: 1660546800000,
                close: 1660582800000,
            },
            sunday: {
                open: 1660546800000,
                close: 1660582800000,
            }
        },
        // Images
        imgTitle: {
            url: 'https://files.cloudimages.ru/file/topkovorking/default_160.jpg',
            fileName: '',
            fileId: ''
          },
        imgMain: {
            url: 'https://files.cloudimages.ru/file/topkovorking/default_570.jpg',
            fileName: '',
            fileId: ''
          },
    },
};

export const draftSlice = createSlice({
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
        // Errors
        .addCase(Actions.setInputErrors, (s, a) => {
            s.errors = a.payload.errors;
        })
        .addCase(Actions.clearErrors, (s, a) => {
            s.errors = {};
        })
        .addCase(Actions.inputChange, (s, a) => {
            const { field, value } = a.payload;
            s.space = {...s.space, [field]: value}
        })
        .addCase(Actions.inputAddressChange, (s, a) => {
            s.space = {...s.space, location: 
                { ...s.space.location, address: a.payload.value }}
        })
        .addCase(Actions.inputCoordinatesChange, (s, a) => {
            s.space = {...s.space, 
                location: { 
                    ...s.space.location, 
                    [a.payload.field]: a.payload.value || ''
                 }}
        })
        .addCase(Actions.inputPhoneChange, (s, a) => {
            s.space = {...s.space, phone: a.payload.phone }
        })

        

});

export default draftSlice.reducer;