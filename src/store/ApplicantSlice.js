import {createSlice} from '@reduxjs/toolkit'

 const applicantSlice =  createSlice({
    name: 'applicant',
    initialState: {
        firstName: "",
        lastName: "",
        title: "",
        address: "",
        email: "",
        country: "",
        cellphone: "",
        link: "",
        profile: ""
    },
    reducers: {
        setFirstName(state,action){
            state.firstName = action.payload;
        },
        setLastName(state,action){
             state.lastName = action.payload;
        },
        setTitle(state,action){
             state.title = action.payload;
        },
        setAddress(state,action){
             state.address = action.payload;
        },
        setEmail(state,action){
            state.email = action.payload;
        },
        setCountry(state,action){
             state.country = action.payload;
        },
        setCellphone(state,action){
             state.cellphone = action.payload;
        },
        setLink(state,action){
             state.link = action.payload;
        },
        setImage(state,action){
            state.image = action.payload;
        },
        setProfile(state,action){
            state.profile = action.payload;
        }
    }
})

export const applicantActions = applicantSlice.actions;

export default applicantSlice;