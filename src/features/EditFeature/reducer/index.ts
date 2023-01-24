import { createSlice } from '@reduxjs/toolkit';
import { EditState } from './types/editState';
import { EDIT_FORM_STEPS } from '../../../constants';
import * as Actions from '../actions';

export const initialState: EditState = {
    isLoading: false,
    alert: '',
    step: EDIT_FORM_STEPS.Info,
    errors: {},
    token: '',
    uploadUrl: '',
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
            url: 'https://f000.backblazeb2.com/file/topkovorking/default_160.jpg',
            fileName: '',
            fileId: ''
          },
        imgMain: {
            url: 'https://f000.backblazeb2.com/file/topkovorking/default_570.jpg',
            fileName: '',
            fileId: ''
          },
    },
};

export const editSlice = createSlice({
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
        // Navigation
        .addCase(Actions.setStep, (s, a) => {    
            s.step = a.payload.step;
        })
        .addCase(Actions.actionStepBack, (s, a) => {
            s.step -= 1;
        })
        .addCase(Actions.setUserSpace, (s, a) => {
            s.space = a.payload.space;
            s.alert = '';
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
        .addCase(Actions.inputLineChange, (s, a) => {
            s.space = {...s.space, subway: 
                { ...s.space.subway, 
                    lineName: a.payload.name,
                    hex_color:  a.payload.hex
                } }
        })
        .addCase(Actions.inputStationChange, (s, a) => {
            s.space = {...s.space, subway: { 
                ...s.space.subway, 
                id: a.payload.id,
                name: a.payload.name,
                lat: a.payload.lat,
                lng: a.payload.lng,
            } }
        })
        .addCase(Actions.inputHoursOpenChange, (s, a) => {
            
            s.space = {...s.space, 
                schedule: {...s.space.schedule, 
                    [a.payload.day]: { ...s.space.schedule[a.payload.day as keyof typeof s.space.schedule], 
                        open: a.payload.time }  }}
        })
        .addCase(Actions.inputHoursCloseChange, (s, a) => {
            s.space = {...s.space, 
                schedule: {...s.space.schedule, 
                    [a.payload.day]: { ...s.space.schedule[a.payload.day as keyof typeof s.space.schedule], 
                        close: a.payload.time }  }}
        })
        .addCase(Actions.addOffer, (s, a) => {
            s.space.offers = [...s.space.offers, a.payload.offer]
            
        })
        .addCase(Actions.deleteOffer, (s, a) => {
            s.space.offers = s.space.offers.filter(res => res.uid !== a.payload.uid);           
        })   
        .addCase(Actions.addTag, (s, a) => {
            console.log('add payload >>>> ', a.payload.tag);
          s.space.tags = [...s.space.tags, a.payload.tag];                      
        })
        .addCase(Actions.removeTag, (s, a) => {
            console.log('remove payload >>>> ', a.payload.tag);
           s.space.tags = s.space.tags.filter(t => t !== a.payload.tag);                   
        })
        // Images Upload
        .addCase(Actions.addUploadMainImageData, (s, a) => {
            s.space.imgMain.url = a.payload.url;           
            s.space.imgMain.fileName = a.payload.fileName;           
            s.space.imgMain.fileId = a.payload.fileId;           
        })
        .addCase(Actions.addUploadTitleImageData, (s, a) => {
            s.space.imgTitle.url = a.payload.url;           
            s.space.imgTitle.fileName = a.payload.fileName;           
            s.space.imgTitle.fileId = a.payload.fileId;          
        })
        .addCase(Actions.setImageUploadData, (s, a) => {
            console.log('redux >>>>>> ', a.payload);
            s.token = a.payload.token;           
            s.uploadUrl = a.payload.uploadUrl;           
        })

        

});

export default editSlice.reducer;