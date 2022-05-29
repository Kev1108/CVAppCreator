import { createSlice } from "@reduxjs/toolkit";


const stepSlice = createSlice({
    name: 'step',
    initialState: {
        formStep : '1',
        formFilled: false
    },
    reducers:{
        changeStep(state,action){
            state.formStep = action.payload;
            
        },
        changeFilledState(state){
            let currentState = state.formFilled;
            state.formFilled = !currentState;
        }
    }
})

export const stepAction = stepSlice.actions;
export default stepSlice;

