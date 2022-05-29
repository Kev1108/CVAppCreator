import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'language',
    initialState: [""],
    reducers:{
        addLanguage(state){
            state.push("")
        },
        setLanguage(state,action){ 
            state[action.payload.index] = action.payload.text;
            
        }
    }
})
export const languageActions = languageSlice.actions;

export default languageSlice